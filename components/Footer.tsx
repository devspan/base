'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/rupayacoin', icon: FaTwitter },
  { name: 'Telegram', href: 'https://t.me/rupayacoin', icon: FaTelegram },
  { name: 'GitHub', href: 'https://github.com/rupayaproject', icon: FaGithub },
  { name: 'Discord', href: 'https://discord.gg/cfbNWdThpy', icon: FaDiscord },
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
    <footer className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
              Rupaya
            </Link>
            <p className="text-base">
              Empowering South Asia through decentralized finance.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
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
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">
                    {section.title}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {section.links.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} passHref>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-muted-foreground hover:text-foreground"
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
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-base text-muted-foreground xl:text-center">
            &copy; {new Date().getFullYear()} Rupaya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;