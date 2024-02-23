import React from 'react'
import Image from 'next/image'
import { client } from '../../../lib/contentful/client'

interface Member {
    fields: {
        name: string
        photo: {
            fields: {
                file: {
                    url: string
                }
            }
        }
    }
}

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
        <div>
            {members[0].fields.member.map((member: Member, index: number) => {
                return (
                    <div key={index}>
                        {member.fields.photo.fields.file.url && (
                            <Image
                                alt={`${member.fields.name}'s picture`}
                                src={`https:${member.fields.photo.fields.file.url}`}
                                width={150}
                                height={100}
                            />
                        )}
                        <h3>{member.fields.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default MembersPage
