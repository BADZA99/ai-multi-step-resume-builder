import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import Image from 'next/image'

export default function TopNav() {
  return (
    <nav
    className='flex justify-between items-center p-1 shadow '
    >
      <Link href={'/'}>
      <Image
        src='/logo.svg'
        alt='logo'
        width={40}
        height={40}
        className='cursor-pointer'
      />
      </Link>
      <ModeToggle />
    </nav>
  )
}
