// `app/about/page.tsx` is the UI for the `/about` URL
import { Suspense } from 'react';
//Suspense사용할지는 나중에 정하기
export default function Page() {
  return (
    <>
      <div>🟥 pages : about 🟥</div>
      <Suspense fallback={<p>Loading...</p>}>로딩 영어나오는지 확인</Suspense>
    </>
  );
}
