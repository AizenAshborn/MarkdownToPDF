'use client';

import { useState } from 'react';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, ArrowRight, Loader2, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { convertPdfToMarkdown } from '@/app/actions/convert-pdf';
import { Textarea } from '@/components/ui/textarea';

export default function PdfToMarkdownPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isConverting, setIsConverting] = useState(false);
    const [result, setResult] = useState<string>('');
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

    const handleConvert = async () => {
        if (!file) return;

        setIsConverting(true);
        setResult('');

        try {
            // Convert file to base64
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async () => {
                const base64 = reader.result?.toString().split(',')[1]; // Remove data URL prefix
                if (!base64) throw new Error('Failed to read file');

                const md = await convertPdfToMarkdown(base64);
                setResult(md);

                toast({
                    title: "Conversion Complete!",
                    description: "Your PDF has been converted to Markdown with AI.",
                });
            };
        } catch (error) {
            console.error(error);
            toast({ title: 'Error', description: 'Failed to convert PDF. It might be too large.', variant: 'destructive' });
        } finally {
            setIsConverting(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(result);
        toast({ title: "Copied!", description: "Markdown copied to clipboard." });
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
                        <CardContent className="flex flex-col items-center justify-center py-12 space-y-4">
                            <div className="p-4 rounded-full bg-primary/10">
                                <Upload className="h-8 w-8 text-primary" />
                            </div>

                            <div className="text-center">
                                {file ? (
                                    <div className="flex items-center justify-center space-x-2 text-primary font-medium">
                                        <FileText className="h-4 w-4" />
                                        <span>{file.name}</span>
                                    </div>
                                ) : (
                                    <>
                                        <p className="font-medium">Click to upload or drag and drop</p>
                                        <p className="text-sm text-muted-foreground">PDF (MAX 4MB)</p>
                                    </>
                                )}
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                            </div>

                            <Button
                                size="lg"
                                onClick={handleConvert}
                                disabled={!file || isConverting}
                                className="w-full max-w-xs"
                            >
                                {isConverting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Converting with AI...
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
                                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                                    <Copy className="mr-2 h-4 w-4" /> Copy
                                </Button>
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

            </main>
            <AppFooter />
        </div>
    );
}
