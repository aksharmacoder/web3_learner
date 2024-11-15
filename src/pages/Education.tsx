import React from 'react';
import { GraduationCap } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Education() {
  return (
    <div>
      <PageHeader
        title="Web3 Education"
        description="Access comprehensive learning resources and tutorials about blockchain technology."
        icon={<GraduationCap className="w-8 h-8 text-purple-400" />}
      />
      {/* Add Education content sections here */}
    </div>
  );
}