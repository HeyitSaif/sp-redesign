'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImageWithShimmerProps {
  src: string
  alt: string
  aspectRatio?: string // e.g. '16/9' or 'aspect-video'
  className?: string
  wrapperClassName?: string
  priority?: boolean
  width?: number
  height?: number
  fill?: boolean
}

export function ImageWithShimmer({
  src,
  alt,
  aspectRatio = 'aspect-video',
  className,
  wrapperClassName,
  priority = false,
  width,
  height,
  fill = true, // default to true since we usually use it with aspect-ratio wrappers
}: ImageWithShimmerProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Use next/image for internal paths (/images/...) or configured remote patterns
  const isInternal = src.startsWith('/')
  const isRemoteConfigured = src.includes('solutionplus.io')
  const canUseNextImage = isInternal || isRemoteConfigured

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        !width && !height && fill && aspectRatio,
        wrapperClassName
      )}
    >
      {/* Shimmer Placeholder */}
      <div
        className={cn(
          'absolute inset-0 bg-white/5',
          !isLoaded &&
            'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent'
        )}
      />

      {/* Image */}
      {canUseNextImage && (fill || (width && height)) ? (
        <Image
          src={src}
          alt={alt}
          priority={priority}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          className={cn(
            'object-cover transition-opacity duration-700',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          onLoad={() => setIsLoaded(true)}
        />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-700',
            fill && 'absolute inset-0',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  )
}
