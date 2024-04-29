'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    const handleIconClick = (theme: 'light' | 'dark') => {
        sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })
        setIsClicked(true)
        setTheme(theme)
        setTimeout(() => setIsClicked(false), 100)
    }
    if (!mounted)
        return (
            <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                width={25}
                height={25}
                sizes="36x36"
                alt="Loading Light/Dark Toggle"
                priority={false}
                title="Loading Light/Dark Toggle"
            />
        )

    const iconClass = `cursor-pointer text-3xl transition-transform duration-100 ${
        isClicked ? 'scale-125' : 'scale-100'
    }`

    if (resolvedTheme === 'dark') {
        return (
            <IoMdSunny
                className={iconClass}
                onClick={() => handleIconClick('light')}
            />
        )
    }

    if (resolvedTheme === 'light') {
        return (
            <IoMdMoon
                className={iconClass}
                onClick={() => handleIconClick('dark')}
            />
        )
    }
}

export default ThemeSwitch
