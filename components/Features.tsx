'use client'

import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { LockIcon, RefreshCwIcon, UsersIcon, GlobeIcon } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useTheme } from 'next-themes'
import { useInView } from 'react-intersection-observer'

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
  const { theme } = useTheme()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

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
    <section className={`py-16 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-base font-semibold tracking-wide uppercase text-indigo-600">Features</motion.h2>
          <motion.p variants={itemVariants} className={`mt-2 text-3xl font-extrabold sm:text-4xl lg:text-5xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            A better way to empower South Asia
          </motion.p>
          <motion.p variants={itemVariants} className={`mt-4 max-w-2xl mx-auto text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
            Rupaya provides innovative solutions to tackle financial inclusion challenges in South Asia.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${theme === 'dark' ? 'bg-indigo-900 text-indigo-300' : 'bg-indigo-100 text-indigo-600'}`}>
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{feature.name}</CardTitle>
                  <CardDescription className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}