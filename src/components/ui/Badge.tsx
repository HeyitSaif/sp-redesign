import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
}

export function Badge({ children, className, variant = 'primary' }: BadgeProps) {
  const baseStyles =
    'inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase'

  const variants = {
    primary: 'bg-sp-accent/10 text-sp-accent border border-sp-accent/20',
    secondary: 'bg-sp-surface-subtle text-white border border-sp-border-dark',
    outline: 'bg-transparent text-sp-text-muted border border-sp-border-dark',
  }

  return <span className={cn(baseStyles, variants[variant], className)}>{children}</span>
}
