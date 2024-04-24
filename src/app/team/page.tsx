import React from 'react'
import Members from '@/components/page-member/member-card/Members'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'

const MembersPage = async () => {
    
    const members = await GetContentfulData('membersPage')

    return (
        <div className="flex justify-center items-center ">
            <div className="max-w-6xl">
                <Members allMembers={members} />
            </div>
        </div>
    )
}

export default MembersPage
