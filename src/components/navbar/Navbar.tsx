import React from 'react'
import ThemeSwitch from '../theme-switch/ThemeSwitch'
import Links from './links/Links'

const Navbar = async () => {
  // Fetch logo entry
  const logoEntryUrl = `${process.env.BASE_URL}/spaces/${process.env.SPACE_ID}/environments/${process.env.ENVIRONMENT}/entries/${process.env.MODEL_ENTRY}?access_token=${process.env.ACCESS_TOKEN}`
  const entryResponse = await fetch(logoEntryUrl)
  const entryData = await entryResponse.json()
  const logoData = entryData.fields.modelFile.sys.id
  console.log(logoData)

  return (
    <header>
      <nav className="select-none border-solid border-b-2 border-gray-300 bg-foreground-light py-8 flex justify-between px-3 md:px-10 dark:bg-foreground-dark dark:border-0">
        <h1 className="text-sm md:text-xl">Navier</h1>
        <ul className="flex items-center gap-10">
          <li>
            <Links />
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
