import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import Hero from '@/components/hero';
import Editor from '@/components/editor';
import StatsDashboard from '@/components/stats-dashboard';
import Pricing from '@/components/pricing';
import { AdPlaceholder } from '@/components/ad-placeholder';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 z-10">
        <Hero />
        <div className="my-8">
          <AdPlaceholder />
        </div>
        <Pricing />
        <Editor />
        <div className="my-8">
          <AdPlaceholder />
        </div>
        <StatsDashboard />
      </main>
      <AppFooter />
    </div>
  );
}
