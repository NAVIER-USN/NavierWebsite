import React from 'react'
import ThemeSwitch from '../theme-switch/theme-switch/ThemeSwitch'
import Links from '../links/LinksNavbar'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '../../../../lib/contentful/client'
import BurgerMenu from '../burger/BurgerMenu'

const Navbar = async () => {
    let logos = []

    //Fetching logos
    try {
        const response = await client.getEntries({ content_type: 'logo' })
        logos = response.items
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }

    return (
        <header>
            <nav className="w-full select-none border-solid border-b-2 border-gray-300 bg-foreground-light py-5 flex justify-between px-3 md:px-10 dark:bg-foreground-dark dark:border-0">
                <Link href="/">
                    <Image
                        src={`https:${logos[0].fields.darkmode.fields.file.url}`}
                        alt={logos[0].fields.darkmode.fields.title}
                        width={1500}
                        height={1000}
                        priority={true}
                        className="dark:block hidden max-w-[150px]"
                    />
                    <Image
                        src={`https:${logos[0].fields.lightmode.fields.file.url}`}
                        alt={logos[0].fields.lightmode.fields.title}
                        width={1500}
                        height={1000}
                        priority={true}
                        className="block dark:hidden max-w-[150px]"
                    />
                </Link>
                <ul className="flex items-center gap-10">
                    <li className="hidden md:block">
                        <Links />
                    </li>
                    <li className="hidden md:block">
                        <ThemeSwitch />
                    </li>
                    <li className="block md:hidden">
                        <BurgerMenu
                            logoDarkmode={`https:${logos[0].fields.darkmode.fields.file.url}`}
                            logoLightmode={`https:${logos[0].fields.lightmode.fields.file.url}`}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
