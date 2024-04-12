'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import ThemeSwitch from '../theme-switch/theme-switch/ThemeSwitch'
import {
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineLinkedin,
    AiOutlineTwitter,
    AiOutlineInstagram
} from 'react-icons/ai'

type Logo = {
    logoDarkmode: string
    logoLightmode: string
}

const BurgerMenu = ({ logoDarkmode, logoLightmode }: Logo) => {
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
                        ? 'fixed right-0 top-0 w-[65%] lg:hidden bg-foreground-light dark:bg-foreground-dark shadow-2xl p-5 ease-in duration-500 z-10'
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
                                className="text-text-dark dark:text-text-light hover:underline "
                            >
                                Home
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
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-4 cursor-pointer"
                        >
                            <Link
                                href="/team"
                                className="text-text-dark dark:text-text-light hover:underline"
                            >
                                Team
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
                                href="/model"
                                className="text-text-dark dark:text-text-light hover:underline"
                            >
                                Model
                            </Link>
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-4 cursor-pointer"
                        >
                            <Link
                                href="/get_in_touch"
                                className="text-text-dark dark:text-text-light hover:underline"
                            >
                                Get in Touch
                            </Link>
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className="py-4 cursor-pointer"
                        >
                            <Link
                                href="/about"
                                className="text-text-dark dark:text-text-light hover:underline"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row justify-around pt-10 items-center">
                    <AiOutlineLinkedin size={40} />

                    <AiOutlineTwitter size={40} />
                    <AiOutlineInstagram size={40} />
                </div>
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
            </div>
        </div>
    )
}

export default BurgerMenu
