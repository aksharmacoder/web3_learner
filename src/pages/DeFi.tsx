import React from 'react';
import { Wallet2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function DeFi() {
  return (
    <div>
      <PageHeader
        title="Decentralized Finance"
        description="Explore the world of DeFi, from lending and borrowing to yield farming and liquidity mining."
        icon={<Wallet2 className="w-8 h-8 text-purple-400" />}
      />
      {/* Add DeFi content sections here */}
    </div>
  );
}