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

const Editor = dynamic(() => import('@/components/editor'), {
  loading: () => <div className="h-[500px] w-full bg-muted/20 animate-pulse rounded-lg flex items-center justify-center text-muted-foreground">Loading Editor...</div>,
  ssr: false
});
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

            <EditorWrapper />

            <Pricing />

            <StatsDashboard />

            <ComparisonTable />

            <Testimonials />

            {/* SEO Content Block - Beats competitors with 'thin' content */}
            <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-headline prose-a:text-primary">
              <h2>The Best Free Direct Markdown to PDF Converter</h2>
              <p>
                <strong>MarkdownPDFConverter.com</strong> is the most advanced free online tool designed to convert Markdown files (.md) into professional formatted PDF documents. Unlike other converters that simply print the HTML, we use a sophisticated rendering engine that ensures your layouts, code blocks, and images are preserved with pixel-perfect accuracy.
              </p>
              <h3>New: PDF to Markdown Conversion</h3>
              <p>
                Need to go the other way? Our new <Link href="/pdf-to-markdown">PDF to Markdown Converter</Link> uses advanced AI to analyze your PDF documents and reconstruct them into clean Markdown text. It handles difficult elements like multi-column layouts, data tables, and syntax-highlighted code blocks, saving you hours of manual re-typing.
              </p>
              <h3>Why use a Markdown Converter?</h3>
              <p>
                Writing in Markdown allows you to focus on content without worrying about layout. However, sharing raw .md files is often not practical. Converting them to PDF ensures that your document looks exactly the same on every device, whether you are sending a <a href="/blog/markdown-resume-guide">developer resume</a>, a technical report, or a business proposal.
              </p>
              <h3>Features</h3>
              <ul>
                <li><strong>Real-time Preview:</strong> See your changes instantly as you type.</li>
                <li><strong>Privacy First:</strong> All conversion happens in your browser. No server uploads.</li>
                <li><strong>AI Styling:</strong> Use natural language to design your document.</li>
                <li><strong>GFM Support:</strong> Full support for GitHub Flavored Markdown tables and lists.</li>
              </ul>
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
