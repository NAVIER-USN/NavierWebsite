'use client'
import React from 'react'
import Link from 'next/link'
import ThemeSwitch from '../theme-switch/theme-switch/ThemeSwitch'
import { AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'

const NAVIGATION_LINKS = [
    { href: "/", text: "Home" },
    { href: "/teams", text: "Team" },
    { href: "/technical", text: "Technical" },
    { href: "/sponsors", text: "Sponsors" },
    { href: "/competitions", text: "Competitions" },
    { href: "/about", text: "About" },
    { href: "/get_in_touch", text: "Contact" }
] as const

const SOCIAL_LINKS = [
    { href: "https://www.linkedin.com/company/navierusn", icon: AiOutlineLinkedin },
    { href: "https://www.instagram.com/navierusn/", icon: AiOutlineInstagram },
] as const

const Links = () => {
    return (
        <div className="flex items-center space-x-6">
            
            <div className="flex items-center space-x-4">
                {NAVIGATION_LINKS.map((link) => (
                    <Link 
                        key={link.href} 
                        href={link.href} 
                        className="relative py-2 text-[#e5e7eb] hover:text-[#94a3b8] transition-colors duration-200 group text-sm font-medium"
                    >
                        <span className="relative">
                            {link.text}
                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#C58940] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                        </span>
                    </Link>
                ))}
            </div>

           
            <div className="flex items-center space-x-2">
                {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
                    <Link 
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e5e7eb] hover:text-[#94a3b8] transition-colors duration-200"
                    >
                        <Icon size={25} />
                    </Link>
                ))}
                
                <div className="flex items-center space-x-2">
                    <ThemeSwitch />
                </div>
            </div>

            
            <div className="flex items-center">
                <Link href="/join">
                    <button className="px-5 py-2.5 bg-[#C58940] hover:bg-[#C58940]/90 text-[#e5e7eb] rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg text-sm font-medium">
                        Join us!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Links