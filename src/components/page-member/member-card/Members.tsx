import React from 'react'
import { MemberEntry, MembersProps } from './types'
import { CiLinkedin } from 'react-icons/ci'
import Link from 'next/link'

const Members = ({ allMembers }: MembersProps) => {
    let members: MemberEntry[] = []
    let management: MemberEntry[] = []

    allMembers.member.forEach((member: MemberEntry) => {
        if (member.fields && member.fields.leaderRole) {
            management.push(member)
        } else if (member.fields) {
            members.push(member)
        }
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
                        return member && member.fields ? (
                            <div
                                key={index}
                                className="bg-foreground-light dark:bg-foreground-dark rounded-br-xl overflow-hidden shadow-md"
                            >
                                <div className="relative h-64 max-w-full">
                                    {member.fields.photo?.fields.file.url && (
                                        <img
                                            alt={`${member.fields.name}'s picture`}
                                            src={`https:${member.fields.photo.fields.file.url}`}
                                            width={750}
                                            height={750}
                                            className="object-cover h-full"
                                        />
                                    )}
                                </div>

                                <div className="p-3">
                                    <h3 className="text-lg font-bold mb-1">
                                        {member.fields.name}
                                    </h3>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-md dark:text-gray-400">
                                            {member.fields.role}
                                        </h4>
                                        {member.fields.linkedIn ? (
                                            <Link
                                                href={member.fields.linkedIn}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <CiLinkedin
                                                    className="hover:cursor-pointer"
                                                    size={30}
                                                />
                                            </Link>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : null
                    })}
                </div>
            </div>
            <div>
                <h2 className="text-center text-2xl pt-8">Team</h2>
                <div className="max-w-5xl lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
                    {members.map((member: MemberEntry, index: number) => {
                        return member && member.fields ? (
                            <div
                                key={index}
                                className="bg-foreground-light dark:bg-foreground-dark rounded-br-xl overflow-hidden shadow-md flex flex-col"
                            >
                                <div className="relative h-64 max-w-full">
                                    {member.fields.photo?.fields.file.url && (
                                        <img
                                            alt={`${member.fields.name}'s picture`}
                                            src={`https:${member.fields.photo.fields.file.url}`}
                                            width={750}
                                            height={750}
                                            className="object-cover h-full"
                                        />
                                    )}
                                </div>

                                <div className="flex-grow p-3 flex flex-col justify-between">
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold pb-2">
                                            {member.fields.name}
                                        </h3>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-md dark:text-gray-400">
                                            {member.fields.role}
                                        </h4>
                                        {member.fields.linkedIn ? (
                                            <Link
                                                href={member.fields.linkedIn}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <CiLinkedin
                                                    className="hover:cursor-pointer"
                                                    size={30}
                                                />
                                            </Link>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : null
                    })}
                </div>
            </div>
        </div>
    )
}

export default Members
