import { Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
    const reviews = [
        {
            name: "Sarah Jenkins",
            role: "Technical Writer",
            content: "Finally a tool that actually understands Markdown. The AI formatting is spot on, and I love that it runs entirely in the browser for privacy.",
            rating: 5,
            initials: "SJ"
        },
        {
            name: "Mike Thompson",
            role: "Senior Developer",
            content: "The PDF to Markdown feature saved me hours of re-typing legacy documentation. It even preserved the code blocks correctly!",
            rating: 5,
            initials: "MT"
        },
        {
            name: "Emily Rodriguez",
            role: "PhD Student",
            content: "I needed a clean PDF converter for my thesis without any watermarks. This tool is free, fast, and the output looks professional. Highly recommend.",
            rating: 5,
            initials: "ER"
        }
    ]

    return (
        <section className="py-12 bg-muted/20">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Trusted by 10,000+ Users</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                        See what developers, writers, and students are saying about MarkdownPDFConverter.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, i) => (
                        <Card key={i} className="bg-background border-none shadow-md">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar>
                                    <AvatarImage alt={review.name} />
                                    <AvatarFallback className="bg-primary/10 text-primary">{review.initials}</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="font-semibold">{review.name}</span>
                                    <span className="text-xs text-muted-foreground">{review.role}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex mb-2">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-sm text-foreground/80 leading-relaxed">"{review.content}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
