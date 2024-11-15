import React from 'react';
import { Cpu } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Computing() {
  return (
    <div>
      <PageHeader
        title="Decentralized Computing"
        description="Explore distributed computing networks and blockchain-based processing solutions."
        icon={<Cpu className="w-8 h-8 text-purple-400" />}
      />
      {/* Add Computing content sections here */}
    </div>
  );
}