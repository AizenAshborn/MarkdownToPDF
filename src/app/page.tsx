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
      <div className="flex-1 container mx-auto px-4 py-8 md:py-12 z-10">
        <div className="grid grid-cols-12 gap-8">
          <aside className="col-span-12 lg:col-span-2 hidden lg:block space-y-8">
            <AdPlaceholder />
            <AdPlaceholder />
          </aside>
          <main className="col-span-12 lg:col-span-8">
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
          <aside className="col-span-12 lg:col-span-2 hidden lg:block space-y-8">
            <AdPlaceholder />
            <AdPlaceholder />
          </aside>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
