import React from 'react'
import ThemeSwitch from '../theme-switch/theme-switch/ThemeSwitch'
import Links from '../links/LinksNavbar'
import Link from 'next/link'
import BurgerMenu from '../burger/BurgerMenu'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'

const Navbar = async () => {
    const logos = await GetContentfulData('logo')
    const teams = await GetContentfulData('allTeamsPage')

    if (!logos) {
        throw new Error('Error loading navbar logo data.')
    }
    if (!teams) {
        throw new Error('Error loading navbar team data.')
    }

    return (
        <header className="absolute w-full left-0 top-0 h-28 z-10 xl:bg-opacity-55 xl:dark:bg-opacity-40 shadow-lg bg-background-light dark:bg-background-dark">
            <nav className="h-full xl:mx-auto select-none flex justify-between">
                <div className="bg-background-light dark:bg-background-dark rounded-r-3xl w-full flex xl:justify-center items-center">
                    <Link href="/">
                        <img
                            src={`https:${logos.darkmode.fields.file.url}`}
                            alt={logos.darkmode.fields.title}
                            width={1500}
                            height={1000}
                            className="dark:block hidden max-w-[150px] w-full mx-2 h-full"
                        />
                        <img
                            src={`https:${logos.lightmode.fields.file.url}`}
                            alt={logos.lightmode.fields.title}
                            width={1500}
                            height={1000}
                            className="block dark:hidden max-w-[150px] w-full mx-2 h-full"
                        />
                    </Link>
                </div>
                <ul className="flex justify-end xl:justify-center items-center mx-6 xl:mx-10 h-full 3xl:px-50 w-full text-text-dark dark:text-text-light">
                    <li className="hidden xl:block">
                        <Links teams={teams.teams} />
                    </li>
                    <li className="hidden xl:block pl-5">
                        <ThemeSwitch />
                    </li>
                    <li className="block xl:hidden ">
                        <BurgerMenu
                            logoDarkmode={`https:${logos.darkmode.fields.file.url}`}
                            logoLightmode={`https:${logos.lightmode.fields.file.url}`}
                            teams={teams.teams}
                        />
                    </li>
                </ul>
                <ul className="hidden xl:flex font-semibold text-lg md:text-md justify-center items-center bg-background-light dark:bg-background-dark rounded-l-3xl w-full">
                    <li>
                        <button className="px-4 py-3 bg-button-light dark:bg-button-dark text-text-light dark:text-text-light rounded-full">
                            <Link href="/join" className="hover:underline">
                                Join us!
                            </Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar
