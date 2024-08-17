'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp, Zap, Shield, Rocket, Code, Globe } from 'lucide-react'

const roadmapData = [
  {
    phase: 'Phase 1',
    title: 'Inception and Awareness',
    date: '2014 - 2015',
    color: '#FF6B6B',
    icon: Zap,
    items: [
      'Genesis Block creation',
      'Initial mining as scrypt PoW blockchain',
      'Community building'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Enhancing Security and Stability',
    date: '2016 - 2017',
    color: '#4ECDC4',
    icon: Shield,
    items: [
      'Transition to PoS',
      'Growing community engagement',
      'Improved blockchain stability'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Advanced Features and Growth',
    date: '2018 - 2019',
    color: '#45B7D1',
    icon: Rocket,
    items: [
      'Adoption of Bitcoin codebase for enhanced features',
      'Significant growth during 2018 bull run',
      'Overcame challenges during crypto winter'
    ]
  },
  {
    phase: 'Phase 4',
    title: 'EVM Integration',
    date: '2019 - 2020',
    color: '#F9C80E',
    icon: Code,
    items: [
      'Migration to EVM-compatible blockchain',
      'Implementation of smart contract capabilities',
      'Enhanced scalability and performance'
    ]
  },
  {
    phase: 'Phase 5',
    title: 'Global Expansion and Innovation',
    date: '2021 - Present',
    color: '#7B68EE',
    icon: Globe,
    items: [
      'Development of new optimized blockchain',
      'Focus on global financial inclusion',
      'Strategic partnerships and community growth'
    ]
  }
]

const RoadmapItem = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8 relative"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
      <Card className="ml-6 overflow-hidden">
        <CardContent className="p-0">
          <div 
            className="p-4 flex items-center justify-between cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ background: `linear-gradient(45deg, ${item.color}22, ${item.color}11)` }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-full" style={{ backgroundColor: item.color }}>
                <Icon size={24} color="white" />
              </div>
              <div>
                <h3 className="font-bold text-lg" style={{ color: item.color }}>{item.phase}</h3>
                <p className="text-sm text-gray-600">{item.title}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700"
            >
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </Button>
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-gray-700">{listItem}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Roadmap() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Journey and Future Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore Rupaya's development timeline and upcoming milestones in our  interactive roadmap.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {roadmapData.map((item, index) => (
            <RoadmapItem key={item.phase} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}