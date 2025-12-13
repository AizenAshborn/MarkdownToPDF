'use client';

import { useState, useRef, useEffect } from 'react';
import { marked } from 'marked';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Settings, Loader, Printer, ChevronDown, FileDown, Code } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { templates, PdfTemplate } from '@/lib/templates';
import StylePanel from './style-panel';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { saveAs } from 'file-saver';
import { VideoAdModal } from './video-ad-modal';
import { useToast } from '@/hooks/use-toast';

const DEFAULT_MARKDOWN = `# Your Ultimate Markdown to PDF Converter

Welcome to the best free tool to **convert Markdown to PDF online**. This live editor provides a real-time preview, so you can see your changes instantly. Whether you're a student, a developer, or a professional, our tool makes creating high-quality documents effortless.

## How to Convert Markdown to PDF?

1.  **Write or Paste**: Simply type your Markdown text in this editor, or paste it from another source.
2.  **Style It**: Choose from our professional PDF templates like 'Minimal Clean' or 'Academic Paper'.
3.  **Customize**: Use the AI Styling panel (the settings icon) to customize fonts, colors, and more.
4.  **Download**: Click "Download PDF" to get your beautifully formatted document.

### Core Features

-   **Free Markdown to PDF Converter**: No sign-up required for basic use.
-   **Live Markdown Preview**: Your HTML output updates as you type.
-   **Professional PDF Templates**: Create documents for business, academic, or personal use.
-   **AI-Powered Custom Styling**: Get help creating the perfect look for your PDF.

### Example: A Simple Code Block

Here's how to write a code block in Markdown, perfect for technical documentation.

\`\`\`python
# A simple Python function to convert Markdown
def convert_markdown_to_pdf(markdown_text):
    # This is a dummy function
    print("Converting your Markdown to a professional PDF...")
    return "document.pdf"
\`\`\`

> Blockquote: This is an excellent tool for anyone wondering how to export a markdown file as a styled PDF. Start typing to see the magic happen!
`;

const Editor = () => {
    const { toast } = useToast();
    const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);
    const [selectedTemplate, setSelectedTemplate] = useState<PdfTemplate>(templates[0]);
    const [customStyles, setCustomStyles] = useState<string>('');
    const [orientation, setOrientation] = useState<'p' | 'l'>('p');
    const [isGenerating, setIsGenerating] = useState(false);
    const [isStylePanelOpen, setIsStylePanelOpen] = useState(false);
    const [stats, setStats] = useLocalStorage('template-stats', {});
    const [isAdModalOpen, setIsAdModalOpen] = useState(false);

    const previewRef = useRef<HTMLDivElement>(null);

    const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(e.target.value);
    };

    const handleTemplateChange = (templateId: string) => {
        const template = templates.find(t => t.id === templateId) || templates[0];
        setSelectedTemplate(template);
    };

    const startPdfGeneration = () => {
        setIsAdModalOpen(true);
    };

    const generatePdf = async () => {
        if (!previewRef.current) return;
        setIsGenerating(true);
        try {
            const canvas = await html2canvas(previewRef.current, {
                scale: 2,
                useCORS: true,
                logging: false,
            });

            const pdf = new jsPDF(orientation, 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            const imgData = canvas.toDataURL('image/png');
            const imgProps = pdf.getImageProperties(imgData);
            const imgWidth = pdfWidth;
            const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
            heightLeft -= pdfHeight;

            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
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

                        <div className="flex bg-card rounded-md border">
                            <Button
                                variant={orientation === 'p' ? 'secondary' : 'ghost'}
                                size="sm"
                                className="px-3"
                                onClick={() => setOrientation('p')}
                                title="Portrait"
                            >
                                <span className="sr-only">Portrait</span>
                                <div className="h-4 w-3 border-2 border-current rounded-sm" />
                            </Button>
                            <Button
                                variant={orientation === 'l' ? 'secondary' : 'ghost'}
                                size="sm"
                                className="px-3"
                                onClick={() => setOrientation('l')}
                                title="Landscape"
                            >
                                <span className="sr-only">Landscape</span>
                                <div className="h-3 w-4 border-2 border-current rounded-sm" />
                            </Button>
                        </div>

                        <Button variant="outline" size="icon" onClick={() => setIsStylePanelOpen(true)}>
                            <Settings className="h-4 w-4" />
                            <span className="sr-only">Customize Styles</span>
                        </Button>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button onClick={startPdfGeneration} disabled={isGenerating} className="min-w-[150px]">
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
                                    <FileDown className="mr-2 h-4 w-4" />
                                    Download .md
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => {
                                    navigator.clipboard.writeText(html);
                                    toast({
                                        title: "HTML Copied",
                                        description: "Raw HTML code copied to clipboard"
                                    });
                                }}>
                                    <Code className="mr-2 h-4 w-4" />
                                    Copy HTML
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
                <VideoAdModal
                    isOpen={isAdModalOpen}
                    onClose={() => setIsAdModalOpen(false)}
                    onAdFinished={generatePdf}
                />
            </section>
        </>
    );
};

export default Editor;
