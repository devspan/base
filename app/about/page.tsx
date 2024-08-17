'use client'

import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from 'next-themes'
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { RocketIcon, LightbulbIcon, BarChartIcon, GlobeIcon, CoinsIcon, ShieldIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const aboutSections = [
  {
    title: "Our Mission",
    content: "Rupaya is on a mission to revolutionize finance in South Asia through decentralized technology. We&apos;re committed to breaking down barriers to financial inclusion, creating opportunities for millions across the region, and fostering economic growth through blockchain innovation.",
    icon: RocketIcon,
  },
  {
    title: "Our Vision",
    content: "We envision a future where everyone in South Asia has access to fair, transparent, and efficient financial services. By leveraging blockchain technology, we aim to create a borderless financial ecosystem that empowers individuals and businesses alike, driving prosperity and innovation across the region.",
    icon: LightbulbIcon,
  },
  {
    title: "Our Impact",
    content: "Rupaya is making a tangible difference in South Asia&apos;s financial landscape. We&apos;re providing financial services to the unbanked, significantly reducing remittance costs for migrant workers, enabling micro-investments and savings for small businesses, and fostering entrepreneurship through decentralized lending platforms.",
    icon: BarChartIcon,
  },
  {
    title: "Technology",
    content: "At the heart of Rupaya is cutting-edge blockchain technology. Our platform ensures secure and transparent transactions, enables low-cost financial operations, and provides seamless interoperability with global financial systems. Through smart contracts, we&apos;re automating and securing financial services like never before.",
    icon: GlobeIcon,
  },
  {
    title: "Tokenomics",
    content: "The RUPX token is the lifeblood of our ecosystem. With a total supply of 100 million tokens, RUPX is designed for optimal distribution and utility. It&apos;s not just a cryptocurrency; it&apos;s a key that unlocks a world of decentralized financial services tailored for South Asia.",
    icon: CoinsIcon,
  },
  {
    title: "Security & Compliance",
    content: "We prioritize the security of our users and their assets. Rupaya employs state-of-the-art security measures and adheres to best practices in blockchain security. We&apos;re also committed to regulatory compliance, working closely with authorities to ensure our services align with local and international financial regulations.",
    icon: ShieldIcon,
  },
]

export default function AboutPage() {
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
          className="text-center mb-16"
        >
          <motion.h1 variants={itemVariants} className={`text-4xl font-extrabold sm:text-5xl lg:text-6xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            About Rupaya
          </motion.h1>
          <motion.p variants={itemVariants} className={`mt-4 max-w-3xl mx-auto text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Empowering South Asia&apos;s financial future through innovative blockchain technology and decentralized finance solutions.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${theme === 'dark' ? 'bg-indigo-900 text-indigo-300' : 'bg-indigo-100 text-indigo-600'}`}>
                    <section.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{section.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 text-center"
        >
          <motion.h2 variants={itemVariants} className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Join the Rupaya Revolution
          </motion.h2>
          <motion.p variants={itemVariants} className={`mb-8 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Be part of the movement that&apos;s reshaping South Asia&apos;s financial landscape. Whether you&apos;re an investor, developer, or simply curious about decentralized finance, there&apos;s a place for you in the Rupaya ecosystem.
          </motion.p>
          <motion.div variants={itemVariants} className="space-x-4">
            <Button asChild className="px-6 py-3 text-lg">
              <Link href="/whitepaper">Read Our Whitepaper</Link>
            </Button>
            <Button asChild className="px-6 py-3 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/80">
              <Link href="/join">Join Our Community</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}