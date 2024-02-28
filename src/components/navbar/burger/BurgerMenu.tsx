'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeSwitch from '@/components/theme-switch/ThemeSwitch'
import {
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineFacebook,
    AiOutlineTwitter,
    AiOutlineInstagram
} from 'react-icons/ai'

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div onClick={handleNav} className="">
                <AiOutlineMenu size={40} />
            </div>
            <div
                className={
                    isOpen
                        ? 'fixed right-0 top-0 w-[65%] md:hidden bg-foreground-light dark:bg-foreground-dark shadow-xl p-5 ease-in duration-500 z-10'
                        : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'
                }
            >
                <div className="flex w-full items-center justify-between">
                    <div>
                        <ThemeSwitch />
                    </div>
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={40} />
                    </div>
                </div>
                <div className="flex-col py-4 text-xl">
                    <ul>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-4 cursor-pointer"
                        >
                            <Link
                                href="/"
                                className="text-text-dark dark:text-text-light hover:underline"
                            >
                                Home
                            </Link>
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-4 cursor-pointer"
                        >
                            <Link
                                href="/members"
                                className="text-text-dark dark:text-text-light hover:underline"
                            >
                                Members
                            </Link>
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-4 cursor-pointer"
                        >
                            <Link
                                href="/sponsors"
                                className="text-text-dark dark:text-text-light hover:underline"
                            >
                                Sponsors
                            </Link>
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-4 cursor-pointer"
                        >
                            <Link
                                href="/contact_us"
                                className="text-text-dark dark:text-text-light hover:underline"
                            >
                                Contact
                            </Link>
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-4 cursor-pointer"
                        >
                            <Link
                                href="/join"
                                className="text-text-dark dark:text-text-light hover:underline"
                            >
                                Join
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row justify-around pt-10 items-center">
                    <AiOutlineFacebook size={40} />
                    <AiOutlineTwitter size={40} />
                    <AiOutlineInstagram size={40} />
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu
