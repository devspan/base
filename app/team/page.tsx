'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaLinkedin, FaTwitter, FaGithub, FaDiscord, FaTelegram } from 'react-icons/fa'
import { Skeleton } from "@/components/ui/skeleton"

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  discord?: string;
  telegram?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Aasim",
    role: "Founder",
    image: "/images/team/aasim.jpeg",
    bio: "Blockchain enthusiast with a vision for financial inclusion in South Asia. Aasim has over 10 years of experience in fintech and is passionate about leveraging technology to solve real-world problems.",
    linkedin: "https://www.linkedin.com/in/aasim-khan/",
    twitter: "https://twitter.com/satoshiwho",
    github: "https://github.com/mo-bay",
    discord: "mobay_",
    telegram: "@beyzzzz"
  },
]

const placeholderMembers: TeamMember[] = [
  {
    name: "This could be you",
    role: "Join Our Team",
    bio: "We're always looking for passionate individuals to join our mission. If you're excited about blockchain and financial inclusion, we want to hear from you!",
  },
  {
    name: "This could be you",
    role: "Join Our Team",
    bio: "Help us revolutionize finance in South Asia. We offer a dynamic work environment and the opportunity to make a real impact.",
  },
]

const openPositions = [
  "Senior Blockchain Developer",
  "UX/UI Designer",
  "Community Manager",
  "Marketing Specialist"
]

const TeamMemberCard: React.FC<{ member: TeamMember; isPlaceholder?: boolean }> = ({ member, isPlaceholder = false }) => {
  const { theme } = useTheme()

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader className="p-6">
        <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden mb-4">
          {isPlaceholder ? (
            <Skeleton className="h-full w-full rounded-full" />
          ) : member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <Skeleton className="h-full w-full rounded-full" />
          )}
        </div>
        <CardTitle className="text-center">{member.name}</CardTitle>
        <CardDescription className="text-center">{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col justify-between">
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-center`}>{member.bio}</p>
        {!isPlaceholder && (
          <div className="mt-4 flex justify-center space-x-3 flex-wrap">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2">
                <FaLinkedin className="h-6 w-6 text-blue-500" />
              </a>
            )}
            {member.twitter && (
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="mt-2">
                <FaTwitter className="h-6 w-6 text-blue-400" />
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="mt-2">
                <FaGithub className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
            )}
            {member.discord && (
              <a href={`https://discord.com/users/${member.discord}`} target="_blank" rel="noopener noreferrer" className="mt-2">
                <FaDiscord className="h-6 w-6 text-indigo-500" />
              </a>
            )}
            {member.telegram && (
              <a href={`https://t.me/${member.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="mt-2">
                <FaTelegram className="h-6 w-6 text-blue-300" />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function TeamPage() {
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
              Meet Our Team
            </h1>
            <p className={`mt-4 text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              The visionaries behind Rupaya's mission to revolutionize finance in South Asia
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={itemVariants}>
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
            {placeholderMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TeamMemberCard member={member} isPlaceholder={true} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16">
            <h2 className={`text-3xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Join Our Team
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Open Positions</CardTitle>
                <CardDescription>We're always looking for talented individuals to join our mission</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {openPositions.map((position, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                      <span>{position}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">View All Openings</Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}