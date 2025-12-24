import Link from 'next/link';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { Suspense } from 'react';
import { PaymentSuccessHandler } from '@/components/payment-success-handler';
import { FaqSection } from '@/components/faq-section';
import Hero from '@/components/hero';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import StatsDashboard from '@/components/stats-dashboard';
import Pricing from '@/components/pricing';
import { JsonLd, websiteSchema, organizationSchema, faqSchema, breadcrumbSchema } from '@/components/json-ld';


import { ComparisonTable } from '@/components/comparison-table';
import { Testimonials } from '@/components/testimonials';

import { AdUnit } from '@/components/ad-unit';
import { placeholderAds } from '@/lib/placeholder-images';
import dynamic from 'next/dynamic';

import EditorClientWrapper from '@/components/editor-client-wrapper';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const sidebarAds = placeholderAds.slice(0, 5);
  const rightSidebarAds = [...placeholderAds.slice(2, 5), ...placeholderAds.slice(0, 3)];
  const mainContentAd = placeholderAds[5];
  const footerAd = placeholderAds[6];

  // Note: Replace '1234567890' with actual Slot IDs from Google AdSense dashboard
  return (
    <div className="flex flex-col min-h-screen">
      {/* JSON-LD Structured Data for SEO */}
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <AppHeader />
      <div className="flex-1 container mx-auto px-4 py-8 md:py-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Sidebar Ads */}
          <aside className="hidden lg:flex lg:col-span-2 flex-col space-y-6">
            <div className="sticky top-20">
              <div className="text-xs font-bold text-muted-foreground text-center mb-2">SPONSORED</div>

              {/* Fallback Display until AdSense is approved */}
              {/* <Link href="/advertise" className="block group relative overflow-hidden rounded-lg border border-border/50 transition-all hover:border-primary/50">
                <div className="aspect-[300/600] w-full bg-muted flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">📢</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Your Ad Here</h4>
                    <p className="text-xs text-muted-foreground mt-1">Reach thousands of developers and writers daily.</p>
                  </div>
                  <span className="text-xs font-medium text-primary underline decoration-dotted underline-offset-4">View Media Kit</span>
                </div>
              </Link> */}

              {/* Once AdSense is ready, uncomment this and add real Slot ID:
              <AdUnit
                slotId="1234567890"
                placeholderProps={sidebarAds[0]}
                format="rectangle"
                style={{ height: '600px' }}
              /> 
              */}
              {/* Sidebar Left Ad Unit */}
              <AdUnit
                slotId="9175625706"
                placeholderProps={sidebarAds[0]}
                format="auto"
                style={{ display: 'block' }}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="col-span-1 md:col-span-12 lg:col-span-8 flex flex-col gap-8">
            {/* Top Banner Ad */}
            <div className="w-full">
              <div className="text-xs font-bold text-muted-foreground text-center mb-1">SPONSORED</div>
              <AdUnit slotId="2665864154" placeholderProps={mainContentAd} className="min-h-[100px]" />
            </div>

            <Hero />

            {/* Feature Callout - PDF to Markdown */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-primary flex items-center justify-center sm:justify-start gap-2">✨ New: PDF to Markdown with AI</h3>
                <p className="text-sm text-foreground/80">Extract text, code, and tables from PDFs back to editable Markdown format.</p>
              </div>
              <Button asChild className="shrink-0">
                <Link href="/pdf-to-markdown">Try It Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            <EditorClientWrapper />

            <Pricing />

            <StatsDashboard />

            <ComparisonTable />

            <Testimonials />

            {/* AdSense-Safe Educational Content Sections */}
            <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-headline prose-a:text-primary space-y-12">
              <section id="what-is-markdown">
                <h2>What Is Markdown?</h2>
                <p>
                  Markdown is a lightweight markup language commonly used for documentation, README files, technical blogs, and note-taking. It allows users to write formatted content using simple plain-text syntax, making it ideal for developers and writers who want speed and clarity.
                </p>
                <p>
                  However, Markdown files are not always suitable for sharing or printing. That’s where PDF conversion becomes essential.
                </p>
              </section>

              <section id="why-convert">
                <h2>Why Convert Markdown to PDF?</h2>
                <p>
                  PDF is a universally accepted format that ensures consistent layout, typography, and structure across all devices and operating systems.
                </p>
                <p>Common reasons to convert Markdown to PDF include:</p>
                <ul>
                  <li>Sharing documentation with non-technical stakeholders</li>
                  <li>Printing reports and notes</li>
                  <li>Submitting assignments or proposals</li>
                  <li>Archiving project documentation</li>
                  <li>Distributing read-only versions of technical content</li>
                </ul>
              </section>

              <section id="who-is-it-for">
                <h2>Who Is This Tool For?</h2>
                <p>MarkdownPDFConverter is designed for:</p>
                <ul>
                  <li><strong>Software developers</strong> preparing documentation</li>
                  <li><strong>Technical writers</strong> exporting manuals and guides</li>
                  <li><strong>Students</strong> submitting Markdown-based assignments</li>
                  <li><strong>Content creators</strong> archiving articles</li>
                  <li><strong>Teams</strong> converting README files into shareable PDFs</li>
                </ul>
              </section>

              <section id="key-features">
                <h2>Key Features</h2>
                <ul>
                  <li>Accurate Markdown rendering</li>
                  <li>Preserves headings, lists, tables, and code blocks</li>
                  <li>No account or signup required</li>
                  <li>Works entirely in your browser</li>
                  <li>Compatible with standard Markdown syntax</li>
                  <li>Fast and lightweight conversion</li>
                </ul>
              </section>

              <section id="learn-more" className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h2 className="mt-0">Learn More About Markdown and PDF Conversion</h2>
                <p>Explore our in-depth guides to master document conversion and Markdown formatting:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                  <li className="bg-background p-4 rounded-lg border border-border hover:border-primary transition-colors">
                    <Link href="/blog/how-to-convert-markdown-to-pdf" className="font-bold no-underline hover:text-primary">
                      How to Convert Markdown to PDF (Step-by-Step Guide)
                    </Link>
                  </li>
                  <li className="bg-background p-4 rounded-lg border border-border hover:border-primary transition-colors">
                    <Link href="/blog/markdown-vs-pdf" className="font-bold no-underline hover:text-primary">
                      Markdown vs PDF: Choosing the Right Format
                    </Link>
                  </li>
                  <li className="bg-background p-4 rounded-lg border border-border hover:border-primary transition-colors">
                    <Link href="/blog/markdown-formatting-fixes" className="font-bold no-underline hover:text-primary">
                      Common Markdown Formatting Issues and Fixes
                    </Link>
                  </li>
                  <li className="bg-background p-4 rounded-lg border border-border hover:border-primary transition-colors">
                    <Link href="/blog/technical-writing-with-markdown" className="font-bold no-underline hover:text-primary">
                      Technical Writing with Markdown: A Beginner&apos;s Guide
                    </Link>
                  </li>
                </ul>
              </section>
            </article>

            <FaqSection />
          </main>

          {/* Right Sidebar Ads */}
          <aside className="hidden lg:flex lg:col-span-2 flex-col space-y-6">
            <div className="sticky top-20">
              <div className="text-xs font-bold text-muted-foreground text-center mb-2">ADVERTISEMENT</div>
              <AdUnit
                slotId="5044809000"
                placeholderProps={rightSidebarAds[0]}
                format="rectangle"
                style={{ height: '600px' }}
              />
            </div>
          </aside>
        </div>
      </div>
      <AppFooter ad={footerAd} slotId="3731727336" />
      <Suspense fallback={null}>
        <PaymentSuccessHandler />
      </Suspense>
    </div>
  );
}
