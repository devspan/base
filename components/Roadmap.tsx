'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp, Zap, Shield, Rocket, Code, Globe, LucideIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

interface RoadmapItem {
  phase: string;
  title: string;
  date: string;
  color: string;
  icon: LucideIcon;
  items: string[];
}

const roadmapData: RoadmapItem[] = [
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

interface RoadmapItemProps {
  item: RoadmapItem;
  index: number;
  isLast: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ item, index, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { theme } = useTheme()
  const Icon = item.icon

  const toggleExpand = () => setIsExpanded(!isExpanded)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-12 relative"
    >
      <div 
        className={`absolute left-10 top-12 bottom-0 w-1 ${isLast ? 'h-12' : 'h-full'}`}
        style={{
          background: `linear-gradient(to bottom, ${item.color}, transparent)`
        }}
      ></div>
      <Card className="overflow-hidden border-none shadow-lg h-auto">
        <CardContent className="p-0">
          <Button
            variant="ghost"
            className="w-full p-6 flex items-center justify-between text-left hover:bg-transparent h-auto"
            onClick={toggleExpand}
            aria-expanded={isExpanded}
            style={{ 
              background: theme === 'dark' 
                ? `linear-gradient(45deg, ${item.color}22, ${item.color}11)` 
                : `linear-gradient(45deg, ${item.color}11, ${item.color}05)`
            }}
          >
            <div className="flex items-center space-x-6">
              <div className="p-3 rounded-full" style={{ backgroundColor: item.color }}>
                <Icon size={32} color="white" />
              </div>
              <div>
                <h3 className="font-bold text-2xl mb-1" style={{ color: item.color }}>{item.phase}</h3>
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{item.title}</p>
              </div>
            </div>
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </Button>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-4`}>{item.date}</p>
                  <ul className="space-y-3">
                    {item.items.map((listItem: string, i: number) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className={`text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{listItem}</span>
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

const Roadmap: React.FC = () => {
  const { theme } = useTheme()

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Our Journey and Future Plans
          </h2>
          <p className={`text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore Rupaya's development timeline and upcoming milestones in our interactive roadmap.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {roadmapData.map((item, index) => (
            <RoadmapItem 
              key={item.phase} 
              item={item} 
              index={index}
              isLast={index === roadmapData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap