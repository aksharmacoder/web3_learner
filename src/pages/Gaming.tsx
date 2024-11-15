import React from 'react';
import { Gamepad2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Gaming() {
  return (
    <div>
      <PageHeader
        title="Web3 Gaming"
        description="Discover blockchain games, play-to-earn opportunities, and the future of gaming in Web3."
        icon={<Gamepad2 className="w-8 h-8 text-purple-400" />}
      />
      {/* Add Gaming content sections here */}
    </div>
  );
}