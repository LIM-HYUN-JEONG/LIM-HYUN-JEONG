'use client';
import React, { useEffect } from 'react';
import './globals.css';
import GlobalStyle from './styles/global-styles';
import Header from './_components/header';
import useHasMounted from '../useHasMounted';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Metadata } from 'next';

//export const metadata: Metadata = {
// title: {
// default: '임현정 블로그',
//template: '임현정 블로그 ',
//},
//description: '프론트엔드 개발자의 블로그',
// icons: {
//  icon: '/myLogo.ico',
//},
//};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasMounted = useHasMounted();

  useEffect(() => {
    // Client-only logic here if needed
    console.log('Client-side logic executed');
  }, []);

  return (
    <html lang="en">
      <head>{/* <link rel="icon" href="/myLogo.ico" sizes="any" />*/}</head>

      <body>
        {hasMounted && (
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
