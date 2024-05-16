'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import ThemeSwitch from '../theme-switch/theme-switch/ThemeSwitch'
import {
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineLinkedin,
    AiOutlineTwitter,
    AiOutlineInstagram
} from 'react-icons/ai'
import { Fields, Logo } from './types'

const BurgerMenu = ({ logoDarkmode, logoLightmode, teams }: Logo) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const handleNav = () => {
        setIsOpen(!isOpen)
    }

    const sortedTeams = teams.sort((a: Fields, b: Fields) => {
        const yearA = parseInt(a.fields.title.split('-')[1], 10)
        const yearB = parseInt(b.fields.title.split('-')[1], 10)
        return yearB - yearA
    })

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
            <div onClick={handleNav}>
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
                            <Image
                                src={logoDarkmode}
                                alt="Navier logo"
                                width={150}
                                height={100}
                                priority={true}
                                className="dark:block hidden"
                            />
                            <Image
                                src={logoLightmode}
                                alt="Navier logo"
                                width={150}
                                height={100}
                                priority={true}
                                className="block dark:hidden"
                            />
                        </Link>
                    </div>

                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={40} />
                    </div>
                </div>
                <div className="flex-col py-4 text-xl">
                    <ul className="text-text-dark dark:text-text-light font-semibold">
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-3 cursor-pointer"
                        >
                            <Link href="/" className=" hover:underline ">
                                Home
                            </Link>
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-3 cursor-pointer"
                        >
                            <Link href="/join" className="hover:underline">
                                Join
                            </Link>
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="pt-3 cursor-pointer"
                        >
                            <Link href="/teams" className=" hover:underline ">
                                Teams
                            </Link>
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="pb-2 pt-3 cursor-pointer"
                        >
                            {sortedTeams.map((team: Fields, i: number) => (
                                <Link
                                    key={i}
                                    href={`/team/${team.fields.title}`}
                                    className="block w-32 px-4 py-2 text-sm hover:bg-background-light hover:dark:bg-background-dark rounded-lg text-center"
                                >
                                    {team.fields.title}
                                </Link>
                            ))}
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-3 cursor-pointer"
                        >
                            <Link href="/sponsors" className="hover:underline">
                                Sponsors
                            </Link>
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-3 cursor-pointer"
                        >
                            <Link href="/technical" className="hover:underline">
                                Technical
                            </Link>
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-3 cursor-pointer"
                        >
                            <Link
                                href="/get_in_touch"
                                className="hover:underline"
                            >
                                Get in Touch
                            </Link>
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-3 cursor-pointer"
                        >
                            <Link href="/about" className="hover:underline">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <ThemeSwitch />
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link href="https://www.linkedin.com/company/navierusn">
                            <AiOutlineLinkedin size={40} />
                        </Link>
                        <Link href="https://www.instagram.com/navierusn/">
                            <AiOutlineInstagram size={40} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu
