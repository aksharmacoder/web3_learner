import React from 'react';
import { motion } from 'framer-motion';
import { Image, Heart, DollarSign } from 'lucide-react';

export default function NFTSection() {
  const nfts = [
    {
      name: "Cyber Punk #2047",
      collection: "CyberPunks",
      price: "2.5 ETH",
      likes: "1.2K",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&h=500&fit=crop"
    },
    {
      name: "Space Ape #142",
      collection: "Space Apes",
      price: "1.8 ETH",
      likes: "856",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&h=500&fit=crop"
    },
    {
      name: "Digital Art #789",
      collection: "Digital Arts",
      price: "0.8 ETH",
      likes: "654",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=500&h=500&fit=crop"
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
            NFT Marketplace
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover, collect, and trade unique digital assets on the blockchain
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 overflow-hidden group"
            >
              <div className="relative aspect-square">
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full p-2">
                  <Heart className="w-5 h-5 text-pink-500" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{nft.name}</h3>
                <p className="text-gray-400 mb-4">{nft.collection}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">{nft.price}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Heart className="w-4 h-4" />
                    <span>{nft.likes}</span>
                  </div>
                </div>

                <button className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}