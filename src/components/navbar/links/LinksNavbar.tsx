'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa'

const Links = ({ teams }) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownRef])

    const sortedTeams = teams.sort((a, b) => {
        const yearA = parseInt(a.fields.title.split('-')[1])
        const yearB = parseInt(b.fields.title.split('-')[1])
        return yearB - yearA
    })

    const closeDropdown = () => setIsOpen(false)

    return (
        <div className="flex space-x-4 font-semibold text-lg md:text-md text-text-dark dark:text-text-light">
            <Link href="/" className="hover:underline">
                Home
            </Link>
            <Link href="/join" className="hover:underline">
                Join
            </Link>

            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center space-x-1 hover:underline focus:outline-none"
                >
                    <span>Teams</span>
                    <FaAngleDown />
                </button>
                {isOpen && (
                    <div className="absolute left-0 mt-2 bg-foreground-light dark:bg-foreground-dark shadow-lg rounded-lg z-40 border-gray-500 border-[1px]">
                        {sortedTeams.map((team, i) => (
                            <Link
                                key={i}
                                href={`/team/${team.fields.title}`}
                                className="block w-32 px-4 py-2 text-sm hover:bg-background-light hover:dark:bg-background-dark rounded-lg text-center"
                                onClick={closeDropdown}
                            >
                                {team.fields.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <Link href="/sponsors" className="hover:underline">
                Sponsors
            </Link>
            <Link href="/model" className="hover:underline">
                Model
            </Link>
            <Link href="/get_in_touch" className="hover:underline">
                Get in Touch
            </Link>
            <Link href="/about" className="hover:underline">
                About
            </Link>
        </div>
    )
}

export default Links
