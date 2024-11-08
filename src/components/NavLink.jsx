"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({link}) => {

    const pathName = usePathname()

  return (
    <Link className={`text-base rounded-lg p-1 hover:bg-mytheme hover:text-white ${pathName===link.url && "bg-mytheme text-white"}`} href={link.url}>{link.title}</Link>
  )
}

export default NavLink