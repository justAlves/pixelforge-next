"use client";

import React, { useEffect } from 'react'
import { ModeToggle } from './toggle-mode'
import Image from 'next/image'
import Logo from '@/assets/images/logo.svg'
import LogoDark from '@/assets/images/logo-dark.svg'
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { theme, systemTheme } = useTheme()
  const pathname = usePathname()
  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  if(pathname.includes('/app')) return null

  return (
    <div
      className="flex justify-between items-center w-full px-8 py-8 bg-background/90"
    >
      <Image
        key={isDark ? 'dark' : 'light'}
        src={isDark ? LogoDark : Logo}
        alt="Logo"
        width={300}
        height={100}
      />
      <ModeToggle />
    </div>
  )
}
