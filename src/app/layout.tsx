'use client';

import React, { useEffect } from 'react';
import './globals.css';
import GlobalStyle from './styles/global-styles';
import Header from './_components/header';
import useHasMounted from '../useHasMounted';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasMounted = useHasMounted();

  useEffect(() => {
    // Client-only logic here if needed
    console.log('Client-side logic executed');
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
      {hasMounted && (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
        </ThemeProvider>
      )}
    </html>
  );
}
