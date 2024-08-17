'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Rocket, Shield, Code, Globe, Zap } from 'lucide-react'

const roadmapData = [
  {
    phase: 'Phase 1: Inception and Awareness (2014 - 2015)',
    icon: Rocket,
    color: '#FF6B6B',
    items: [
      'Genesis Block creation',
      'Launch as scrypt PoW blockchain',
      'Initial community building',
      'Awareness campaign in South Asia'
    ]
  },
  {
    phase: 'Phase 2: Enhancing Security and Stability (2016 - 2017)',
    icon: Shield,
    color: '#4ECDC4',
    items: [
      'Transition to PoS consensus',
      'Implementation of improved blockchain stability',
      'Expansion of community engagement programs',
      'Partnership initiatives with local financial institutions'
    ]
  },
  {
    phase: 'Phase 3: Advanced Features and Growth (2018 - 2019)',
    icon: Code,
    color: '#45B7D1',
    items: [
      'Integration of smart contract capabilities',
      'Launch of decentralized exchange features',
      'Development of mobile wallet application',
      'Establishment of developer grant program'
    ]
  },
  {
    phase: 'Phase 4: Ecosystem Expansion (2020 - 2021)',
    icon: Globe,
    color: '#F9C80E',
    items: [
      'Launch of Rupaya DeFi platform',
      'Integration with major South Asian payment systems',
      'Implementation of cross-chain interoperability',
      'Expansion of Rupaya\'s presence in global crypto markets'
    ]
  },
  {
    phase: 'Phase 5: Mainstream Adoption (2022 - 2023)',
    icon: Zap,
    color: '#7B68EE',
    items: [
      'Launch of Rupaya-powered remittance corridors',
      'Integration with traditional banking systems',
      'Implementation of scalability solutions',
      'Expansion of Shariah-compliant financial products'
    ]
  },
  {
    phase: 'Phase 6: Future Vision (2024 and beyond)',
    icon: Rocket,
    color: '#FF69B4',
    items: [
      'Deployment of AI-driven financial advisory services',
      'Launch of Rupaya-backed stablecoins for major South Asian currencies',
      'Development of blockchain-based identity solutions',
      'Establishment of Rupaya as the leading financial platform in South Asia'
    ]
  }
]

export default function RoadmapPage() {
  const { theme } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h1 className={`text-4xl font-bold sm:text-5xl lg:text-6xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Rupaya Roadmap
            </h1>
            <p className={`mt-4 text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Our journey towards revolutionizing finance in South Asia
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="timeline" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="timeline">Timeline View</TabsTrigger>
                <TabsTrigger value="detailed">Detailed View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="timeline">
                <div className="relative border-l border-gray-200 dark:border-gray-700">
                  {roadmapData.map((phase, index) => (
                    <motion.div 
                      key={phase.phase}
                      className="mb-10 ml-6"
                      variants={itemVariants}
                    >
                      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900" style={{backgroundColor: phase.color}}>
                        {React.createElement(phase.icon, { className: 'w-3 h-3 text-white' })}
                      </span>
                      <h3 className={`flex items-center mb-1 text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {phase.phase}
                      </h3>
                      <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc pl-5">
                        {phase.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="detailed">
                <div className="grid gap-6 md:grid-cols-2">
                  {roadmapData.map((phase, index) => (
                    <Card key={phase.phase}>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: phase.color}}>
                            {React.createElement(phase.icon, { className: 'w-5 h-5 text-white' })}
                          </span>
                          <span>{phase.phase}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {phase.items.map((item, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}