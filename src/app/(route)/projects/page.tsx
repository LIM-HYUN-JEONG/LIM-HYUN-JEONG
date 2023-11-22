'use client';

import PageHeader from '../../_components/pageHeader';
import PortfolioMain from './portfolioMain';
import PortfolioMini from './portfolioMini';

// `app/projects/page.tsx` is the UI for the `/projects` URL
export default function Page() {
  return (
    <div className="projects">
      <main>
        <PageHeader titleBg="Projrcts">
          My <span className="point">Projects</span>
        </PageHeader>
        <section>
          <PortfolioMain />
          <PortfolioMini />
        </section>
      </main>
    </div>
  );
}
