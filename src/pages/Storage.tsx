import React from 'react';
import { HardDrive } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Storage() {
  return (
    <div>
      <PageHeader
        title="Decentralized Storage"
        description="Learn about distributed storage solutions and how they're revolutionizing data management."
        icon={<HardDrive className="w-8 h-8 text-purple-400" />}
      />
      {/* Add Storage content sections here */}
    </div>
  );
}