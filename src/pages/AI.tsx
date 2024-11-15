import React from 'react';
import { Brain } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function AI() {
  return (
    <div>
      <PageHeader
        title="Decentralized AI"
        description="Explore the intersection of artificial intelligence and blockchain technology."
        icon={<Brain className="w-8 h-8 text-purple-400" />}
      />
      {/* Add AI content sections here */}
    </div>
  );
}