'use client';

import dynamic from 'next/dynamic';

const BackgroundParticles = dynamic(
  () => import('@/components/background-particles'),
  { ssr: false }
);

export default function ClientBackground() {
  return <BackgroundParticles />;
}
