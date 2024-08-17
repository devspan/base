'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Skeleton } from "@/components/ui/skeleton";

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
    bio: 'Blockchain enthusiast with a vision for financial inclusion in South Asia.',
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
    bio: "We're always looking for passionate individuals to join our mission.",
  },
  {
    name: 'This could be you',
    role: 'Join Our Team',
    bio: 'Help us revolutionize finance in South Asia.',
  },
];

const TeamMember: React.FC<{ member: TeamMember; isPlaceholder?: boolean }> = ({ member, isPlaceholder = false }) => (
  <motion.div
    className="bg-gray-50 pt-6 px-6 pb-8 rounded-lg shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
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
      <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
      <p className="text-sm text-indigo-600 mb-3">{member.role}</p>
      <p className="text-sm text-gray-500 mb-4">{member.bio}</p>
      {!isPlaceholder && member.linkedin && member.twitter && member.github && (
        <div className="flex justify-center space-x-4">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-5 w-5" />
          </a>
          <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-5 w-5" />
          </a>
        </div>
      )}
    </div>
  </motion.div>
);

const Team: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet the Visionaries Behind Rupaya
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our diverse team of experts is committed to revolutionizing finance in South Asia.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
            {placeholderMembers.map((member, index) => (
              <TeamMember key={index} member={member} isPlaceholder={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;