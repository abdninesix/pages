"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({link}) => {

    const pathName = usePathname()

  return (
    <Link className={`rounded-lg p-1 hover:bg-red-600 duration-200 hover:text-white ${pathName===link.url && "bg-red-600 text-white"}`} href={link.url}>{link.title}</Link>
  )
}

export default NavLink