
import { AdUnit } from "./ad-unit";
import { PlaceholderAd } from "@/lib/placeholder-images";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";

type AppFooterProps = {
    ad?: PlaceholderAd;
    slotId?: string;
}

const AppFooter = ({ ad, slotId }: AppFooterProps) => {
    return (
        <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 mt-auto">
            {/* Ad Section */}
            <div className="container py-8 flex justify-center">
                <div className="w-full max-w-4xl">
                    <AdUnit
                        placeholderProps={ad}
                        slotId={slotId}
                        style={{ height: '280px' }}
                    />
                </div>
            </div>

            <div className="container px-4 md:px-6 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium">Product</h3>
                        <ul className="space-y-2.5">
                            <li><Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/#editor">Editor</Link></li>
                            <li><Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/#templates">Templates</Link></li>
                            <li><Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/#pricing">Pricing</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium">Resources</h3>
                        <ul className="space-y-2.5">
                            <li><Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/cheatsheet">Markdown Cheatsheet</Link></li>
                            <li><Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/docs">Documentation</Link></li>
                            <li><Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium">Use Cases</h3>
                        <ul className="space-y-2.5">
                            <li><Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/blog/markdown-resume-guide">Resume Builder</Link></li>
                            <li><Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/blog/pdf-templates">Business Proposals</Link></li>
                            <li><Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/blog/mastering-markdown">Students & Papers</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium">Company</h3>
                        <ul className="space-y-2.5">
                            <li><Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/about">About Us</Link></li>
                            <li><Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/contact">Contact Us</Link></li>
                            <li><Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/terms">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;
