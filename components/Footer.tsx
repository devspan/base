'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/rupayacoin', icon: FaTwitter },
  { name: 'Telegram', href: 'https://t.me/rupayacoin', icon: FaTelegram },
  { name: 'GitHub', href: 'https://github.com/rupayaproject', icon: FaGithub },
  { name: 'Discord', href: 'https://discord.gg/rupaya', icon: FaDiscord },
];

const footerLinks = [
  {
    title: 'Solutions',
    links: [
      { name: 'DeFi', href: '/defi' },
      { name: 'Stablecoins', href: '/stablecoins' },
      { name: 'Governance', href: '/governance' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Documentation', href: '/documentation' },
      { name: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
    ],
  },
];

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              src="/logo.png"
              alt="Rupaya"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-base">
              Empowering South Asia through decentralized finance.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            {footerLinks.map((section) => (
              <div key={section.title} className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold tracking-wider uppercase">
                    {section.title}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {section.links.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} passHref>
                          <Button
                            variant="link"
                            className={`p-0 h-auto ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                          >
                            {item.name}
                          </Button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`mt-12 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} pt-8`}>
          <p className="text-base xl:text-center">
            &copy; {new Date().getFullYear()} Rupaya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;