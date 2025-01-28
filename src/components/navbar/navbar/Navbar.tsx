import React from 'react'
import ThemeSwitch from '../theme-switch/theme-switch/ThemeSwitch'
import Links from '../links/LinksNavbar'
import Link from 'next/link'
import BurgerMenu from '../burger/BurgerMenu'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'

const Navbar = async () => {
    const logos = await GetContentfulData('logo')

    if (!logos) {
        throw new Error('Error loading navbar logo data.')
    }

    return (
        <header className="fixed w-full left-0 top-0 h-20 z-50">
            <div className="absolute inset-0 bg-gradient-to-r from-[#222831] via-[#31363F] to-[#222831] backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C58940]/20 to-transparent"></div>
            </div>
            
            <nav className="relative h-full max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-full">
                    <Link href="/" className="relative flex items-center">
                        <img
                            src={`https:${logos.darkmode.fields.file.url}`}
                            alt={logos.darkmode.fields.title}
                            width={1500}
                            height={1000}
                            className="max-w-[140px] w-full transition-transform duration-200 hover:scale-105"
                        />
                    </Link>
    
                    <div className="hidden xl:flex items-center space-x-4">
                        <Links />
                    </div>
    
                    <div className="xl:hidden flex items-center space-x-4">
                        <BurgerMenu
                            logoDarkmode={`https:${logos.darkmode.fields.file.url}`}
                            logoLightmode={`https:${logos.lightmode.fields.file.url}`}
                        />
                    </div>



                </div>
            </nav>
        </header>
    )
}
export default Navbar
