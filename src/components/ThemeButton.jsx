'use client'

import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext';

const ThemeButton = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='items-center flex'>
      <div onClick={toggleTheme} className='h-6 w-6 flex-none rounded-full cursor-pointer bg-yellow-400 dark:bg-yellow-200 duration-500'>
        <div className='h-0 w-0 dark:h-5 dark:w-5 rounded-full bg-slate-900 duration-200'/>
      </div>
    </div>
    
  )
}

export default ThemeButton