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
        href="/members"
        className="text-text-dark dark:text-text-light hover:underline"
      >
        Members
      </Link>
      <Link
        href="/sponsors"
        className="text-text-dark dark:text-text-light hover:underline"
      >
        Sponsors
      </Link>
      <Link
        href="/contact_us"
        className="text-text-dark dark:text-text-light hover:underline"
      >
        Contact
      </Link>
      <Link
        href="/join"
        className="text-text-dark dark:text-text-light hover:underline"
      >
        Join
      </Link>
    </div>
  )
}

export default Links
