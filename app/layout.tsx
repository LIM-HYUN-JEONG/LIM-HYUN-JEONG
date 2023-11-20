'use client';
import { useEffect } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import GlobalStyle from './styles/global-styles';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Client-only logic here if needed
    console.log('Client-side logic executed');
  }, []);

  return (
    <html lang="en">
      <GlobalStyle />
      {/* You can include common UI elements (header, etc.) here */}
      <body>{children}</body>
    </html>
  );
}
