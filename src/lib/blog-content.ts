
export type BlogPost = {
    id: string;
    title: string;
    description: string;
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    imageUrl: string;
    imageHint: string;
    content: string; // Markdown content
};

export const blogPosts: BlogPost[] = [
    {
        id: 'mastering-markdown',
        title: "Mastering Markdown: A Beginner's Guide to Professional Documents",
        description: 'Learn the fundamentals of Markdown and how to create beautifully formatted documents for any purpose.',
        author: 'Jane Doe',
        date: 'October 26, 2023',
        readTime: '7 min read',
        tags: ['Markdown', 'Productivity', 'Writing'],
        imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80',
        imageHint: 'desk writing',
        content: `
# Mastering Markdown: A Beginner's Guide

Markdown is a lightweight markup language that has taken the world by storm. From developers writing READMEs to writers drafting novels, Markdown offers a distraction-free way to format text without lifting your fingers from the keyboard.

## What is Markdown?

Created by John Gruber in 2004, Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

### Why Use It?

1.  **Speed**: Formatting while typing allows you to maintain your flow.
2.  **Portability**: It's just text. You can open it in any editor.
3.  **Flexibility**: Converts easily to HTML, PDF, eBooks, and more.

## Basic Syntax

Here are the essentials to get you started:

-   **Bold**: \`**text**\` or \`__text__\`
-   *Italic*: \`*text*\` or \`_text_\`
-   [Links](https://markdownpdfconverter.com): \`[Link Text](URL)\`
-   Images: \`![Alt Text](URL)\`

### Lists

Ordered lists are easy:
1.  First item
2.  Second item

Unordered lists use hyphens, asterisks, or plus signs:
-   Item A
-   Item B

## Conclusion

Markdown is powerful because it is simple. By stripping away the complex menus of traditional word processors, it lets you focus on what matters most: your words.
    `,
    },
    {
        id: 'pdf-templates',
        title: 'Why Professional PDF Templates Matter for Your Business',
        description: 'Discover how using high-quality templates can elevate your brand and make your documents stand out.',
        author: 'John Smith',
        date: 'October 24, 2023',
        readTime: '5 min read',
        tags: ['Business', 'Design', 'Templates'],
        imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80',
        imageHint: 'design templates',
        content: `
# The Power of Professional PDF Templates

In the business world, perception is reality. The way you present your documents—invoices, proposals, reports—says as much about your company as the content within them.

## Consistency is Key

Using a consistent set of PDF templates ensures that every touchpoint a client has with your brand reinforces your identity. Colors, fonts, and logos should be uniform across all documents.

## Readability and Structure

Professional templates are designed with typography hierarchy in mind. This means:
-   Clear headings
-   Appropriate line spacing
-   Readable font sizes

This ensures your clients actually *read* what you send them, rather than getting overwhelmed by a wall of text.

## How MarkdownToPDF Helps

Our tool isn't just a converter; it's a styling engine. With our **Intelligent Styling** features, you can transform a simple text document into a branded, professional PDF in seconds. You don't need a designer; you just need your content.
    `,
    },
    {
        id: 'seo-with-markdown',
        title: 'Boost Your SEO: Leveraging Markdown for Content Marketing',
        description: 'A deep dive into how writing in Markdown can streamline your content workflow and improve search engine rankings.',
        author: 'Emily White',
        date: 'October 20, 2023',
        readTime: '9 min read',
        tags: ['SEO', 'Marketing', 'Markdown'],
        imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80',
        imageHint: 'analytics chart',
        content: `
# Markdown and SEO: A Perfect Match

Content marketing is the backbone of modern SEO. But the workflow of writing in Google Docs, then copying to a CMS, then fixing formatting issues is slow and error-prone. Enter Markdown.

## Clean HTML Output

Search engines love clean code. Markdown converters typically produce semantic, clutter-free HTML. 
-   \`# Heading 1\` becomes \`<h1>\`
-   \`## Heading 2\` becomes \`<h2>\`

This semantic structure helps Google understand the hierarchy and importance of your content.

## Faster Workflow = More Content

Site speed is a ranking factor, but *publishing speed* is a business factor. Writing in Markdown is significantly faster than using a WYSIWYG editor. This efficiency allows your team to produce more high-quality content in less time.

## Portable Content

If you ever need to migrate your site (e.g., from WordPress to a static site generator like Next.js), having your content in Markdown makes the transition seamless. You aren't locked into a specific database format.
    `,
    },
    {
        id: 'advanced-styling',
        title: 'Advanced PDF Styling with AI',
        description: 'Explore how MarkdownToPDF.ca uses AI to give you fine-grained control over the look and feel of your documents.',
        author: 'Chris Green',
        date: 'October 18, 2023',
        readTime: '6 min read',
        tags: ['AI', 'Styling', 'PDF'],
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
        imageHint: 'ai technology',
        content: `
# The Future of Document Styling is AI

We've all been there: fighting with CSS or dragging margin sliders in Word, trying to get a document to look *just right*. At MarkdownToPDF.ca, we believe there's a better way.

## Intent-Based Design

Instead of tweaking pixels, what if you could just say what you want?
> "Make it look like a legal contract, but with blue headers."
> "I need a friendly, modern layout for a school newsletter."

Our **Intelligent Styling** engine uses generative AI to understand these prompts and generate the complex CSS needed to achieve the look.

## How It Works

1.  **Analyze**: The AI reads your prompt and understands the mood, formality, and structural requirements.
2.  **Generate**: It produces a custom CSS stylesheet tailored to your specific request.
3.  **Apply**: We render your Markdown using these unique styles in real-time.

Try it out today in our editor settings panel!
    `,
    },
];

export function getPostById(id: string): BlogPost | undefined {
    return blogPosts.find((post) => post.id === id);
}

export function getAllTags(): string[] {
    const tags = new Set(blogPosts.flatMap(post => post.tags));
    return Array.from(tags);
}
