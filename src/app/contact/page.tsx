import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Contact Us | MarkdownPDFConverter',
    description: 'Get in touch with the MarkdownPDFConverter team. We\'d love to hear from you!',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <Badge variant="secondary" className="mb-4">Contact</Badge>
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MessageSquare className="h-5 w-5" />
                                    Send Us a Message
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="your@email.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="How can we help?" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us more about your question or feedback..."
                                            rows={5}
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                                <p className="text-sm text-muted-foreground mt-4 text-center">
                                    We typically respond within 24-48 hours.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Other Contact Methods */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Mail className="h-5 w-5" />
                                        Email Us Directly
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        Prefer email? Reach out to us directly:
                                    </p>
                                    <div className="space-y-2">
                                        <p>
                                            <strong>General Inquiries:</strong><br />
                                            <a href="mailto:hello@markdownpdfconverter.com" className="text-primary hover:underline">
                                                hello@markdownpdfconverter.com
                                            </a>
                                        </p>
                                        <p>
                                            <strong>Support:</strong><br />
                                            <a href="mailto:support@markdownpdfconverter.com" className="text-primary hover:underline">
                                                support@markdownpdfconverter.com
                                            </a>
                                        </p>
                                        <p>
                                            <strong>Advertising:</strong><br />
                                            <a href="mailto:ads@markdownpdfconverter.com" className="text-primary hover:underline">
                                                ads@markdownpdfconverter.com
                                            </a>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Connect With Us</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        Follow us for updates, tips, and more:
                                    </p>
                                    <div className="flex gap-4">
                                        <Link
                                            href="https://github.com/AizenAshborn/MarkdownToPDF"
                                            target="_blank"
                                            className="flex items-center gap-2 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                                        >
                                            <Github className="h-5 w-5" />
                                            <span>GitHub</span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-2 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                                        >
                                            <Twitter className="h-5 w-5" />
                                            <span>Twitter</span>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-primary/5 border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold mb-2">🐛 Found a Bug?</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Help us improve! Report issues directly on our{' '}
                                        <a
                                            href="https://github.com/AizenAshborn/MarkdownToPDF/issues"
                                            target="_blank"
                                            className="text-primary hover:underline"
                                        >
                                            GitHub Issues page
                                        </a>.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}
