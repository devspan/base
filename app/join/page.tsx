'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaTwitter, FaTelegram, FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa'

const communityLinks = [
  { name: 'Twitter', href: 'https://twitter.com/rupayacoin', icon: FaTwitter, color: 'text-blue-400' },
  { name: 'Telegram', href: 'https://t.me/rupayacoin', icon: FaTelegram, color: 'text-blue-500' },
  { name: 'GitHub', href: 'https://github.com/rupayaproject', icon: FaGithub, color: 'text-gray-700 dark:text-gray-300' },
  { name: 'Discord', href: 'https://discord.gg/cfbNWdThpy', icon: FaDiscord, color: 'text-indigo-500' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/rupaya', icon: FaLinkedin, color: 'text-blue-600' },
]

export default function JoinCommunityPage() {
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
              Join the Rupaya Community
            </h1>
            <p className={`mt-4 text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Connect with us and be part of the financial revolution in South Asia
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {communityLinks.map((link) => (
                <Card key={link.name} className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <link.icon className={`h-6 w-6 ${link.color}`} />
                      <span>{link.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-end">
                    <Button asChild className="w-full">
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        Join on {link.name}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Subscribe to our newsletter for the latest updates, announcements, and community events.
                </p>
                <Button className="w-full">Subscribe to Newsletter</Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  We're committed to fostering a welcoming and inclusive community. Please review our community guidelines to ensure a positive experience for all members.
                </p>
                <Button variant="outline" className="w-full">Read Community Guidelines</Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}