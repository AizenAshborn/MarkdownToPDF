
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { placeholderAds } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { JsonLd } from '@/components/json-ld';

export const metadata = {
    title: 'Ultimare Markdown Cheatsheet | Markdown to PDF Converter',
    description: 'A quick reference guide for Markdown syntax. Learn how to format text, lists, code, tables, and more. Copy and paste examples directly into your documents.',
};

export default function CheatsheetPage() {
    const footerAd = placeholderAds[6];

    const cheatsheetData = [
        {
            category: 'Basic Formatting',
            items: [
                { element: 'Heading 1', syntax: '# H1', output: <h1 className="text-2xl font-bold">H1</h1> },
                { element: 'Heading 2', syntax: '## H2', output: <h2 className="text-xl font-bold">H2</h2> },
                { element: 'Bold', syntax: '**Bold Text**', output: <strong>Bold Text</strong> },
                { element: 'Italic', syntax: '*Italic Text*', output: <em>Italic Text</em> },
                { element: 'Blockquote', syntax: '> Quote', output: <blockquote className="border-l-4 pl-2 italic">Quote</blockquote> },
            ]
        },
        {
            category: 'Lists',
            items: [
                { element: 'Ordered List', syntax: '1. First item\n2. Second item', output: <ol className="list-decimal list-inside"><li>First item</li><li>Second item</li></ol> },
                { element: 'Unordered List', syntax: '- Item A\n- Item B', output: <ul className="list-disc list-inside"><li>Item A</li><li>Item B</li></ul> },
                { element: 'Task List', syntax: '- [x] Done\n- [ ] Todo', output: <ul className="list-none"><li>☑ Done</li><li>☐ Todo</li></ul> },
            ]
        },
        {
            category: 'Links & Images',
            items: [
                { element: 'Link', syntax: '[Title](url)', output: <a href="#" className="text-primary underline">Title</a> },
                { element: 'Image', syntax: '![Alt Text](url)', output: <span className="italic text-muted-foreground">Image Displayed</span> },
            ]
        },
        {
            category: 'Code',
            items: [
                { element: 'Inline Code', syntax: '`code`', output: <code className="bg-muted px-1 rounded">code</code> },
                { element: 'Code Block', syntax: '```\nprint("Hello")\n```', output: <pre className="bg-muted p-2 rounded"><code>print("Hello")</code></pre> },
            ]
        }
    ];

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Ultimate Markdown Cheatsheet',
        description: 'A comprehensive reference guide for Markdown syntax.',
        author: {
            '@type': 'Organization',
            name: 'MarkdownPDFConverter.com'
        }
    };


    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={articleSchema} />
            <AppHeader />

            <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
                <div className="text-center mb-12">
                    <Badge variant="secondary" className="mb-4">Reference</Badge>
                    <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Markdown Cheatsheet
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        The only guide you need. Copy syntax from the left, see the result on the right.
                    </p>
                    <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/">Start Writing Now</Link>
                    </Button>
                </div>

                <div className="grid gap-12 max-w-4xl mx-auto">
                    {cheatsheetData.map((section) => (
                        <section key={section.category} className="space-y-4">
                            <h2 className="text-2xl font-bold font-headline border-b pb-2">{section.category}</h2>
                            <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[150px]">Element</TableHead>
                                            <TableHead className="w-[300px]">Markdown Syntax</TableHead>
                                            <TableHead>Rendered Output</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {section.items.map((item, i) => (
                                            <TableRow key={i}>
                                                <TableCell className="font-medium">{item.element}</TableCell>
                                                <TableCell>
                                                    <code className="bg-muted px-2 py-1 rounded text-sm font-mono whitespace-pre-wrap">
                                                        {item.syntax}
                                                    </code>
                                                </TableCell>
                                                <TableCell className="text-muted-foreground">
                                                    {item.output}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <AppFooter ad={footerAd} />
        </div>
    );
}
