'use client';

import { Suspense } from 'react';
import PageHeader from '../../_components/pageHeader';
import data from '../../assets/data/portfoilodata';
import DetailWrap from './detailWrap';
import { AbsolDiv } from '../../_components/common';

// `app/projects/page.tsx` is the UI for the `/projects` URL
export default function Page(match: any) {
  const portfolioInfo = data.portfolioList.filter((info, idx) => {
    if (info.name === match.params.name) return info;
  });

  return (
    <AbsolDiv>
      <Suspense fallback={null}>
        <PageHeader titleBg="projects">
          It&#39;s <span className="point">{match.params.name}</span>
        </PageHeader>
        <section>
          <DetailWrap project={portfolioInfo[0]} />
        </section>
      </Suspense>
    </AbsolDiv>
  );
}
