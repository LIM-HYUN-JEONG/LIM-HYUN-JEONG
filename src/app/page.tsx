//메인페이지!
'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, extend } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { getRandomInt } from '../utils/random';
import Star from './_components/star';
import * as THREE from 'three';
import Galaxy from './_components/galaxy';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import Text from './(route)/about/_components/text';
// `app/page.tsx` is the UI for the `/` URL
extend({ TextGeometry });

export default function Home() {
  function genBackgroundStars() {
    const stars = [];
    for (let i = 0; i < 500; i++) {
      const size = getRandomInt(15, 20);
      const pos = new THREE.Vector3(getRandomInt(-50000, 50000), getRandomInt(-50000, 50000), getRandomInt(-50000, 50000));
      stars.push(<Star key={i} position={pos} size={size} />);
    }
    return stars;
  }

  return (
    <Suspense fallback={null}>
      <Canvas
        camera={{
          position: [10000, 10000, 10000],
          rotation: [-0.5, 0, 0],
          far: 200000,
        }}
      >
        <color attach="background" args={['#000']} />
        <ambientLight color={'#fff'} intensity={5} />
        <axesHelper args={[20000]} />
        <OrbitControls />
        {genBackgroundStars()}
        {/* Text inside a Three.js element (mesh) */}
        <mesh position={[0, 0, 0]}>
          {/* Use the Text component */}
          <Text position={[0, 0, 0]} size={20} color="white" style={{ width: 300 }}>
            이런식으로텍스트를 작성
          </Text>
        </mesh>
        <Galaxy />
      </Canvas>
    </Suspense>
  );
}
