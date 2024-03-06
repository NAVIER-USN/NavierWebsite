import React from 'react'
import { client } from '../../../lib/contentful/client'
import Members from '@/components/members/Members'

const MembersPage = async () => {
    let members = []
    //Fetching members
    try {
        const response = await client.getEntries({
            content_type: 'membersPage'
        })
        members = response.items
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }
    return (
        <div className="flex justify-center items-center ">
            <div className="max-w-6xl">
                <Members allMembers={members} />
            </div>
        </div>
    )
}

export default MembersPage
