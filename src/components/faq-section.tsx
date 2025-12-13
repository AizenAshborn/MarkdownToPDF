
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqSection() {
    return (
        <section className="py-12 border-t" id="faq">
            <div className="text-center mb-8">
                <h2 className="font-headline text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">Everything you need to know about converting Markdown to PDF.</p>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is MarkdownToPDF.com completely free?</AccordionTrigger>
                    <AccordionContent>
                        Yes! Our converter is 100% free to use. There are no watermarks, no file limits, and no hidden fees. We support the project through unobtrusive ads.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Is my data private? Do you store my files?</AccordionTrigger>
                    <AccordionContent>
                        Absolutely. We process your files <strong>in your browser</strong>. Your Markdown text never leaves your computer, and we do not store any of your documents on our servers. It is strictly client-side processing for maximum privacy.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Does it support GitHub Flavored Markdown (GFM)?</AccordionTrigger>
                    <AccordionContent>
                        Yes, we support comprehensive GFM syntax including tables, task lists, strikethrough, and auto-linked URLs. We use a custom parser compliant with CommonMark standards.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>Can I add images to my PDF?</AccordionTrigger>
                    <AccordionContent>
                        Yes, you can include images using standard Markdown syntax <code>![Alt Text](URL)</code>. For the PDF generation to work, images must be hosted publicly (like on Imgur, Unsplash, or your own server) so our renderer can fetch them.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>How do I customize the PDF styling?</AccordionTrigger>
                    <AccordionContent>
                        We offer built-in templates (Academic, Business, Resume) and a powerful <strong>Intelligent Styling Engine</strong>. You can simply describe the look you want (e.g., "blue headers with a sidebar"), and our AI will generate the custom CSS for you.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}
