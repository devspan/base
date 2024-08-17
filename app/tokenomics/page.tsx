'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { Lock, Coins, TrendingUp, Shield, Globe, Users, Building } from 'lucide-react'

const tokenDistribution = [
  { name: 'Community & Eco', value: 29, color: '#4F46E5' },
  { name: 'Legacy Holders', value: 21, color: '#10B981' },
  { name: 'Team & Advisors', value: 15, color: '#F59E0B' },
  { name: 'Strategic Reserve', value: 15, color: '#EF4444' },
  { name: 'Liquidity', value: 10, color: '#6366F1' },
  { name: 'Marketing', value: 7, color: '#8B5CF6' },
  { name: 'Initial DEX', value: 3, color: '#EC4899' },
]

const tokenUtility = [
  {
    title: "Decentralized Governance",
    description: "RUPX empowers holders to shape the future of South Asian finance. Participate in crucial decisions about protocol upgrades, resource allocation, and strategic partnerships.",
    icon: Lock,
  },
  {
    title: "Cross-Border Transactions",
    description: "Facilitate seamless, low-cost remittances and international payments across South Asia, bypassing traditional banking hurdles.",
    icon: Globe,
  },
  {
    title: "Yield Farming & Staking",
    description: "Earn passive income by providing liquidity to Rupaya's DeFi ecosystem or by staking RUPX to secure the network.",
    icon: TrendingUp,
  },
  {
    title: "Collateralized Lending",
    description: "Use RUPX as collateral to access Shariah-compliant loans, fostering financial inclusion across diverse communities.",
    icon: Building,
  },
  {
    title: "Community Rewards",
    description: "Engage in ecosystem growth activities and earn RUPX rewards, aligning individual actions with collective progress.",
    icon: Users,
  },
  {
    title: "Deflationary Mechanism",
    description: "A portion of transaction fees are systematically burned, potentially enhancing token value over time through controlled scarcity.",
    icon: Shield,
  },
]

const tokenomicsHighlights = [
  {
    title: "Total Supply",
    value: "100,000,000 RUPX",
    description: "A fixed supply to ensure scarcity and potential value appreciation over time."
  },
  {
    title: "Circulation Schedule",
    value: "4-Year Vesting",
    description: "Core team and advisor tokens are subject to a 4-year vesting period with a 1-year cliff, ensuring long-term commitment."
  },
  {
    title: "Burn Mechanism",
    value: "1% of Transactions",
    description: "1% of all transaction fees are automatically burned, creating a deflationary effect on the total supply."
  },
  {
    title: "Staking Rewards",
    value: "Up to 12% APY",
    description: "Incentivizing long-term holding and network security through competitive staking rewards."
  },
]

export default function TokenomicsPage() {
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
              RUPX Tokenomics
            </h1>
            <p className={`mt-4 text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Fueling Financial Inclusion Across South Asia
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Token Distribution Strategy</CardTitle>
                <CardDescription>Balanced allocation for sustainable growth and community empowerment</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="chart" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="chart">Chart View</TabsTrigger>
                    <TabsTrigger value="table">Detailed Breakdown</TabsTrigger>
                  </TabsList>
                  <TabsContent value="chart">
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart 
                        data={tokenDistribution} 
                        layout="vertical" 
                        margin={{ top: 5, right: 30, left: 150, bottom: 5 }}
                      >
                        <XAxis type="number" domain={[0, 30]} />
                        <YAxis 
                          dataKey="name" 
                          type="category" 
                          width={140}
                          tick={{ fill: theme === 'dark' ? '#E5E7EB' : '#374151' }}
                        />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: theme === 'dark' ? '#374151' : '#F3F4F6',
                            border: 'none',
                            borderRadius: '8px',
                          }}
                          labelStyle={{ color: theme === 'dark' ? '#E5E7EB' : '#1F2937' }}
                          itemStyle={{ color: theme === 'dark' ? '#E5E7EB' : '#1F2937' }}
                        />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8">
                          {tokenDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </TabsContent>
                  <TabsContent value="table">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead>
                          <tr className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                            <th className="py-3 px-4">Allocation</th>
                            <th className="py-3 px-4">Percentage</th>
                            <th className="py-3 px-4">Tokens</th>
                            <th className="py-3 px-4">Purpose</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tokenDistribution.map((item) => (
                            <tr key={item.name} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                              <td className="py-2 px-4">{item.name}</td>
                              <td className="py-2 px-4">{item.value}%</td>
                              <td className="py-2 px-4">{(item.value * 1000000).toLocaleString()} RUPX</td>
                              <td className="py-2 px-4">{getDistributionPurpose(item.name)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              RUPX Utility Ecosystem
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tokenUtility.map((feature) => (
                <Card key={feature.title} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-indigo-900' : 'bg-indigo-100'}`}>
                        {React.createElement(feature.icon, { className: `h-6 w-6 ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'}` })}
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Tokenomics Highlights
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {tokenomicsHighlights.map((highlight) => (
                <Card key={highlight.title}>
                  <CardHeader>
                    <CardTitle>{highlight.title}</CardTitle>
                    <CardDescription>{highlight.value}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does RUPX ensure fair distribution?</AccordionTrigger>
                <AccordionContent>
                  RUPX distribution is designed to balance community empowerment, ecosystem development, and long-term sustainability. With 29% allocated to community and ecosystem growth, we ensure that a significant portion of tokens directly benefits our users and supports grassroots initiatives across South Asia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What measures are in place to prevent token dumping?</AccordionTrigger>
                <AccordionContent>
                  We&apos;ve implemented a 4-year vesting schedule for team and advisor tokens, with a 1-year cliff. This aligns long-term interests and prevents large-scale selling in the early stages. Additionally, our deflationary mechanism and staking rewards incentivize holding and active participation in the ecosystem.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How does RUPX support financial inclusion?</AccordionTrigger>
                <AccordionContent>
                  RUPX is at the heart of our mission to democratize finance in South Asia. By enabling low-cost cross-border transactions, providing access to DeFi services, and supporting micro-investments, RUPX breaks down traditional barriers to financial services. Our focus on Shariah-compliant solutions also ensures inclusivity across diverse communities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function getDistributionPurpose(name: string): string {
  switch (name) {
    case 'Community & Eco':
      return 'Funding development grants, community initiatives, and ecosystem growth'
    case 'Legacy Holders':
      return 'Rewarding early supporters and ensuring continuity from previous blockchain iterations'
    case 'Team & Advisors':
      return 'Incentivizing long-term commitment and aligning interests (4-year vesting with 1-year cliff)'
    case 'Strategic Reserve':
      return 'Supporting future developments, partnerships, and unforeseen opportunities'
    case 'Liquidity':
      return 'Ensuring robust liquidity across decentralized exchanges and lending platforms'
    case 'Marketing':
      return 'Driving adoption, fostering strategic alliances, and expanding reach across South Asia'
    case 'Initial DEX':
      return 'Facilitating fair token distribution and initial market accessibility'
    default:
      return ''
  }
}