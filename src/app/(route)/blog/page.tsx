'use client';
import { Suspense } from 'react';
import PageHeader from '../../_components/pageHeader';
import BlogWrap from './blogWrap';

export default function Page() {
  return (
    <main className="blog">
      <Suspense fallback={null}>
        <PageHeader titleBg="Blog">
          My <span className="point">Blog</span>
        </PageHeader>
        <section>
          <BlogWrap />
        </section>
      </Suspense>
    </main>
  );
}
