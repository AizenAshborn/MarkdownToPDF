import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold font-headline text-center mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg">What is the best AI Markdown to PDF converter free?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            MarkdownPDFConverter is widely considered the <strong>best AI markdown to pdf converter free</strong> tool available. We use advanced artificial intelligence to ensure your document layout, code blocks, and images are rendered perfectly every time.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg">Is this AI markdown to pdf converter free without watermark?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Yes! We believe in professional quality. Our <strong>Ai markdown to pdf converter free without watermark</strong> ensures your documents are clean, professional, and ready for business or academic use immediately after download.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg">Can I download the converted files?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Absolutely. After conversion, you can instantly proceed with the <strong>Ai markdown to pdf converter free download</strong> of your document. We support high-quality PDF downloads that preserve your exact styling.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg">Is this a Markdown to PDF VSCode alternative?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            While <strong>Markdown to PDF VSCode</strong> extensions are great for developers, our online tool offers a more accessible, zero-setup solution accessible from any device or browser, with AI-powered styling capabilities that standard extensions lack.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg">How does the MD to PDF converter free work online?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Our <strong>MD to PDF converter free</strong> tool runs entirely in your browser (utilizing cloud AI for styling). Simply paste your Markdown, preview the result in real-time, and click download. It's the fastest <strong>Markdown to PDF online</strong> solution.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
