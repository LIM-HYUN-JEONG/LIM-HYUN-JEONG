// `app/about/page.tsx` is the UI for the `/about` URL
import { Suspense } from 'react';
import About from './about';
//Suspense사용할지는 나중에 정하기
export default function Page() {
  return (
    <>
      <div>🟥 pages : about 🟥</div>
      <About />
    </>
  );
}
