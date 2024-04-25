import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'
import Members from '@/components/page-member/member-card/Members'
import React from 'react'

const Team = async ({ params }: { params: { teamId: string } }) => {
    const team = await GetContentfulData('membersPage', params.teamId)
    console.log('teams', team.fields)

    if (!team) {
        return (
            <div className="flex flex-col items-center text-3xl mt-32">
                <p>Team not found</p>
            </div>
        )
    }

    return (
        <main className="flex justify-center items-center mt-32">
            <div className="max-w-6xl">
                <Members allMembers={team} />
            </div>
        </main>
    )
}

export default Team
