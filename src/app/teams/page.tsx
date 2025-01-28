import React from 'react'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'
import Link from 'next/link'
import { Teams } from './types'

export const generateMetadata = () => {
    return {
        title: `Teams`
    }
}

const TeamsPage = async () => {
    const teams = await GetContentfulData('allTeamsPage')

    if (!teams) {
        throw new Error('Error loading team data.')
    }

    const sortedTeams = teams.teams.sort((a: Teams, b: Teams) => {
        const yearA = parseInt(a.fields.title.split('-')[1], 10)
        const yearB = parseInt(b.fields.title.split('-')[1], 10)
        return yearB - yearA
    })

    return (
<main className="flex justify-center items-center mt-32">
  <div className="max-w-[90rem] px-8 md:px-16 xl:px-24">
  <header className="mb-12">
      <h1 className="text-4xl md:text-5xl font-bold  mb-4">Our Teams</h1>
      <p className="text-lg max-w-3xl">Explore our teams across different years.</p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {sortedTeams.map((team: Teams, i: number) => (
        <div 
          className="group relative transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1" 
          key={i}
        >
          <Link 
            href={`/teams/${team.fields.title}`}
            className="block relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={`https:${team.fields.teamGroupImage.fields.file.url}`}
                alt={`Group image of the team: ${team.fields.title}`}
                width={4000}
                height={2000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-8 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                <h3 className="text-white font-bold text-4xl">
                  {team.fields.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View team members →
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
</main>
    )
}

export default TeamsPage
