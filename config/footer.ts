import type { Route } from 'next'

type NavigationLink = {
  name: string;
  href: Route | string;
}

type NavigationSection = {
  title: string;
  links: NavigationLink[];
}

export const navigation: NavigationSection[] = [
  {
    title: 'Products',
    links: [
      { name: 'Wallet', href: '/wallet' as Route },
      { name: 'Exchange', href: '/exchange' as Route },
      { name: 'Staking', href: '/staking' as Route },
      { name: 'Bridge', href: '/bridge' as Route },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: 'https://docs.rupaya.io' },
      { name: 'Whitepaper', href: '/whitepaper.pdf' as Route },
      { name: 'Blog', href: '/blog' as Route },
      { name: 'FAQ', href: '/faq' as Route },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' as Route },
      { name: 'Team', href: '/team' as Route },
      { name: 'Careers', href: '/careers' as Route },
      { name: 'Contact', href: '/contact' as Route },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '/privacy' as Route },
      { name: 'Terms', href: '/terms' as Route },
      { name: 'Cookie Policy', href: '/cookies' as Route },
    ],
  },
] 