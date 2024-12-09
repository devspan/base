'use client'

import { useParams, useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import type { Route } from 'next'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'ur', name: 'اردو' },
]

export function LanguageSwitcher() {
  const router = useRouter()
  const params = useParams()
  const currentLocale = params.locale as string || 'en'

  const handleLanguageChange = (newLocale: string) => {
    // Get the current pathname segments
    const segments = window.location.pathname.split('/')
    // Replace the locale segment or add it if it doesn't exist
    if (segments[1] === currentLocale) {
      segments[1] = newLocale
    } else {
      segments.splice(1, 0, newLocale)
    }
    // Join the segments back together and ensure it's a valid route
    const newPath = segments.join('/') as Route
    router.push(newPath)
  }

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
} 