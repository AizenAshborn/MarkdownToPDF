const Hero = () => {
    return (
        <section className="text-center py-16 md:py-20">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-amber-600 text-transparent bg-clip-text">
                    Markdown to PDF
                </span>
                , Elevated.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your Markdown into beautifully designed, professional PDFs. Real-time preview, powerful templates, and intelligent styling at your fingertips.
            </p>
        </section>
    );
}

export default Hero;
