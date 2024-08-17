'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

// Define the structure for team member data
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

// Team member data
const teamMembers: TeamMember[] = [
  {
    name: "Aasim",
    role: "Founder & CEO",
    image: "/images/team/aasim.jpg",
    bio: "Blockchain enthusiast with a vision for financial inclusion in South Asia. 10+ years of experience in fintech.",
    linkedin: "https://linkedin.com/in/aasim",
    twitter: "https://twitter.com/aasim",
    github: "https://github.com/aasim"
  },
  {
    name: "Sarah Khan",
    role: "CTO",
    image: "/images/team/sarah.jpg",
    bio: "Expert in blockchain architecture and smart contract development. Previously worked at Ethereum Foundation.",
    linkedin: "https://linkedin.com/in/sarahkhan",
    github: "https://github.com/sarahkhan"
  },
  {
    name: "Rahul Patel",
    role: "Head of Partnerships",
    image: "/images/team/rahul.jpg",
    bio: "Experienced in building strategic alliances in the fintech sector across South Asia.",
    linkedin: "https://linkedin.com/in/rahulpatel",
    twitter: "https://twitter.com/rahulpatel"
  },
  // Add more team members as needed
]

const openPositions = [
  "Senior Blockchain Developer",
  "UX/UI Designer",
  "Community Manager",
  "Marketing Specialist"
]

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
                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                    <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{member.bio}</p>
                    <div className="mt-4 flex space-x-4">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className="h-6 w-6 text-blue-500" />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                          <FaTwitter className="h-6 w-6 text-blue-400" />
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
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