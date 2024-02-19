import React from 'react'
import Link from 'next/link'

const Links: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <Link href="/" className="">
        Home
      </Link>
      <Link href="/members" className="">
        Members
      </Link>
      <Link href="/sponsors" className="">
        Sponsors
      </Link>
      <Link href="/contact_us" className="">
        Contact
      </Link>
      <Link href="/join" className="">
        Join
      </Link>
    </div>
  )
}

export default Links
