import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
}

export function Badge({ children, className, variant = 'primary' }: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase'
  
  const variants = {
    primary: 'bg-sp-accent/10 text-sp-accent border border-sp-accent/20',
    secondary: 'bg-white/10 text-white/90 border border-white/20',
    outline: 'bg-transparent text-foreground/70 border border-white/10',
  }

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  )
}
