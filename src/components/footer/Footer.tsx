import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-background-light text-text-dark p-4 border-solid border-t-2 border-gray-300 dark:border-gray-700 dark:text-text-light dark:bg-background-dark">
      <div className="container mx-auto text-center">
        <p className="font-bold">Navier</p>
        <p className="my-2">+47 123 45 678 | ✉️ kontakt@navier.usn.no</p>
        <div className="flex justify-center space-x-4 my-2">
          <Link
            href="https://www.instagram.com/navierusn/"
            className="underline cursor-pointer"
          >
            Instagram
          </Link>
        </div>
        <p className="text-sm mt-4">© 2024 Navier. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
