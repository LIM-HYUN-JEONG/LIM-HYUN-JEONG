'use client';

import PageHeader from '../../_components/pageHeader';
import data from '../../assets/data/portfoilodata';
import DetailWrap from './detailWrap';

// `app/projects/page.tsx` is the UI for the `/projects` URL
export default function Page(match: any) {
  const portfolioInfo = data.portfolioList.filter((info, idx) => {
    if (info.name === match.params.name) return info;
  });

  return (
    <div>
      <main>
        <PageHeader titleBg="Projrcts">
          It&#39;s <span className="point">{match.params.name}</span>
        </PageHeader>
        <section>
          <DetailWrap project={portfolioInfo[0]} />
        </section>
      </main>
    </div>
  );
}
