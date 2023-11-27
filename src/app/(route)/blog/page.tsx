'use client';
import { Suspense } from 'react';
import BlogWrap from './blogWrap';
import { AbsolDiv } from '../../_components/common';

export default function Page() {
  return (
    <AbsolDiv className="blog">
      <Suspense fallback={null}>
        <section>
          <BlogWrap />
        </section>
      </Suspense>
    </AbsolDiv>
  );
}
