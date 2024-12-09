'use client'

import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

export function LanguageSwitcher() {
  const router = useRouter()

  const switchLanguage = (locale: string) => {
    // Set the NEXT_LOCALE cookie
    Cookies.set('NEXT_LOCALE', locale)
    // Change the route to the new locale
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <select 
      onChange={(e) => switchLanguage(e.target.value)}
      value={router.locale}
    >
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
      <option value="bn">বাংলা</option>
      <option value="ur">اردو</option>
    </select>
  )
} 