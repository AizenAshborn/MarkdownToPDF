'use client';

import { useState, useRef, useEffect } from 'react';
import { marked } from 'marked';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Settings, Loader, Printer, ChevronDown } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { templates, PdfTemplate } from '@/lib/templates';
import StylePanel from './style-panel';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { saveAs } from 'file-saver';


const DEFAULT_MARKDOWN = `# Welcome to Markdwn2PDF!

This is a live Markdown editor. Your changes will be reflected in the preview pane on the right.

## Features

- **Real-time Preview**: See your rendered HTML as you type.
- **PDF Export**: Convert your Markdown to a PDF with one click.
- **Templates**: Choose from different styles for your PDF.
- **AI Styling**: Use the settings icon to intelligently customize your document.

### Code Blocks
\`\`\`javascript
function greet() {
  console.log("Hello, world!");
}
\`\`\`

### Lists
1. First item
2. Second item
3. Third item

- Unordered item
- Another one

> Blockquote: Start typing in the editor to see the magic happen!
`;

const Editor = () => {
    const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);
    const [selectedTemplate, setSelectedTemplate] = useState<PdfTemplate>(templates[0]);
    const [customStyles, setCustomStyles] = useState<string>('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [isStylePanelOpen, setIsStylePanelOpen] = useState(false);
    const [stats, setStats] = useLocalStorage('template-stats', {});

    const previewRef = useRef<HTMLDivElement>(null);

    const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(e.target.value);
    };

    const handleTemplateChange = (templateId: string) => {
        const template = templates.find(t => t.id === templateId) || templates[0];
        setSelectedTemplate(template);
    };

    const generatePdf = async () => {
        if (!previewRef.current) return;
        setIsGenerating(true);
        try {
            const canvas = await html2canvas(previewRef.current, {
                scale: 1.5,
                useCORS: true,
                logging: false,
            });
            
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            
            const ratio = canvasWidth/canvasHeight;
            const imgHeight = pdfWidth / ratio;
            let heightLeft = imgHeight;
            let position = 0;

            const pageData = canvas.toDataURL('image/png', 1.0);
            
            if (heightLeft < pdfHeight) {
                pdf.addImage(pageData, 'PNG', 0, 0, pdfWidth, imgHeight);
            } else {
                while(heightLeft > 0) {
                    pdf.addImage(pageData, 'PNG', 0, position, pdfWidth, imgHeight);
                    heightLeft -= pdfHeight;
                    position -= pdfHeight;
                    if (heightLeft > 0) {
                        pdf.addPage();
                    }
                }
            }
            
            pdf.save(`${selectedTemplate.id}-document.pdf`);

            setStats(prevStats => ({
                ...prevStats,
                [selectedTemplate.id]: (prevStats[selectedTemplate.id] || 0) + 1,
            }));
        } catch (error) {
            console.error('Error generating PDF:', error);
        } finally {
            setIsGenerating(false);
        }
    };
    
    const [html, setHtml] = useState('');
    useEffect(() => {
        const getHtml = async () => {
            const rawHtml = await marked.parse(markdown) as string;
            setHtml(rawHtml);
        }
        getHtml();
    }, [markdown]);

    const handlePrintPreview = () => {
        const printContent = previewRef.current?.innerHTML;
        if (!printContent) return;

        const printWindow = window.open('', '_blank');
        printWindow?.document.write(`
            <html>
                <head>
                    <title>Print Preview</title>
                    <style>
                        ${selectedTemplate.styles}
                        ${customStyles}
                        @media print {
                            body { -webkit-print-color-adjust: exact; }
                        }
                    </style>
                </head>
                <body onload="window.print();window.close()">
                    <div class="preview-container">${printContent}</div>
                </body>
            </html>
        `);
        printWindow?.document.close();
    };

    const handleDownloadMarkdown = () => {
        const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
        saveAs(blob, 'document.md');
    };

    return (
        <>
            <style>
                {`
                ${selectedTemplate.styles}
                ${customStyles}
                `}
            </style>
            <section className="space-y-6">
                <div className="flex justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Select onValueChange={handleTemplateChange} defaultValue={selectedTemplate.id}>
                            <SelectTrigger className="w-[200px] bg-card">
                                <SelectValue placeholder="Select a template" />
                            </SelectTrigger>
                            <SelectContent>
                                {templates.map(template => (
                                    <SelectItem key={template.id} value={template.id}>
                                        {template.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                         <Button variant="outline" size="icon" onClick={() => setIsStylePanelOpen(true)}>
                            <Settings className="h-4 w-4" />
                            <span className="sr-only">Customize Styles</span>
                        </Button>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button onClick={generatePdf} disabled={isGenerating} className="min-w-[150px]">
                            {isGenerating ? <Loader className="animate-spin mr-2 h-4 w-4" /> : <Download className="mr-2 h-4 w-4" />}
                            {isGenerating ? 'Generating...' : 'Download PDF'}
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={handlePrintPreview}>
                                    <Printer className="mr-2 h-4 w-4" />
                                    Print Preview
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={handleDownloadMarkdown}>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download .md
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 min-h-[70vh]">
                    <Card className="flex flex-col shadow-lg">
                        <CardContent className="p-0 flex-1">
                            <Textarea
                                value={markdown}
                                onChange={handleMarkdownChange}
                                placeholder="Type your Markdown here..."
                                className="w-full h-full resize-none border-0 rounded-lg focus-visible:ring-0 font-code text-sm p-6"
                            />
                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden shadow-lg">
                        <CardContent className="p-0 h-full">
                            <div
                                ref={previewRef}
                                className="preview-container p-8 h-full overflow-y-auto"
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </CardContent>
                    </Card>
                </div>
                 <StylePanel 
                    isOpen={isStylePanelOpen} 
                    setIsOpen={setIsStylePanelOpen}
                    baseTemplate={selectedTemplate}
                    onStylesGenerated={setCustomStyles}
                />
            </section>
        </>
    );
};

export default Editor;
