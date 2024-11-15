import React from 'react';
import { Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Social() {
  return (
    <div>
      <PageHeader
        title="Decentralized Social"
        description="Discover the future of social networking with Web3 social platforms and protocols."
        icon={<Users className="w-8 h-8 text-purple-400" />}
      />
      {/* Add Social content sections here */}
    </div>
  );
}