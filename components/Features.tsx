'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LockIcon, RefreshCwIcon, UsersIcon, GlobeIcon } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const features = [
  {
    name: 'Decentralized',
    description: 'Fully decentralized platform ensuring transparency and trust.',
    icon: LockIcon,
  },
  {
    name: 'Low-cost Transactions',
    description: 'Efficient blockchain technology enabling low-cost financial transactions.',
    icon: RefreshCwIcon,
  },
  {
    name: 'Community Driven',
    description: 'Governed by a vibrant and engaged community of users and developers.',
    icon: UsersIcon,
  },
  {
    name: 'Global Accessibility',
    description: 'Accessible to anyone, anywhere, promoting financial inclusion.',
    icon: GlobeIcon,
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold tracking-wide uppercase text-indigo-600">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            A better way to empower South Asia
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Rupaya provides innovative solutions to tackle financial inclusion challenges in South Asia.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{feature.name}</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}