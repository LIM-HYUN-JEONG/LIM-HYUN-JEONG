/* eslint-disable @next/next/no-document-import-in-page */
// _app.tsx 다음으로 실행되는 파일
// HTML 문서를 커스터마이징 할 수 있는 컴포넌트.
// 공통적으로 사용할 head, meta(뷰포트) 정보, body 등을 커스터마이징 할 수 있다.

import { Html, Main, NextScript } from 'next/document';
import Head from 'next/head';

// 서버에서 실행되는 파일이므로 API 나 이벤트 핸들러는 실행되지 않는다.
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link> 태그를 사용해 브라우저 대표 아이콘을 설정, <meta> 태그를 사용해 뷰포트를 설정*/}
        {/*<link rel="icon" href="/N_logo.svg" />*/}
        <meta name="viewport" content="width=device-width" />
      </Head>
      <body>
        <Main />
        여기는 도큐먼트
        <NextScript />
      </body>
    </Html>
  );
}
