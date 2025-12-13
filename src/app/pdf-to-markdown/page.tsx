'use client';

import { useState } from 'react';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, ArrowRight, Loader2, Copy, Download } from 'lucide-react';
import { saveAs } from 'file-saver';
import { useToast } from '@/hooks/use-toast';
import { convertPdfToMarkdown } from '@/app/actions/convert-pdf';
import { Textarea } from '@/components/ui/textarea';
import { VideoAdModal } from '@/components/video-ad-modal';

export default function PdfToMarkdownPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isConverting, setIsConverting] = useState(false);
    const [result, setResult] = useState<string>('');
    const [isAdOpen, setIsAdOpen] = useState(false);
    const { toast } = useToast();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selected = e.target.files[0];
            if (selected.type !== 'application/pdf') {
                toast({ title: 'Invalid File', description: 'Please upload a PDF file.', variant: 'destructive' });
                return;
            }
            setFile(selected);
        }
    };

    const initiateConversion = () => {
        if (!file) return;
        setIsAdOpen(true);
    };

    const performConversion = async () => {
        if (!file) return;
        setIsConverting(true);
        setResult('');
        setIsAdOpen(false); // Close ad if not already closed

        try {
            // Convert file to base64
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async () => {
                try {
                    const base64 = reader.result?.toString().split(',')[1];
                    if (!base64) throw new Error('Failed to read file');

                    const md = await convertPdfToMarkdown(base64);
                    setResult(md);

                    toast({
                        title: "Conversion Complete!",
                        description: "Your PDF has been converted to Markdown with AI.",
                    });
                } catch (innerError: any) {
                    console.error("Conversion Error:", innerError);
                    setResult(`# Error\n\n${innerError.message || 'Unknown error occurred during conversion.'}`);
                    toast({ title: 'Conversion Failed', description: 'See error details below.', variant: 'destructive' });
                } finally {
                    setIsConverting(false);
                }
            };

            reader.onerror = () => {
                toast({ title: 'File Read Error', description: 'Failed to read the PDF file.', variant: 'destructive' });
                setIsConverting(false);
            };

        } catch (error) {
            console.error(error);
            toast({ title: 'Error', description: 'Failed to initiate conversion.', variant: 'destructive' });
            setIsConverting(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(result);
        toast({ title: "Copied!", description: "Markdown copied to clipboard." });
    };

    const handleDownload = () => {
        const blob = new Blob([result], { type: 'text/markdown;charset=utf-8' });
        saveAs(blob, 'converted.md');
        toast({ title: "Downloaded!", description: "File saved as converted.md" });
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <AppHeader />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight">PDF to Markdown Converter</h1>
                    <p className="text-xl text-muted-foreground">
                        Use AI to extract text, tables, and code from PDF documents back into clean Markdown.
                    </p>
                </div>

                <div className="grid gap-8">
                    <Card className="border-2 border-dashed border-primary/20 bg-muted/30">
                        <CardContent className="flex flex-col items-center justify-center py-12 space-y-6">
                            {/* Dropzone Area */}
                            <div className="relative group w-full max-w-md border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer bg-card">
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                                    <Upload className="h-8 w-8 text-primary" />
                                </div>

                                {file ? (
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-center space-x-2 text-primary font-medium">
                                            <FileText className="h-4 w-4" />
                                            <span className="truncate max-w-[200px]">{file.name}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground">Click to change file</p>
                                    </div>
                                ) : (
                                    <div className="space-y-1">
                                        <p className="font-medium">Click to upload or drag & drop</p>
                                        <p className="text-sm text-muted-foreground">PDF (MAX 4MB)</p>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <Button
                                size="lg"
                                onClick={initiateConversion}
                                disabled={!file || isConverting}
                                className="w-full max-w-xs z-20"
                            >
                                {isConverting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Converting...
                                    </>
                                ) : (
                                    <>
                                        Convert to Markdown <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>

                    {result && (
                        <Card className="animate-in fade-in slide-in-from-bottom-4">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>Converted Markdown</CardTitle>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" onClick={copyToClipboard}>
                                        <Copy className="mr-2 h-4 w-4" /> Copy
                                    </Button>
                                    <Button size="sm" onClick={handleDownload}>
                                        <Download className="mr-2 h-4 w-4" /> Download .md
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Textarea
                                    readOnly
                                    value={result}
                                    className="min-h-[400px] font-mono text-sm bg-muted"
                                />
                            </CardContent>
                        </Card>
                    )}
                </div>

                <VideoAdModal
                    isOpen={isAdOpen}
                    onClose={() => setIsAdOpen(false)}
                    onAdFinished={performConversion}
                    adSlotId="5044809000"
                />

                <article className="prose dark:prose-invert max-w-none mt-24 border-t pt-12">
                    <h2 className="text-3xl font-bold mb-6">Convert PDF to Markdown with AI</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Our <strong>AI-powered PDF to Markdown converter</strong> goes beyond simple text extraction.
                        By leveraging Google's Gemini 1.5 Pro technology, we intelligently analyze the layout, identifying headers,
                        lists, tables, and even code blocks to reconstruct your document into clean, valid Markdown.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">📄 Preserve Formatting</h3>
                            <p className="text-muted-foreground">Maintains document hierarchy, including H1-H6 headers, bold/italic text, and list structures.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3">🧩 Extract Tables</h3>
                            <p className="text-muted-foreground">Intelligently converts complex PDF data tables into standard Markdown table syntax automatically.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3">💻 Code Blocks</h3>
                            <p className="text-muted-foreground">Detects programming code within PDFs and wraps it in proper code blocks with language highlighting.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4">How to Convert PDF to Markdown?</h2>
                    <ol className="list-decimal pl-5 space-y-2 mb-8">
                        <li>Upload your PDF file (drag & drop or click to select).</li>
                        <li>Click the <strong>"Convert to Markdown"</strong> button.</li>
                        <li>Watch a brief message while our AI processes the document.</li>
                        <li>Copy the generated Markdown or download the <code>.md</code> file directly.</li>
                    </ol>

                    <p className="text-sm text-muted-foreground">
                        * Ideal for developers, writers, and students who need to migrate documentation from PDF to standard Markdown formats for GitHub Readmes, blogs, or documentation sites.
                    </p>
                </article>

            </main>
            <AppFooter />
        </div>
    );
}
