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
            <div className="max-w-5xl px-12 md:px-20 xl:px-32">
                {sortedTeams.map((team: Teams, i: number) => (
                    <div className="py-3 md:py-6 lg:py-12 " key={i}>
                        <Link key={i} href={`/teams/${team.fields.title}`}>
                            <h3 className="text-center font-semibold text-3xl">
                                {team.fields.title}
                            </h3>
                            <img
                                className="shadow-xl"
                                src={`https:${team.fields.teamGroupImage.fields.file.url}`}
                                alt={`Group image of the team: ${team.fields.title}`}
                                width={4000}
                                height={2000}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default TeamsPage
