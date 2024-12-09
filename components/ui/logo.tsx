import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn('relative', className)} {...props}>
      <Image
        src="/rupayalogo.svg"
        alt="Rupaya Logo"
        width={120}
        height={40}
        className="dark:invert"
        priority
      />
    </div>
  )
} 