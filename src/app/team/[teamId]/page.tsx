import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'
import Members from '@/components/page-member/member-card/Members'
import React from 'react'

const Team = async ({ params }: { params: { teamId: string } }) => {
    const team = await GetContentfulData('membersPage', params.teamId)
    console.log('teams', team.fields)

    if (!team) {
        return (
            <div className="flex flex-col items-center text-3xl">
                <p>Team not found</p>
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center ">
            <div className="max-w-6xl">
                <Members allMembers={team} />
            </div>
        </div>
    )
}

export default Team
