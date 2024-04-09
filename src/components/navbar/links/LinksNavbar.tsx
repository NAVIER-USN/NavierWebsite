import React from 'react'
import Link from 'next/link'

const Links: React.FC = () => {
    return (
        <div className="flex space-x-4 text-lg md:text-md">
            <Link
                href="/"
                className="text-text-dark dark:text-text-light hover:underline "
            >
                Home
            </Link>
            <Link
                href="/join"
                className="text-text-dark dark:text-text-light hover:underline"
            >
                Join
            </Link>
            <Link
                href="/team"
                className="text-text-dark dark:text-text-light hover:underline"
            >
                Team
            </Link>
            <Link
                href="/sponsors"
                className="text-text-dark dark:text-text-light hover:underline"
            >
                Sponsors
            </Link>
            <Link
                href="/model"
                className="text-text-dark dark:text-text-light hover:underline"
            >
                Model
            </Link>
            <Link
                href="/get_in_touch"
                className="text-text-dark dark:text-text-light hover:underline"
            >
                Get in Touch
            </Link>
            <Link
                href="/about"
                className="text-text-dark dark:text-text-light hover:underline"
            >
                About
            </Link>
        </div>
    )
}

export default Links
