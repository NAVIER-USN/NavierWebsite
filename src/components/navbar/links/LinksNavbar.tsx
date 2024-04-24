import React from 'react'
import Link from 'next/link'

const Links: React.FC = () => {
    return (
        <div className="flex space-x-4 font-semibold text-lg md:text-md text-text-dark dark:text-text-light">
            <Link href="/" className="hover:underline">
                Home
            </Link>
            <Link href="/join" className="hover:underline">
                Join
            </Link>
            <Link href="/team" className="hover:underline">
                Team
            </Link>
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
