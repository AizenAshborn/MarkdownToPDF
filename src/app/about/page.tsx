import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Zap, Shield, Heart } from 'lucide-react';

export const metadata = {
    title: 'About Us | MarkdownPDFConverter',
    description: 'Learn about MarkdownPDFConverter.com - Our mission to make document conversion simple, fast, and free for everyone.',
};

export default function AboutPage() {
    const features = [
        {
            icon: FileText,
            title: 'Document Freedom',
            description: 'Convert between Markdown and PDF formats without restrictions or watermarks.',
        },
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'All processing happens in your browser for instant results with no upload wait times.',
        },
        {
            icon: Shield,
            title: 'Privacy First',
            description: 'Your documents never leave your device. We can\'t see, store, or access your content.',
        },
        {
            icon: Heart,
            title: 'Free Forever',
            description: 'Core features will always be free. We believe everyone deserves great tools.',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <Badge variant="secondary" className="mb-4">About</Badge>
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            About MarkdownPDFConverter
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We&apos;re on a mission to make document conversion simple, fast, and accessible to everyone.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <section className="mb-16">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2>Our Story</h2>
                            <p>
                                MarkdownPDFConverter was born out of frustration. As developers and writers, we found ourselves constantly switching between Markdown (our preferred writing format) and PDF (what clients and professors wanted). Existing tools were either too complex, required downloads, or added ugly watermarks.
                            </p>
                            <p>
                                We built the tool we wished existed: a fast, free, and privacy-respecting converter that runs entirely in your browser. No sign-ups. No file uploads. No waiting. Just paste your Markdown and get a beautiful PDF.
                            </p>

                            <h2>What Makes Us Different</h2>
                            <p>
                                Unlike other converters that process files on their servers (meaning they can see everything you write), MarkdownPDFConverter works entirely in your browser. Your documents never leave your device. This isn&apos;t just a feature—it&apos;s a fundamental design choice that respects your privacy.
                            </p>
                            <p>
                                We&apos;ve also invested heavily in our <strong>Intelligent Styling Engine</strong>. This AI-powered feature lets you describe how you want your PDF to look (&quot;make it look like a legal document&quot; or &quot;use a modern tech resume style&quot;), and we&apos;ll generate the formatting for you. No CSS knowledge required.
                            </p>
                        </div>
                    </section>

                    {/* Features Grid */}
                    <section className="mb-16">
                        <h2 className="font-headline text-3xl font-bold text-center mb-8">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature) => (
                                <Card key={feature.title} className="border-2 hover:border-primary/50 transition-colors">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-primary/10 rounded-lg">
                                                <feature.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                                                <p className="text-muted-foreground">{feature.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Technology Section */}
                    <section className="mb-16">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2>Built With Modern Technology</h2>
                            <p>
                                MarkdownPDFConverter is built using cutting-edge web technologies:
                            </p>
                            <ul>
                                <li><strong>Next.js 15</strong> for a fast, modern web experience</li>
                                <li><strong>Client-side rendering</strong> for complete privacy</li>
                                <li><strong>GitHub Flavored Markdown</strong> for broad compatibility</li>
                                <li><strong>AI-powered styling</strong> using Google&apos;s Gemini</li>
                            </ul>
                            <p>
                                Our source code is open and available on <a href="https://github.com/AizenAshborn/MarkdownToPDF" target="_blank" rel="noopener noreferrer">GitHub</a>. We believe in transparency and welcome contributions from the community.
                            </p>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="text-center py-8 px-6 bg-primary/5 rounded-2xl">
                        <h2 className="font-headline text-2xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-muted-foreground mb-6">
                            Try our converter now—no sign-up required.
                        </p>
                        <a
                            href="/"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                        >
                            Start Converting
                        </a>
                    </section>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}
