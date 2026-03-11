import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'form'
  isLoading?: boolean
  href?: string
}

export const buttonVariants = ({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'form'
  className?: string
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 overflow-x-clip rounded-full font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sp-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sp-bg-dark active:scale-95 disabled:pointer-events-none disabled:opacity-50'

  const variants = {
    primary:
      'group relative bg-sp-accent text-white shadow-[0_4px_20px_-4px_rgba(255,112,67,0.4)] hover:-translate-y-1 hover:bg-sp-accent-dark hover:shadow-[0_8px_30px_-4px_rgba(255,112,67,0.6)]',
    secondary:
      'border border-sp-border-dark bg-sp-surface-subtle text-white shadow-lg hover:-translate-y-1 hover:bg-sp-surface-hover hover:border-sp-border-dark',
    outline:
      'border border-sp-border-dark bg-transparent text-sp-text-muted hover:text-sp-accent hover:border-sp-accent',
    ghost: 'bg-transparent text-sp-text-muted hover:bg-sp-surface-subtle hover:text-white',
  }

  const sizes = {
    sm: 'px-5 md:px-6 py-2.5 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-5 md:px-10 py-5 text-lg',
    form: 'w-full px-8 py-5 text-lg',
  }

  return cn(baseStyles, variants[variant], sizes[size], className)
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', isLoading, children, href, disabled, ...props },
    ref
  ) => {
    const classes = buttonVariants({ variant, size, className })

    const InnerContent = (
      <>
        {variant === 'primary' && (
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
        )}
        {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </>
    )

    if (href) {
      return (
        <Link href={href} className={classes} ref={ref as React.ForwardedRef<HTMLAnchorElement>} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {InnerContent}
        </Link>
      )
    }

    return (
      <button className={classes} ref={ref as React.ForwardedRef<HTMLButtonElement>} disabled={isLoading || disabled} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {InnerContent}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }
