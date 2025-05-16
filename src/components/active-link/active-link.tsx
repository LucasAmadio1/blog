import { cn } from '@/lib/utils'
import Link, { type LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import type React from 'react'

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export function ActiveLink({ children, href, ...props }: ActiveLinkProps) {
  const router = useRouter()

  const isCurrentPath = router.pathname === href || router.asPath === props.as
  return (
    <Link
      href={href}
      className={cn(
        'text-action-sm transition-colors duration-150 hover:text-blue-200',
        isCurrentPath ? 'text-blue-500' : 'text-gray-100'
      )}
    >
      {children}
    </Link>
  )
}
