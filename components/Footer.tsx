'use client'

import React from 'react';
import Link from 'next/link';
import type { Route } from 'next';
import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { navigation } from '@/config/footer';

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/rupayacoin', icon: FaTwitter },
  { name: 'Telegram', href: 'https://t.me/rupayacoin', icon: FaTelegram },
  { name: 'GitHub', href: 'https://github.com/rupayaproject', icon: FaGithub },
  { name: 'Discord', href: 'https://discord.gg/cfbNWdThpy', icon: FaDiscord },
];

// Define the FooterLink type
type FooterLink = {
  name: string;
  href: `/${string}`; // This ensures href starts with '/'
}

type FooterSection = {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
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
    <footer className="mt-32 border-t border-gray-200">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 pt-16">
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold">{section.title}</h3>
              <ul role="list" className="mt-4 space-y-1.5">
                {section.links.map((item) => (
                  <li key={item.name}>
                    {item.href.startsWith('http') ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link href={item.href as Route}>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-muted-foreground hover:text-foreground"
                        >
                          {item.name}
                        </Button>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 pb-12 mt-16">
          <div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <Logo className="h-4 w-4 dark:invert" />
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Rupaya. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;