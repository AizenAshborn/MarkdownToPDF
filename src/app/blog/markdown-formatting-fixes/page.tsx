import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import Link from 'next/link';

export const metadata = {
    title: 'Common Markdown Formatting Issues and Fixes | MarkdownPDFConverter',
    description: 'Struggling with broken tables or weird spacing in your Markdown? This guide covers the most common formatting bugs and how to solve them.',
};

export default function MarkdownFixesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
                <article className="max-w-4xl mx-auto prose prose-slate dark:prose-invert lg:prose-xl">
                    <h1>Common Markdown Formatting Issues and Fixes</h1>
                    <p className="lead">
                        Markdown is simple, but small syntax errors can lead to big headaches during PDF conversion. Here are the most common issues and how to fix them.
                    </p>

                    <img
                        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
                        alt="Debugging code and text"
                        className="rounded-2xl border border-border shadow-lg my-12"
                    />

                    <h2>1. Tables Breaking or Not Rendering</h2>
                    <p>
                        Tables are often the hardest part of Markdown. If your table isn&apos;t rendering, check for these two issues:
                    </p>
                    <ul>
                        <li><strong>Missing Pipe Symbols:</strong> Ensure every row starts and ends with a <code>|</code>.</li>
                        <li><strong>Missing Dash Line:</strong> The header row must be followed by a separator row (e.g., <code>|---|---|</code>).</li>
                    </ul>
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
                        <strong>Bad Example:</strong><br />
                        <code>| Header 1 | Header 2 |</code><br />
                        <code>| Content 1 | Content 2 |</code>
                    </div>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <strong>Good Example:</strong><br />
                        <code>| Header 1 | Header 2 |</code><br />
                        <code>| --- | --- |</code><br />
                        <code>| Content 1 | Content 2 |</code>
                    </div>

                    <h2>2. Line Breaks Not Working</h2>
                    <p>
                        New writers are often surprised to find that a single Enter key press doesn&apos;t create a new paragraph in Markdown.
                    </p>
                    <p>
                        <strong>The Fix:</strong> Press Enter <strong>twice</strong> to create a paragraph break, or add two spaces to the end of a line for a simple line break.
                    </p>

                    <h2>3. Images Not Loading</h2>
                    <p>
                        If your images appear as broken links in your PDF, it&apos;s usually because the path is incorrect.
                    </p>
                    <ul>
                        <li><strong>Online Images:</strong> Ensure you use the full <code>https://</code> URL.</li>
                        <li><strong>Alt Text:</strong> Always include alt text (e.g., <code>![Description](url)</code>) for accessibility and better SEO.</li>
                    </ul>

                    <h2>4. Nested List Confusion</h2>
                    <p>
                        Lists often break when the indentation isn&apos;t consistent.
                    </p>
                    <p>
                        <strong>The Fix:</strong> Use <strong>four spaces</strong> or <strong>one tab</strong> for each level of nesting. Avoid mixing spaces and tabs, as this can confuse different Markdown engines.
                    </p>

                    <h2>Conclusion</h2>
                    <p>
                        Most Markdown issues come down to small syntax details. By following these fixes, you can ensure your document converts perfectly every time.
                    </p>
                    <p>
                        Got your syntax fixed? <Link href="/" className="text-primary font-bold">Try converting your Markdown to PDF now</Link> to see the results.
                    </p>
                </article>
            </main>
            <AppFooter />
        </div>
    );
}
