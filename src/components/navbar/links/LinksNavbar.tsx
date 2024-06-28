'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa'
import { Fields, Teams } from './types'

const Links = ({ teams }: Teams) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const sortedTeams = teams.sort((a: Fields, b: Fields) => {
        const yearA = parseInt(a.fields.title.split('-')[1], 10)
        const yearB = parseInt(b.fields.title.split('-')[1], 10)
        return yearB - yearA
    })

    const closeDropdown = () => setIsOpen(false)

    return (
        <div className="flex md:space-x-6 2xl:space-x-10 font-semibold text-lg md:text-md">
            <Link href="/" className="hover:underline">
                Home
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
                    <div className="absolute left-0 mt-2 bg-foreground-light dark:bg-foreground-dark shadow-lg rounded-lg z-40 border-gray-500 border-[1px] overflow-hidden">
                        <Link
                            href="/teams"
                            className="block w-40 px-4 py-2 text-sm bg-background-light dark:bg-background-dark hover:bg-foreground-light hover:dark:bg-foreground-dark text-center border-b-2-black-200"
                        >
                            View all teams
                        </Link>
                        {sortedTeams.map((team: Fields, i: number) => (
                            <Link
                                key={i}
                                href={`/teams/${team.fields.title}`}
                                className="block w-40 px-4 py-2 text-sm bg-background-light dark:bg-background-dark hover:bg-foreground-light hover:dark:bg-foreground-dark text-center"
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
            <Link href="/technical" className="hover:underline">
                Technical
            </Link>
            <Link href="/get_in_touch" className="hover:underline">
                Contact
            </Link>

            <Link href="/competitions" className="hover:underline">
                Competitions
            </Link>

            <Link href="/about" className="hover:underline">
                About
            </Link>
        </div>
    )
}

export default Links
