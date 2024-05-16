import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'
import Members from '@/components/page-member/member-card/Members'
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

    if (!team) {
        throw new Error('Team not found.')
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
