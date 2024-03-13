'use client';
import * as React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';

export function Provider({ children }: { children: React.ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}