import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, BarChart2 } from 'lucide-react';

export default function MarketSection() {
  const markets = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$45,234.67",
      change: "+5.67%",
      volume: "$24.5B",
      positive: true
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$2,845.12",
      change: "+3.24%",
      volume: "$15.2B",
      positive: true
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: "$98.45",
      change: "-2.34%",
      volume: "$4.8B",
      positive: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
            Crypto Market
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Track real-time cryptocurrency prices and market trends
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-500/20">
                <th className="py-4 text-left text-gray-400 font-medium">Asset</th>
                <th className="py-4 text-right text-gray-400 font-medium">Price</th>
                <th className="py-4 text-right text-gray-400 font-medium">24h Change</th>
                <th className="py-4 text-right text-gray-400 font-medium">Volume</th>
                <th className="py-4 text-right text-gray-400 font-medium">Chart</th>
              </tr>
            </thead>
            <tbody>
              {markets.map((market, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors cursor-pointer"
                >
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{market.symbol}</span>
                      </div>
                      <div>
                        <div className="font-medium text-white">{market.name}</div>
                        <div className="text-sm text-gray-400">{market.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-right font-medium text-white">{market.price}</td>
                  <td className={`py-4 text-right font-medium flex items-center justify-end ${market.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {market.positive ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    {market.change}
                  </td>
                  <td className="py-4 text-right text-gray-400">{market.volume}</td>
                  <td className="py-4 text-right">
                    <BarChart2 className="w-6 h-6 text-purple-400 inline-block" />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}