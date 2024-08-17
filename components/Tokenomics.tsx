'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts'
import { Card, CardContent } from '@/components/ui/card'

const data = [
  { name: 'Community and Ecosystem', value: 29, color: '#3498db' },
  { name: 'Existing Holders', value: 21, color: '#34495e' },
  { name: 'Team and Advisors', value: 15, color: '#2ecc71' },
  { name: 'Reserve Fund', value: 15, color: '#f1c40f' },
  { name: 'Liquidity Provision', value: 10, color: '#e74c3c' },
  { name: 'Marketing and Partnerships', value: 7, color: '#9b59b6' },
  { name: 'Initial DEX Offering', value: 3, color: '#1abc9c' },
]

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  )
}

export default function Tokenomics() {
  const [activeIndex, setActiveIndex] = useState(0)

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            RUPX Distribution
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Ensuring a fair and sustainable ecosystem for Rupaya
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {data.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                  </div>
                  <p className="text-2xl font-bold mt-2">{item.value}%</p>
                </CardContent>
                <div 
                  className="h-1" 
                  style={{ backgroundColor: item.color, width: `${item.value}%` }}
                />
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-2xl font-bold text-gray-900">
            Total Supply: 100,000,000 RUPX
          </p>
          <p className="mt-2 text-gray-600">
            Designed to support long-term growth and community engagement
          </p>
        </motion.div>
      </div>
    </section>
  )
}