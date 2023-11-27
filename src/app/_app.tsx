//서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트
//즉, Next.js 가 가장 먼저 찾고, 실행시키는 파일!
//모든 페이지에서 공통적인 레이아웃을 만들때 사용된다.
//글로벌 CSS는 _app.tsx 에서만 적용이 가능하다!
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from './layout';
//fortawesome 사용하기위해 넣은 코드
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  // Component : 현재 렌더링되고 있는 페이지를 전달하며, 페이지 변경 시 해당 Component는 변경된다.
  // pageProps : prop은 페이지 컴포넌트에 props를 전달하는데 사용된다. getInitialProps, getStaticProps, getServerSideProps 중 하나를 통해 패칭한 초기 속성값이 전달된다.
  return (
    <RootLayout>
      여긴 앱
      <Component {...pageProps} />
    </RootLayout>
  );
}
