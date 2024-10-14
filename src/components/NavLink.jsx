"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({link}) => {

    const pathName = usePathname()

  return (
    <Link className={`rounded p-1 hover:bg-slate-700 hover:text-white ${pathName===link.url && "bg-slate-700 text-white hover:bg-pink-500"}`} href={link.url}>{link.title}</Link>
  )
}

export default NavLink