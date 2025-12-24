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
                        <AccordionTrigger className="text-lg">Is this Markdown to PDF converter free to use?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Yes. You can convert Markdown files to PDF without creating an account or paying any fees. Our core conversion tool is completely free for all users.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg">Is my data secure?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Absolutely. Files are processed entirely in your browser for conversion and are not stored permanently on our servers. Your privacy and data security are our top priorities.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg">Does this support code blocks and tables?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Yes. MarkdownPDFConverter provides full support for common Markdown elements, including fenced code blocks, GitHub-flavored tables, nested lists, and mathematical formulas.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg">Do I need to install any software?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            No. Everything runs directly in your web browser. You don't need to install any apps, plugins, or extensions to use our Markdown to PDF conversion tool.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
