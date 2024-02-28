import React from 'react'
import ThemeSwitch from '../theme-switch/ThemeSwitch'
import Links from './links/LinksNavbar'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '../../../lib/contentful/client'
import BurgerMenu from './burger/BurgerMenu'

const Navbar = async () => {
    let logos = []
    let logoDarkmode = ''
    let logoLightmode = ''

    //Fetching logos
    try {
        const response = await client.getEntries({ content_type: 'logo' })
        logos = response.items
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }

    //Placing logos in variables
    for (let i = 0; i < logos[0].fields.logos.length; i++) {
        if (
            logos &&
            logos[0].fields.logos[i].fields.title.toLowerCase() === 'darkmode'
        ) {
            logoDarkmode = `https:${logos[0].fields.logos[i].fields.file.url}`
        } else if (
            logos &&
            logos[0].fields.logos[i].fields.title.toLowerCase() === 'lightmode'
        ) {
            logoLightmode = `https:${logos[0].fields.logos[i].fields.file.url}`
        } else {
            console.error('Error handling logos')
        }
    }

    return (
        <header>
            <nav className="select-none border-solid border-b-2 border-gray-300 bg-foreground-light py-5 flex justify-between px-3 md:px-10 dark:bg-foreground-dark dark:border-0">
                {/* Add stylingen til link i stedet for Imagine */}
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
                <ul className="flex items-center gap-10">
                    <li className="hidden md:block">
                        <Links />
                    </li>
                    <li className="hidden md:block">
                        <ThemeSwitch />
                    </li>
                    <li className="block md:hidden">
                        <BurgerMenu
                            logoLightmode={logoLightmode}
                            logoDarkmode={logoDarkmode}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
