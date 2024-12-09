'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { ThemeToggle } from '@/components/ThemeToggle'
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState, useCallback } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import { useScroll } from 'framer-motion'

// Define our own Route type for internal navigation
type AppRoute = 
  | '/' 
  | '/about' 
  | '/tokenomics' 
  | '/roadmap' 
  | '/team' 
  | '/whitepaper'
  | '/join'  // Add any other internal routes you have

type NavItem = {
  href: string
  label: string
  external?: boolean
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/tokenomics', label: 'Tokenomics' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/team', label: 'Team' },
  { href: '/whitepaper', label: 'Whitepaper' },
  { href: 'https://faucet.rupaya.io', label: 'Faucet', external: true },
  { href: 'https://swap.rupaya.io', label: 'Swap', external: true },
  { href: 'https://app.rupaya.io', label: 'RupayaFi', external: true },
]

export default function Header() {
  const pathname = usePathname()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 0))
  }, [scrollY])

  const logoSrc = mounted && theme === 'dark' ? '/rupayalogo.svg' : '/rupayalogodark.svg'

  const renderNavItems = useCallback(() => (
    navItems.map((item) => (
      <NavigationMenuItem key={item.href.toString()}>
        {item.external ? (
          <a
            href={item.href}
            className={cn(
              "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ) : (
          <Link
            href={item.href as Readonly<AppRoute>}
            className={cn(
              "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
              pathname === item.href ? "bg-accent" : ""
            )}
          >
            {item.label}
          </Link>
        )}
      </NavigationMenuItem>
    ))
  ), [pathname])

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav role="navigation" aria-label="Main menu">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              {mounted && (
                <Image 
                  src={logoSrc}
                  alt="Rupaya Logo" 
                  width={24} 
                  height={24} 
                />
              )}
              <span className="hidden font-bold sm:inline-block">Rupaya</span>
            </Link>
            {isDesktop && (
              <NavigationMenu>
                <NavigationMenuList>
                  {renderNavItems()}
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>
          {!isDesktop && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href="/" className="flex items-center space-x-2">
                  {mounted && (
                    <Image 
                      src={logoSrc}
                      alt="Rupaya Logo" 
                      width={24} 
                      height={24} 
                    />
                  )}
                  <span className="font-bold">Rupaya</span>
                </Link>
                <nav className="flex flex-col gap-4 mt-4">
                  {navItems.map((item) => (
                    item.external ? (
                      <a
                        key={item.href.toString()}
                        href={item.href}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary",
                          "text-muted-foreground"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href.toString()}
                        href={item.href as Readonly<AppRoute>}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary",
                          pathname === item.href ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button asChild className="w-full md:w-auto md:hidden">
                <Link href="/whitepaper">Whitepaper</Link>
              </Button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  )
}