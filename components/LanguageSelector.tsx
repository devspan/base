'use client'

import { useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'ur', name: 'اردو' },
  { code: 'bn', name: 'বাংলা' },
]

export function LanguageSelector() {
  const router = useRouter()

  return (
    <Select onValueChange={(value) => router.push(`/${value}`)}>
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