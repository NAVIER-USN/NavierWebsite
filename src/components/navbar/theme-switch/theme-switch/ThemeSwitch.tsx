'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import { useTheme } from 'next-themes'
import React from 'react'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const handleIconClick = (theme: 'light' | 'dark') => {
    sendGTMEvent({ 
      event: 'theme_switch', 
      theme_selected: theme 
    })
    setTheme(theme)
  }

  const iconProps = {
    size: 25,
    className: `
      cursor-pointer 
      text-white 
      transition-transform 
      duration-200 
      hover:scale-110 
      active:scale-95
    `
  }

  if (resolvedTheme === 'dark') {
    return (
      <IoMdSunny 
        {...iconProps}
        onClick={() => handleIconClick('light')}
        aria-label="Switch to Light Mode"
      />
    )
  }

  return (
    <IoMdMoon 
      {...iconProps}
      onClick={() => handleIconClick('dark')}
      aria-label="Switch to Dark Mode"
    />
  )
}

export default ThemeSwitch