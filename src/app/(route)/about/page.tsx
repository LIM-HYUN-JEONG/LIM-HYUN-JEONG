'use client';
import React from 'react';
import { Suspense } from 'react';
import About from './_components/about';
import { AbsolDiv } from '../../_components/common';

//Suspense사용할지는 나중에 정하기
export default function Page() {
  return (
    <>
      <About />
    </>
  );
}
