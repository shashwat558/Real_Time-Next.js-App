import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

 
const NavBar = ({children}:HeaderProps) => {
  return (
    <div className="headers
    ">
        <Link href={'/'} className='md:flex-1'>
          <Image 
          src='/assets/icons/logo.svg'
          alt="Logo"
          width={120}
          height={32}
          className='hidden md:block'
          />
          <Image 
          src='/assets/icons/logo-icon.svg'
          alt='Logo'
          width={32}
          height={32}
          className='md:hidden mr-2'
          
          />
          
        </Link>
        {children}
    </div>
  )
}

export default NavBar