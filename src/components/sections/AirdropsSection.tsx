import React from 'react';
import { Gift, Timer, Users2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AirdropsSection() {
  const airdrops = [
    {
      name: "NewChain Token",
      value: "$500-$5000",
      participants: "25K+",
      timeLeft: "2 days",
      requirements: "Hold min. 0.1 ETH",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      name: "DeFi Protocol",
      value: "$200-$2000",
      participants: "15K+",
      timeLeft: "5 days",
      requirements: "Complete tasks",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      name: "GameFi Token",
      value: "$100-$1000",
      participants: "40K+",
      timeLeft: "1 week",
      requirements: "Play demo",
      bgGradient: "from-pink-500/10 to-orange-500/10"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
            Latest Airdrops
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest crypto airdrops and maximize your opportunities
            in the Web3 space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {airdrops.map((airdrop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-r ${airdrop.bgGradient} p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer group`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{airdrop.name}</h3>
                  <p className="text-purple-400 font-medium">{airdrop.value}</p>
                </div>
                <Gift className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Users2 className="w-4 h-4 mr-2" />
                  <span>{airdrop.participants} participants</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Timer className="w-4 h-4 mr-2" />
                  <span>Ends in {airdrop.timeLeft}</span>
                </div>
                <p className="text-sm text-gray-500">{airdrop.requirements}</p>
              </div>

              <button className="mt-4 w-full py-2 rounded-lg border border-purple-500/20 text-purple-400 hover:bg-purple-500/10 transition-colors flex items-center justify-center space-x-2 group">
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}