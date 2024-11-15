import React from 'react';
import { Gift } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AirdropsSection from '../components/sections/AirdropsSection';

export default function Airdrops() {
  return (
    <div>
      <PageHeader
        title="Crypto Airdrops"
        description="Discover the latest airdrops and learn how to participate in token distributions from promising Web3 projects."
        icon={<Gift className="w-8 h-8 text-purple-400" />}
      />
      <AirdropsSection />
    </div>
  );
}