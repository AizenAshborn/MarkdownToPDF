import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Scale, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service | MarkdownPDFConverter',
    description: 'Terms of Service for MarkdownPDFConverter.com. Please read these terms carefully before using our services.',
};

export default function TermsPage() {
    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <Badge variant="secondary" className="mb-4">Terms</Badge>
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Last updated: {today}
                        </p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <section>
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using MarkdownPDFConverter.com (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
                            </p>
                        </section>

                        <section>
                            <h2>2. Description of Service</h2>
                            <p>
                                MarkdownPDFConverter provides a browser-based tool for converting Markdown text and files into PDF documents. We also provide AI-powered styling and PDF-to-Markdown extraction services.
                            </p>
                        </section>

                        <section>
                            <h2>3. User Responsibilities</h2>
                            <p>You agree to use the Service only for lawful purposes. You are responsible for any content you process through the Service. You represent that you have the right to process such content.</p>
                            <ul>
                                <li>No illegal or offensive content.</li>
                                <li>No infringement of intellectual property rights.</li>
                                <li>No use of the Service for automated bulk processing without authorization.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>4. Intellectual Property</h2>
                            <p>
                                The Service and its original content, features, and functionality are owned by MarkdownPDFConverter and are protected by international copyright, trademark, and other intellectual property laws.
                            </p>
                            <p>
                                <strong>Your Content:</strong> We do not claim ownership of the content you process. Since conversion happens in your browser, your content remains your property and is never stored on our servers.
                            </p>
                        </section>

                        <section>
                            <h2>5. Privacy</h2>
                            <p>
                                Your use of our services is also governed by our <Link href="/privacy-policy">Privacy Policy</Link>. Please review it to understand our practices. All document conversion happens in your browser—we do not store or access your document content.
                            </p>
                        </section>

                        <section>
                            <h2>6. Disclaimer of Warranties</h2>
                            <p>
                                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                            </p>
                        </section>

                        <section>
                            <h2>7. Limitation of Liability</h2>
                            <p>
                                IN NO EVENT SHALL MARKDOWNPDFCONVERTER BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
                            </p>
                        </section>

                        <section>
                            <h2>8. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new terms on this page. Your continued use of the Service after such changes constitutes acceptance of the new terms.
                            </p>
                        </section>

                        <section>
                            <h2>9. Contact Information</h2>
                            <p>
                                If you have any questions about these Terms, please contact us at <a href="mailto:legal@markdownpdfconverter.com">legal@markdownpdfconverter.com</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}
