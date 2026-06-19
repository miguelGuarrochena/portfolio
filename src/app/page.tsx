'use client';

import { Suspense } from 'react';
import { HomeContent } from '@/components/HomeContent';
import { PageLoader } from '@/components/PageLoader';

export default function HomePage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <HomeContent />
    </Suspense>
  );
}
