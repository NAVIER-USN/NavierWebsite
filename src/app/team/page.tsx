import React from 'react'
import Members from '@/components/page-member/member-card/Members'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'

const MembersPage = async () => {
    const members = await GetContentfulData('membersPage')

    return (
        <main className="flex justify-center items-center mt-32">
            <div className="max-w-6xl">
                <Members allMembers={members} />
            </div>
        </main>
    )
}

export default MembersPage
