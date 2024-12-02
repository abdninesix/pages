"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({ link }) => {

  const pathName = usePathname()

  return (
    <Link className='relative text-lg rounded-md p-1 group' href={link.url}>
      {link.title}
      <div className={`duration-100 rounded-tl-full rounded-tr-full absolute bottom-0 right-0 left-0 bg-mytheme w-0 h-1 group-hover:w-full group-hover:bg-mytheme ${pathName === link.url && "bg-mytheme w-full"}`} />
    </Link>
  )
}

export default NavLink