const Hero = () => {
    return (
        <section className="text-center py-12 md:py-16">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-amber-600 text-transparent bg-clip-text">
                    Convert Markdown to PDF Online
                </span>
                <br />
                <span className="text-foreground">— Clean, Accurate, and Free</span>
            </h1>
            <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    MarkdownPDFConverter helps developers, writers, students, and technical teams convert Markdown files into professionally formatted PDF documents. Our browser-based tool preserves headings, code blocks, tables, lists, and links without requiring any software installation.
                </p>
                <p className="text-lg text-muted-foreground/80 italic">
                    Upload your Markdown file, preview the output, and download a high-quality PDF in seconds.
                </p>
            </div>
        </section>
    );
}

export default Hero;
