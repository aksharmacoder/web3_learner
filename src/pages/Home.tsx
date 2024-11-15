import React from 'react';
import Hero from '../components/Hero';
import MarketSection from '../components/sections/MarketSection';
import NFTSection from '../components/sections/NFTSection';
import AirdropsSection from '../components/sections/AirdropsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <MarketSection />
      <NFTSection />
      <AirdropsSection />
    </>
  );
}