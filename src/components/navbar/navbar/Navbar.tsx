import React from 'react'
import ThemeSwitch from '../theme-switch/theme-switch/ThemeSwitch'
import Links from '../links/LinksNavbar'
import Link from 'next/link'
import Image from 'next/image'
import BurgerMenu from '../burger/BurgerMenu'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'

const Navbar = async () => {
    const logos = await GetContentfulData('logo')

    return (
        <header>
            <nav className="w-full select-none bg-foreground-light py-5 flex justify-between px-3 lg:px-10 dark:bg-foreground-dark">
                <Link href="/">
                    <Image
                        src={`https:${logos.fields.darkmode.fields.file.url}`}
                        alt={logos.fields.darkmode.fields.title}
                        width={1500}
                        height={1000}
                        priority={true}
                        className="dark:block hidden max-w-[150px]"
                    />
                    <Image
                        src={`https:${logos.fields.lightmode.fields.file.url}`}
                        alt={logos.fields.lightmode.fields.title}
                        width={1500}
                        height={1000}
                        priority={true}
                        className="block dark:hidden max-w-[150px]"
                    />
                </Link>
                <ul className="flex items-center gap-10">
                    <li className="hidden lg:block">
                        <Links />
                    </li>
                    <li className="hidden lg:block">
                        <ThemeSwitch />
                    </li>
                    <li className="block lg:hidden">
                        <BurgerMenu
                            logoDarkmode={`https:${logos.fields.darkmode.fields.file.url}`}
                            logoLightmode={`https:${logos.fields.lightmode.fields.file.url}`}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
