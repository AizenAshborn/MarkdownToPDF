'use client';

import { useState, useRef, useEffect } from 'react';
import { marked } from 'marked';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Settings, Loader } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { templates, PdfTemplate } from '@/lib/templates';
import StylePanel from './style-panel';
import { useLocalStorage } from '@/hooks/use-local-storage';

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
                scale: 1, // Use a scale of 1 to capture at native resolution
                useCORS: true,
                logging: false,
            });
            
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const canvasAspectRatio = canvasWidth / canvasHeight;

            // Calculate the height of the image in the PDF to maintain aspect ratio
            const imgHeight = pdfWidth / canvasAspectRatio;
            let heightLeft = imgHeight;

            let position = 0;
            
            pdf.addImage(canvas, 'PNG', 0, position, pdfWidth, imgHeight);
            heightLeft -= pdfHeight;

            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(canvas, 'PNG', 0, position, pdfWidth, imgHeight);
                heightLeft -= pdfHeight;
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
                        <Select onValuechange={handleTemplateChange} defaultValue={selectedTemplate.id}>
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
                    <Button onClick={generatePdf} disabled={isGenerating} className="min-w-[150px]">
                        {isGenerating ? <Loader className="animate-spin mr-2 h-4 w-4" /> : <Download className="mr-2 h-4 w-4" />}
                        {isGenerating ? 'Generating...' : 'Download PDF'}
                    </Button>
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
