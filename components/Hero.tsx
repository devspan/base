'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const { theme } = useTheme()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
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
    <div className={`relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className={`hidden lg:block absolute right-0 inset-y-0 h-full w-48 transform translate-x-1/2 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <motion.main
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                variants={itemVariants}
                className={`text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              >
                <span className="block xl:inline">Empowering South Asia</span>{' '}
                <span className="block text-indigo-600 xl:inline">through Decentralized Finance</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className={`mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}
              >
                Rupaya is a grassroots initiative leveraging blockchain technology to tackle financial inclusion challenges. Join us in creating a more accessible and equitable financial future for millions across South Asia.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="rounded-md shadow">
                  <Link href="/whitepaper" passHref>
                    <Button size="lg" className="w-full">
                      Read Whitepaper
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/join" passHref>
                    <Button size="lg" variant="outline" className="w-full">
                      Join Community
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.main>
        </div>
      </div>
      <motion.div 
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={theme === 'dark' 
            ? "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
            : "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          }
          alt="Rupaya DeFi"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>
    </div>
  )
}