import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...props }: LogoProps) {
  const { theme } = useTheme()

  return (
    <div className={cn('relative', className)} {...props}>
      <Image
        src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
        alt="Rupaya Logo"
        width={120}
        height={40}
        className="h-auto w-auto"
        priority
      />
    </div>
  )
} 