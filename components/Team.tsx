'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useTheme } from 'next-themes';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Aasim',
    role: 'Founder',
    image: '/images/team/aasim.jpg',
    bio: 'Blockchain enthusiast with a vision for financial inclusion in South Asia. Aasim has over 10 years of experience in fintech and is passionate about leveraging technology to solve real-world problems.',
    linkedin: 'https://linkedin.com/in/aasim',
    twitter: 'https://twitter.com/aasim',
    github: 'https://github.com/aasim'
  },
  // Add more actual team members here
];

const placeholderMembers: TeamMember[] = [
  {
    name: 'This could be you',
    role: 'Join Our Team',
    bio: "We're always looking for passionate individuals to join our mission. If you're excited about blockchain and financial inclusion, we want to hear from you!",
  },
  {
    name: 'This could be you',
    role: 'Join Our Team',
    bio: 'Help us revolutionize finance in South Asia. We offer a dynamic work environment and the opportunity to make a real impact.',
  },
];

const TeamMember: React.FC<{ member: TeamMember; isPlaceholder?: boolean }> = ({ member, isPlaceholder = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="overflow-hidden">
          <CardContent className="p-6">
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
            <div className="text-center">
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3">{member.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{member.bio}</p>
              {!isPlaceholder && (
                <Button variant="outline" onClick={() => setIsOpen(true)}>View Profile</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{member.name}</DialogTitle>
            <DialogDescription>{member.role}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{member.bio}</p>
            <div className="flex justify-center space-x-4">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="h-5 w-5" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-5 w-5" />
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <FaGithub className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Team: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-12 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Our Team</h2>
          <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
            Meet the Visionaries Behind Rupaya
          </p>
          <p className={`mt-4 max-w-2xl text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} lg:mx-auto`}>
            Our diverse team of experts is committed to revolutionizing finance in South Asia.
          </p>
        </div>

        <motion.div 
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TeamMember member={member} />
                </motion.div>
              ))}
              {placeholderMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: (teamMembers.length + index) * 0.1 }}
                >
                  <TeamMember member={member} isPlaceholder={true} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;