import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Blocks, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Airdrops', path: '/airdrops' },
    { name: 'DeFi', path: '/defi' },
    { name: 'Gaming', path: '/gaming' },
    { name: 'AI', path: '/ai' },
    { name: 'Storage', path: '/storage' },
    { name: 'Computing', path: '/computing' },
    { name: 'Social', path: '/social' },
    { name: 'Governance', path: '/governance' },
    { name: 'DApps', path: '/dapps' },
    { name: 'Education', path: '/education' },
    { name: 'Exchanges', path: '/exchanges' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg border-b border-purple-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Blocks className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Web3 Learner
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-purple-500/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}