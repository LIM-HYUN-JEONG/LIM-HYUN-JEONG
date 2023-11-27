'use client';
import { AbsolDiv } from '../../_components/common';
import PageHeader from '../../_components/pageHeader';
import PortfolioMain from './portfolioMain';
import PortfolioMini from './portfolioMini';

export default function Page() {
  return (
    <AbsolDiv className="projects">
      <main>
        <PageHeader titleBg="Projects">
          My <span className="point">Projects</span>
        </PageHeader>
        <section>
          <PortfolioMain />
          <PortfolioMini />
        </section>
      </main>
    </AbsolDiv>
  );
}
