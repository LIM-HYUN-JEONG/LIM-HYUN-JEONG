'use client';
import PageHeader from '../../_components/pageHeader';
import BlogWrap from './blogWrap';

// `app/blog/page.tsx` is the UI for the `/blog` URL
export default function Page() {
  return (
    <div className="blog">
      <main>
        <PageHeader titleBg="Blog">
          My <span className="point">Blog</span>
        </PageHeader>
        <section>
          <BlogWrap />
        </section>
      </main>
    </div>
  );
}
