'use client';
import { useEffect } from 'react';
import './globals.css';
import GlobalStyle from './styles/global-styles';
import Header from './_components/header';
import useHasMounted from '../useHasMounted';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasMounted = useHasMounted();

  useEffect(() => {
    // Client-only logic here if needed
    console.log('Client-side logic executed');
  }, []);

  return (
    <html lang="en">
      <GlobalStyle />
      {hasMounted && <Header />}
      <body>{children}</body>
    </html>
  );
}
