import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { Badge } from '@/components/ui/badge';

export const metadata = {
    title: 'Terms of Service | MarkdownPDFConverter',
    description: 'Terms of Service for MarkdownPDFConverter.com - Read our terms and conditions of use.',
};

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-8 text-center">
                        <Badge variant="secondary" className="mb-4">Legal</Badge>
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-muted-foreground">
                            Last updated: December 22, 2025
                        </p>
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                        <section>
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using MarkdownPDFConverter.com ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
                            </p>
                        </section>

                        <section>
                            <h2>2. Description of Service</h2>
                            <p>
                                MarkdownPDFConverter.com provides a free online tool for converting Markdown documents to PDF format and PDF documents to Markdown format. The Service includes:
                            </p>
                            <ul>
                                <li>Real-time Markdown to PDF conversion</li>
                                <li>AI-powered PDF to Markdown extraction</li>
                                <li>Multiple styling templates</li>
                                <li>Live preview functionality</li>
                            </ul>
                        </section>

                        <section>
                            <h2>3. User Responsibilities</h2>
                            <p>When using our Service, you agree to:</p>
                            <ul>
                                <li>Use the Service only for lawful purposes</li>
                                <li>Not upload content that infringes on intellectual property rights</li>
                                <li>Not attempt to disrupt or interfere with the Service</li>
                                <li>Not use automated tools to scrape or access the Service</li>
                                <li>Not use the Service to distribute malware or harmful content</li>
                            </ul>
                        </section>

                        <section>
                            <h2>4. Intellectual Property</h2>
                            <p>
                                <strong>Your Content:</strong> You retain all rights to the content you create using our Service. Your Markdown documents and generated PDFs belong to you.
                            </p>
                            <p>
                                <strong>Our Content:</strong> The Service, including its design, features, and underlying code, is protected by copyright and other intellectual property laws. You may not copy, modify, or distribute our Service without permission.
                            </p>
                        </section>

                        <section>
                            <h2>5. Privacy</h2>
                            <p>
                                Your use of the Service is also governed by our <a href="/privacy">Privacy Policy</a>. All document conversion happens in your browser—we do not store or access your document content.
                            </p>
                        </section>

                        <section>
                            <h2>6. Disclaimer of Warranties</h2>
                            <p>
                                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. We do not guarantee that:
                            </p>
                            <ul>
                                <li>The Service will be uninterrupted or error-free</li>
                                <li>The results of using the Service will be accurate</li>
                                <li>Any defects will be corrected</li>
                            </ul>
                        </section>

                        <section>
                            <h2>7. Limitation of Liability</h2>
                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
                            </p>
                            <p>
                                This includes, but is not limited to, damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.
                            </p>
                        </section>

                        <section>
                            <h2>8. Third-Party Services</h2>
                            <p>
                                Our Service may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of third-party services.
                            </p>
                        </section>

                        <section>
                            <h2>9. Advertising</h2>
                            <p>
                                The Service is supported by advertisements provided by third parties, including Google AdSense. These advertisements may use cookies to personalize content. You can manage your ad preferences through the consent banner on our site.
                            </p>
                        </section>

                        <section>
                            <h2>10. Modifications to Service</h2>
                            <p>
                                We reserve the right to modify, suspend, or discontinue the Service at any time, with or without notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Service.
                            </p>
                        </section>

                        <section>
                            <h2>11. Changes to Terms</h2>
                            <p>
                                We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the new Terms. We encourage you to review these Terms periodically.
                            </p>
                        </section>

                        <section>
                            <h2>12. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
                            </p>
                        </section>

                        <section>
                            <h2>13. Contact Information</h2>
                            <p>
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <p>
                                <strong>Email:</strong> legal@markdownpdfconverter.com
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}
