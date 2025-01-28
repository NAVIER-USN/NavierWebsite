import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'
import Members from '@/components/page-member/member-card/Members'
import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next'

type Props = {
  params: {
    teamId: string
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Navier team ${params.teamId}`
  }
}

const Team = async ({ params }: { params: { teamId: string } }) => {
  const team = await GetContentfulData('membersPage', params.teamId)
  const teamData = await GetContentfulData('allTeamsPage')
  
  if (!team || !teamData) {
    throw new Error('Team not found.')
  }

  const sortedTeams = teamData.teams.sort((a: any, b: any) => {
    const yearA = parseInt(a.fields.title.split('-')[1], 10)
    const yearB = parseInt(b.fields.title.split('-')[1], 10)
    return yearB - yearA
  })

  const currentTeam = sortedTeams.find(
    (t: any) => t.fields.title === params.teamId
  )

  const currentIndex = sortedTeams.findIndex((t: any) => t.fields.title === params.teamId)
  const prevTeam = currentIndex < sortedTeams.length - 1 ? sortedTeams[currentIndex + 1] : null
  const nextTeam = currentIndex > 0 ? sortedTeams[currentIndex - 1] : null

  return (
    <main className="relative">
      {currentTeam && (
        <div className="relative h-[70vh]">
          <div className="absolute inset-0">
            <img
              src={`https:${currentTeam.fields.teamGroupImage.fields.file.url}`}
              alt={`${params.teamId} team group photo`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-end px-4 md:px-8">
            <div className="max-w-7xl mx-auto w-full relative pb-8">
              <div className="relative mb-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2">
                  {params.teamId.split('-')[1]}
                </h1>
                <p className="text-white/70 text-xl md:text-2xl font-light">
                  Navier Team
                </p>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="flex-1 h-[1px] bg-white/20" />
                <div className="flex items-center gap-3">
                  {prevTeam && (
                    <Link
                      href={`/teams/${prevTeam.fields.title}`}
                      className="group flex items-center gap-2 text-white/70 hover:text-white transition-all"
                    >
                      <span className="text-sm font-medium">{prevTeam.fields.title}</span>
                    </Link>
                  )}
                  <span className="px-6 py-2 bg-white text-black rounded-full font-bold">
                    {currentTeam.fields.title}
                  </span>
                  {nextTeam && (
                    <Link
                      href={`/teams/${nextTeam.fields.title}`}
                      className="group flex items-center gap-2 text-white/70 hover:text-white transition-all"
                    >
                      <span className="text-sm font-medium">{nextTeam.fields.title}</span>
                    </Link>
                  )}
                </div>
                <div className="flex-1 h-[1px] bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <Members allMembers={team} />
        </div>
      </div>
    </main>
  )
}

export default Team