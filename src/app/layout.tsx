'use client';
import React, { useEffect } from 'react';
import './globals.css';
import GlobalStyle from './styles/global-styles';
import Header from './_components/header';
import useHasMounted from '../useHasMounted';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Metadata } from 'next';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { getRandomInt } from '../utils/random';
import * as THREE from 'three';
import Star from './_components/star';
import Text from './(route)/about/_components/text';
import MobileHeader from './_components/mobileHeader';
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

  function genBackgroundStars() {
    const stars = [];
    for (let i = 0; i < 500; i++) {
      const size = getRandomInt(15, 20);
      const pos = new THREE.Vector3(getRandomInt(-50000, 50000), getRandomInt(-50000, 50000), getRandomInt(-50000, 50000));
      stars.push(<Star key={i} position={pos} size={size} />);
    }
    return stars;
  }

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
            <MobileHeader />
            <main style={{ width: '100vw', height: '100vh' }}>
              <Canvas
                camera={{
                  position: [10000, 10000, 10000],
                  rotation: [-0.5, 0, 0],
                  far: 100000,
                }}
              >
                <color attach="background" args={['#000']} />
                <ambientLight color={'#fff'} intensity={5} />
                <OrbitControls />
                {genBackgroundStars()}
              </Canvas>
              {children}
            </main>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
