import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import Link from 'next/link';

export const metadata = {
    title: 'Common Markdown Formatting Issues and Fixes | MarkdownPDFConverter',
    description: 'A comprehensive troubleshooting guide for common Markdown rendering problems, from nested lists to table alignment.',
};

export default function MarkdownFixesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
                <article className="max-w-4xl mx-auto prose prose-slate dark:prose-invert prose-headings:font-headline prose-a:text-primary">
                    <h1>Common Markdown Formatting Issues and Fixes</h1>

                    <p>
                        Markdown is designed to be simple, but as your documents become more complex, you may encounter rendering issues. Whether it's a list that won't nest or a table that looks broken, understanding the underlying syntax rules is key to fixing these problems.
                    </p>

                    <p>
                        In this guide, we'll walk through the most common Markdown formatting issues and provide clear solutions to ensure your documents look perfect when converted to PDF.
                    </p>

                    <hr />

                    <h2>1. Nested Lists Not Indenting</h2>
                    <p>
                        One of the most frequent issues is sub-items not appearing indented. This usually happens because of insufficient spacing.
                    </p>
                    <p><strong>The Issue:</strong></p>
                    <pre><code>* Item 1
                        * Item 2
                        * Sub-item (This won't indent if there are only 2 spaces)</code></pre>
                    <p><strong>The Fix:</strong></p>
                    <p>
                        Most Markdown renderers (including GFM) require <strong>4 spaces</strong> or <strong>1 tab</strong> of indentation for sub-items.
                    </p>
                    <pre><code>* Item 1
                        * Item 2
                        * Correct Sub-item</code></pre>

                    <hr />

                    <h2>2. Tables Breaking or Misaligning</h2>
                    <p>
                        Markdown tables require a header row, a separator row, and consistent pipe usage.
                    </p>
                    <p><strong>Common Mistakes:</strong></p>
                    <ul>
                        <li>Forgetting the separator row (<code>|---|---|</code>).</li>
                        <li>Missing pipes at the beginning or end of rows.</li>
                        <li>Empty lines inside the table structure.</li>
                    </ul>
                    <p><strong>The Correct Structure:</strong></p>
                    <pre><code>| Header 1 | Header 2 |
                        |----------|----------|
                        | Row 1    | Data 1   |
                        | Row 2    | Data 2   |</code></pre>

                    <hr />

                    <h2>3. Code Blocks Not Highlighted</h2>
                    <p>
                        If your code blocks look like plain text, you likely missed the language identifier.
                    </p>
                    <p><strong>The Fix:</strong></p>
                    <p>
                        Always specify the language after the opening triple backticks (fenced code blocks).
                    </p>
                    <pre><code>```javascript
                        function hello() {'{'}
                        console.log("Hello World");
                        {'}'}
                        ```</code></pre>

                    <hr />

                    <h2>4. Escaping Special Characters</h2>
                    <p>
                        Sometime you want to display a character that Markdown uses for formatting, like <code>*</code> or <code>#</code>.
                    </p>
                    <p><strong>The Fix:</strong></p>
                    <p>
                        Use a backslash (<code>\</code>) before the character to "escape" it.
                    </p>
                    <p><code>\*This is not italic\*</code> renders as: *This is not italic*</p>

                    <hr />

                    <h2>5. Automatic Link Generation Issues</h2>
                    <p>
                        Some renderers automatically turn URLs into links, but others don't.
                    </p>
                    <p><strong>The Fix:</strong></p>
                    <p>
                        For maximum compatibility, always use the standard link syntax: <code>[Link Text](https://example.com)</code>.
                    </p>

                    <hr />

                    <h2>6. Spacing Between Blocks</h2>
                    <p>
                        Markdown is sensitive to "vertical whitespace." If a heading or a list is touching the paragraph above it, it might not render correctly.
                    </p>
                    <p><strong>The Rule:</strong></p>
                    <p>
                        Always leave <strong>one empty line</strong> between different types of content (e.g., between a paragraph and a list, or a list and a heading).
                    </p>

                    <hr />

                    <h2>Conclusion</h2>
                    <p>
                        Most Markdown issues come down to spacing and strict adherence to specific syntax rules. By following the "one empty line" rule and being careful with indentation, you can solve 90% of formatting problems.
                    </p>
                    <p>
                        Ready to see your fixed document in print? Try our <Link href="/">Markdown to PDF Converter</Link> and preview your changes live.
                    </p>
                </article>
            </main>
            <AppFooter />
        </div>
    );
}
