import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { Badge } from '@/components/ui/badge';

export const metadata = {
    title: 'Privacy Policy | MarkdownPDFConverter',
    description: 'Privacy Policy for MarkdownPDFConverter.com - Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-8 text-center">
                        <Badge variant="secondary" className="mb-4">Legal</Badge>
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-muted-foreground">
                            Last updated: December 22, 2025
                        </p>
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                        <section>
                            <h2>Introduction</h2>
                            <p>
                                Welcome to MarkdownPDFConverter.com ("we," "our," or "us"). We are committed to protecting your privacy and being transparent about how we handle your information. This Privacy Policy explains our practices regarding data collection, use, and protection.
                            </p>
                        </section>

                        <section>
                            <h2>Information We Collect</h2>
                            <h3>Information You Provide</h3>
                            <p>
                                When you use our Markdown to PDF converter, the content you input (your Markdown text) is processed entirely in your browser. <strong>We do not store, transmit, or have access to the content of your documents.</strong>
                            </p>

                            <h3>Automatically Collected Information</h3>
                            <p>We may automatically collect certain information when you visit our site:</p>
                            <ul>
                                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, and referral sources</li>
                                <li><strong>Device Information:</strong> Browser type, operating system, and screen resolution</li>
                                <li><strong>IP Address:</strong> Used for general geographic analytics and security</li>
                            </ul>
                        </section>

                        <section>
                            <h2>How We Use Your Information</h2>
                            <p>We use the collected information to:</p>
                            <ul>
                                <li>Improve and optimize our website and services</li>
                                <li>Understand how users interact with our tool</li>
                                <li>Detect and prevent fraudulent or abusive behavior</li>
                                <li>Display relevant advertisements through our advertising partners</li>
                            </ul>
                        </section>

                        <section>
                            <h2>Cookies and Tracking Technologies</h2>
                            <p>We use cookies and similar technologies for:</p>
                            <ul>
                                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                                <li><strong>Advertising Cookies:</strong> Used by our advertising partners (including Google AdSense) to show relevant ads</li>
                            </ul>
                            <p>
                                You can manage cookie preferences through our consent banner or your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2>Third-Party Services</h2>
                            <p>We use the following third-party services:</p>
                            <ul>
                                <li><strong>Google AdSense:</strong> For displaying advertisements. Google may use cookies to personalize ads based on your browsing history. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a></li>
                                <li><strong>Google Fonts:</strong> For typography. Google Fonts may collect your IP address.</li>
                                <li><strong>Vercel:</strong> Our hosting provider. They may collect server logs including IP addresses.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your data. All connections to our site are encrypted using HTTPS. Since document processing happens in your browser, your content never leaves your device.
                            </p>
                        </section>

                        <section>
                            <h2>Your Rights</h2>
                            <p>Depending on your location, you may have the right to:</p>
                            <ul>
                                <li>Access the personal data we hold about you</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt out of personalized advertising</li>
                                <li>Withdraw consent for data processing</li>
                            </ul>
                        </section>

                        <section>
                            <h2>Children's Privacy</h2>
                            <p>
                                Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child, please contact us.
                            </p>
                        </section>

                        <section>
                            <h2>Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated revision date.
                            </p>
                        </section>

                        <section>
                            <h2>Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <p>
                                <strong>Email:</strong> privacy@markdownpdfconverter.com
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}
