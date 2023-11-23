'use client';
import PageHeader from '../../_components/pageHeader';
import PortfolioMain from './portfolioMain';
import PortfolioMini from './portfolioMini';

export default function Page() {
  return (
    <div className="projects">
      <main>
        <PageHeader titleBg="Projects">
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
