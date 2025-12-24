import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';

export const metadata = {
    title: 'Privacy Policy | MarkdownPDFConverter | AI Markdown to PDF Tool',
    description: 'Privacy policy for MarkdownPDFConverter.com, an AdSense-compliant documentation regarding cookies and data usage.',
};

export default function PrivacyPage() {
    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: {today}</p>

                    <p>
                        markdownpdfconverter.com respects your privacy and is committed to protecting it through this Privacy Policy. This policy explains how information is collected, used, and protected when you visit or use our website.
                    </p>

                    <hr />

                    <h3>Information We Collect</h3>
                    <p>We may collect the following types of information:</p>

                    <p><strong>Personal Information</strong></p>
                    <p>We do not require users to create an account or submit personal information to use our services.</p>

                    <p><strong>Usage Data</strong></p>
                    <p>We may collect non-personal information such as browser type, device type, pages visited, and usage patterns to improve our website.</p>

                    <hr />

                    <h3>Cookies and Web Beacons</h3>
                    <p>
                        markdownpdfconverter.com uses cookies to store information about visitors’ preferences and to optimize user experience by customizing our web page content based on visitors’ browser type or other information. These cookies may be used by third-party advertising partners, including Google, to display relevant advertisements.
                    </p>

                    <hr />

                    <h3>Google AdSense</h3>
                    <p>
                        We use Google AdSense to serve advertisements on this website. Google uses cookies, including the DoubleClick cookie, to serve ads to users based on their visit to this website and other websites on the Internet.
                    </p>
                    <p>
                        Google’s use of advertising cookies enables it and its partners to serve ads based on users’ interests. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
                    </p>
                    <p>
                        You may also learn more about how Google manages data in advertising products by visiting <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google’s Privacy & Terms page</a>.
                    </p>

                    <hr />

                    <h3>How We Use Your Information</h3>
                    <p>We use collected information to:</p>
                    <ul>
                        <li>Operate and maintain our website</li>
                        <li>Improve user experience</li>
                        <li>Understand usage trends</li>
                        <li>Display relevant advertisements</li>
                    </ul>
                    <p>We do not sell, trade, or transfer users’ personal information to outside parties.</p>

                    <hr />

                    <h3>Third-Party Privacy Policies</h3>
                    <p>
                        markdownpdfconverter.com’s Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of third-party ad servers or websites for more detailed information about their practices.
                    </p>

                    <hr />

                    <h3>Data Security</h3>
                    <p>
                        We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                    </p>

                    <hr />

                    <h3>Children’s Information</h3>
                    <p>
                        markdownpdfconverter.com does not knowingly collect any personal information from children under the age of 13. If you believe your child has provided such information, please contact us and we will promptly remove it.
                    </p>

                    <hr />

                    <h3>Consent</h3>
                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

                    <hr />

                    <h3>Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, you may contact us at:</p>
                    <p>Email: <a href="mailto:contact@markdownpdfconverter.com">contact@markdownpdfconverter.com</a></p>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}
