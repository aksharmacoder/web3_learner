import React from 'react';
import { ArrowLeftRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Exchanges() {
  return (
    <div>
      <PageHeader
        title="Decentralized Exchanges"
        description="Learn about DEXs and how to trade cryptocurrencies without intermediaries."
        icon={<ArrowLeftRight className="w-8 h-8 text-purple-400" />}
      />
      {/* Add Exchanges content sections here */}
    </div>
  );
}