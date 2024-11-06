'use client'

import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext';

const ThemeButton = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme} className='h-8 w-8 rounded-full cursor-pointer bg-slate-700 dark:bg-white duration-700'></div>
  )
}

export default ThemeButton