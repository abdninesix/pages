'use client'

import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext';

const ThemeButton = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme} className='h-8 w-8 flex-none rounded-full cursor-pointer bg-yellow-200 duration-700 shadow-inner shadow-orange-500'>
      <div className='h-0 w-0 dark:h-7 dark:w-7 rounded-full bg-slate-950 duration-200'/>
    </div>
  )
}

export default ThemeButton