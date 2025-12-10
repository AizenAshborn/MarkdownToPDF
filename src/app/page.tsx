import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import Hero from '@/components/hero';
import Editor from '@/components/editor';
import StatsDashboard from '@/components/stats-dashboard';
import BackgroundParticles from '@/components/background-particles';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundParticles />
      <AppHeader />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 z-10">
        <Hero />
        <Editor />
        <StatsDashboard />
      </main>
      <AppFooter />
    </div>
  );
}
