
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { placeholderAds } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, X, Minus } from 'lucide-react';
import { JsonLd } from '@/components/json-ld';

export const metadata = {
    title: 'Documentation & Feature Support | MarkdownPDFConverter.com',
    description: 'Technical documentation for MarkdownPDFConverter.com. Supported Markdown syntax, PDF generation engine details, and feature comparison versus other tools.',
};

export default function DocsPage() {
    const footerAd = placeholderAds[6];

    // Specific Structured Data for technical documentation
    const techArticleSchema = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Markdown Syntax Support Matrix',
        description: 'A comprehensive comparison of Markdown syntax supported by MarkdownPDFConverter.com compared to CommonMark and GFM.',
        proficiencyLevel: 'Beginner',
        author: {
            '@type': 'Organization',
            name: 'MarkdownPDFConverter.com'
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={techArticleSchema} />
            <AppHeader />

            <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <Badge variant="secondary" className="mb-4">Documentation</Badge>
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Feature Support & Syntax
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Technical details about how MarkdownPDFConverter.com processes your documents.
                        </p>
                    </div>

                    <section className="mb-16 prose prose-lg dark:prose-invert max-w-none">
                        <h2>About the Engine</h2>
                        <p>
                            <strong>MarkdownPDFConverter.com</strong> utilizes a hybrid rendering engine. We parse Markdown using a customized flavor compliant with <em>GitHub Flavored Markdown (GFM)</em>, ensuring compatibility with your existing codebases and documentation.
                        </p>
                        <p>
                            Unlike basic converters that simply screenshot the page, our <strong>Intelligent Styling Engine</strong> reconstructs the document structure (DOM) before generating the PDF. We utilize a combination of <em>html2canvas</em> and <em>jsPDF</em> with high-resolution scaling (2x retina) to ensure:
                        </p>
                        <ul>
                            <li>Selectable text in the final PDF</li>
                            <li>Crisp vector fonts at any zoom level</li>
                            <li>Clickable hyperlinks</li>
                            <li>Proper page break handling</li>
                        </ul>
                    </section>

                    <section className="mb-16">
                        <h2 className="font-headline text-3xl font-bold mb-6">Syntax Support Matrix</h2>
                        <div className="rounded-xl border bg-card text-card-foreground shadow">
                            <Table>
                                <TableCaption>Comparison of supported features across major standards.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[200px]">Feature</TableHead>
                                        <TableHead className="text-center">CommonMark</TableHead>
                                        <TableHead className="text-center">GitHub Flavored (GFM)</TableHead>
                                        <TableHead className="text-center font-bold text-primary">MarkdownPDFConverter</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">Headers (H1-H6)</TableCell>
                                        <TableCell className="text-center"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                                        <TableCell className="text-center"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                                        <TableCell className="text-center bg-primary/5"><Check className="inline h-5 w-5 text-primary" /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Tables</TableCell>
                                        <TableCell className="text-center"><X className="inline h-5 w-5 text-muted-foreground" /></TableCell>
                                        <TableCell className="text-center"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                                        <TableCell className="text-center bg-primary/5"><Check className="inline h-5 w-5 text-primary" /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Task Lists ( [ ] )</TableCell>
                                        <TableCell className="text-center"><X className="inline h-5 w-5 text-muted-foreground" /></TableCell>
                                        <TableCell className="text-center"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                                        <TableCell className="text-center bg-primary/5"><Check className="inline h-5 w-5 text-primary" /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Strikethrough</TableCell>
                                        <TableCell className="text-center"><X className="inline h-5 w-5 text-muted-foreground" /></TableCell>
                                        <TableCell className="text-center"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                                        <TableCell className="text-center bg-primary/5"><Check className="inline h-5 w-5 text-primary" /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">AI Auto-Styling</TableCell>
                                        <TableCell className="text-center"><Minus className="inline h-5 w-5 text-muted-foreground" /></TableCell>
                                        <TableCell className="text-center"><Minus className="inline h-5 w-5 text-muted-foreground" /></TableCell>
                                        <TableCell className="text-center bg-primary/5"><Check className="inline h-5 w-5 text-primary" /> (Yes!)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Syntax Highlighting</TableCell>
                                        <TableCell className="text-center"><Minus className="inline h-5 w-5 text-muted-foreground" /></TableCell>
                                        <TableCell className="text-center"><Check className="inline h-5 w-5 text-green-500" /></TableCell>
                                        <TableCell className="text-center bg-primary/5"><Check className="inline h-5 w-5 text-primary" /></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </section>

                    <section className="prose prose-lg dark:prose-invert max-w-none">
                        <h2>Why Use MarkdownPDFConverter?</h2>
                        <p>
                            While tools like Pandoc are powerful, they require command-line knowledge. <strong>MarkdownPDFConverter.com</strong> bridges the gap, offering the syntax support of GFM but with the ease of use of a WYSIWYG editor. It is designed specifically for:
                        </p>
                        <ul>
                            <li><strong>Developers</strong>: Who want to write resumes or documentation in code.</li>
                            <li><strong>Students</strong>: Who need to submit assignments in PDF format but prefer typing in Markdown.</li>
                            <li><strong>Writers</strong>: Who need a distraction-free environment that exports to a professional format.</li>
                        </ul>
                    </section>
                </div>
            </main>

            <AppFooter ad={footerAd} />
        </div>
    );
}
