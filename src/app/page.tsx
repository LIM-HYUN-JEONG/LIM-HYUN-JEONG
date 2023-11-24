//메인페이지!
'use client';

import React, { Suspense } from 'react';
// `app/page.tsx` is the UI for the `/` URL
export default function Home() {
  return (
    <Suspense fallback={null}>
      <div>
        <div>🟥 pages : main </div>
      </div>
    </Suspense>
  );
}
