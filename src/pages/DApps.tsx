import React from 'react';
import { AppWindow } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function DApps() {
  return (
    <div>
      <PageHeader
        title="Decentralized Applications"
        description="Explore the world of dApps and learn how they're transforming various industries."
        icon={<AppWindow className="w-8 h-8 text-purple-400" />}
      />
      {/* Add DApps content sections here */}
    </div>
  );
}