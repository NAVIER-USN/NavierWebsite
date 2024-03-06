import Image from 'next/image'
import React from 'react'

type PhotoUrl = {
    url: string
}

type PhotoFile = {
    file: PhotoUrl
}

type PhotoFields = {
    fields: PhotoFile
}

type Metadata = {
    tags: string[]
}

type MemberFields = {
    name: string
    role: string
    bio: string
    photo: PhotoFields
    linkedIn: string
    leaderRole: boolean
}

type MemberEntry = {
    metadata: Metadata
    sys: {
        space: any
        id: string
        type: string
        createdAt: string
        updatedAt: string
        environment: any
        revision: number
        contentType: any
        locale: string
    }
    fields: MemberFields
}

type AllMembersEntry = {
    metadata: Metadata
    sys: {
        space: any
        id: string
        type: string
        createdAt: string
        updatedAt: string
        environment: any
        revision: number
        contentType: any
        locale: string
    }
    fields: {
        title: string
        member: MemberEntry[]
    }
}

type MembersProps = {
    allMembers: AllMembersEntry[]
}

const Members = ({ allMembers }: MembersProps) => {
    let members: MemberEntry[] = []
    let management: MemberEntry[] = []

    allMembers[0].fields.member.map((member: MemberEntry) => {
        if (member.fields.leaderRole === true) {
            management.push(member)
        } else {
            members.push(member)
        }
    })

    management.sort((a, b) => {
        if (a.fields.role === b.fields.role) {
            return a.fields.name.localeCompare(b.fields.name)
        }
        return a.fields.role.localeCompare(b.fields.role)
    })

    members.sort((a, b) => {
        if (a.fields.role === b.fields.role) {
            return a.fields.name.localeCompare(b.fields.name)
        }
        return a.fields.role.localeCompare(b.fields.role)
    })

    return (
        <div>
            <div>
                <h2 className="text-center text-2xl pt-8">Management</h2>
                <div className="max-w-5xl lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
                    {management.map((member: MemberEntry, index: number) => {
                        return (
                            <div
                                key={index}
                                className="bg-foreground-light dark:bg-foreground-dark rounded-br-xl overflow-hidden shadow-md"
                            >
                                <div className="relative h-64 max-w-[256px]">
                                    {member.fields.photo.fields.file.url && (
                                        <Image
                                            alt={`${member.fields.name}'s picture`}
                                            src={`https:${member.fields.photo.fields.file.url}`}
                                            width={750}
                                            height={750}
                                            priority={true}
                                            className="object-cover h-full"
                                        />
                                    )}
                                </div>

                                <div className="p-3">
                                    <h3 className="text-lg font-bold mb-1">
                                        {member.fields.name}
                                    </h3>
                                    <h4 className="text-md dark:text-gray-400">
                                        {member.fields.role}
                                    </h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <h2 className="text-center text-2xl pt-8">Members</h2>
                <div className="max-w-5xl lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
                    {members.map((member: MemberEntry, index: number) => {
                        return (
                            <div
                                key={index}
                                className="bg-foreground-light dark:bg-foreground-dark rounded-br-xl overflow-hidden shadow-md flex flex-col"
                            >
                                <div className="relative h-64 max-w-[256px]">
                                    {member.fields.photo.fields.file.url && (
                                        <Image
                                            alt={`${member.fields.name}'s picture`}
                                            src={`https:${member.fields.photo.fields.file.url}`}
                                            width={750}
                                            height={750}
                                            priority={true}
                                            className="object-cover h-full"
                                        />
                                    )}
                                </div>

                                <div className="flex-grow p-3 flex flex-col justify-between">
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold pb-2">
                                            {member.fields.name}
                                        </h3>
                                        {/* Add any other content here */}
                                    </div>
                                    <div>
                                        <h4 className="text-md dark:text-gray-400">
                                            {member.fields.role}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Members
