'use client'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import ThemeSwitch from '../theme-switch/theme-switch/ThemeSwitch'
import {
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineLinkedin,
    AiOutlineTwitter,
    AiOutlineInstagram
} from 'react-icons/ai'

interface Logo {
    logoDarkmode: string;
    logoLightmode: string;
}

const NAVIGATION_LINKS = [
    { href: "/", text: "Home" },
    { href: "/teams", text: "Team" },
    { href: "/technical", text: "Technical" },
    { href: "/sponsors", text: "Sponsors" },
    { href: "/competitions", text: "Competitions" },
    { href: "/about", text: "About" },
    { href: "/get_in_touch", text: "Contact" },
    { href: "/join", text: "Join us!" }
]

const SOCIAL_LINKS = [
    { href: "https://www.linkedin.com/company/navierusn", Icon: AiOutlineLinkedin },
    { href: "https://www.instagram.com/navierusn/", Icon: AiOutlineInstagram },
]

const BurgerMenu = ({ logoDarkmode, logoLightmode }: Logo) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const handleNav = () => {
        setIsOpen(!isOpen)
    }

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <div>
            <div onClick={handleNav} className="text-white">
                <AiOutlineMenu size={40} />
            </div>
            <div
                ref={menuRef}
                className={
                    isOpen
                        ? 'fixed right-0 top-0 w-[70%] lg:hidden bg-foreground-light dark:bg-foreground-dark shadow-2xl p-5 ease-in duration-500 z-10'
                        : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'
                }
            >
                <div className="flex w-full items-center justify-between">
                    <div className="flex justify-center">
                        <Link href="/">
                            <img
                                src={logoDarkmode}
                                alt="Navier logo"
                                width={150}
                                height={100}
                                className="dark:block hidden"
                            />
                            <img
                                src={logoLightmode}
                                alt="Navier logo"
                                width={150}
                                height={100}
                                className="block dark:hidden"
                            />
                        </Link>
                    </div>

                    <div onClick={handleNav} className="cursor-pointer text-white">
                        <AiOutlineClose size={40} />
                    </div>
                </div>
                <div className="flex-col py-4 text-xl">
                    <ul className="text-text-dark dark:text-text-light font-semibold">
                        {NAVIGATION_LINKS.map((link) => (
                            <li
                                key={link.href}
                                onClick={() => setIsOpen(false)}
                                className="py-3 cursor-pointer"
                            >
                                <Link href={link.href} className="hover:underline">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <ThemeSwitch />
                    </div>
                    <div className="flex gap-4 items-center">
                        {SOCIAL_LINKS.map(({ href, Icon }) => (
                            <Link key={href} href={href}>
                                <Icon size={40} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu