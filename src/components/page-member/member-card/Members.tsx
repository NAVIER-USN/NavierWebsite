import React from 'react'
import { MemberEntry, MembersProps } from './types'
import { CiLinkedin, CiMail } from 'react-icons/ci'
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
      <div className="w-full">
        {management.length > 0 && (
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12">
              Management
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {management.map((member, index) => (
                member && member.fields ? (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <div className="aspect-[3/4]">
                        {member.fields.photo?.fields.file.url && (
                          <img
                            alt={`${member.fields.name}'s picture`}
                            src={`https:${member.fields.photo.fields.file.url}`}
                            className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {member.fields.name}
                      </h3>
                      <p className="text-gray-600 mt-2 text-lg">
                        {member.fields.role}
                      </p>
                      
                      {/* Social Links */}
                      <div className="flex gap-3 mt-4">
                        {member.fields.linkedIn && (
                          <Link
                            href={member.fields.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-black 
                              hover:text-white transition-colors duration-300"
                          >
                            <CiLinkedin size={22} />
                          </Link>
                        )}                        
                        {member.fields.email && (
                          <Link
                            href={`mailto:${member.fields.email}`}
                            className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-black 
                              hover:text-white transition-colors duration-300"
                          >
                            <CiMail size={22} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ) : null
              ))}
            </div>
          </div>
        )}
    
        <div>
          <h2 className="text-4xl font-bold mb-12">
            Team Members
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {members.map((member, index) => (
              member && member.fields ? (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/5]">
                      {member.fields.photo?.fields.file.url && (
                        <img
                          alt={`${member.fields.name}'s picture`}
                          src={`https:${member.fields.photo.fields.file.url}`}
                          className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
    
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900">
                      {member.fields.name}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm">
                      {member.fields.role}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex gap-2 mt-3">
                      {member.fields.email && (
                        <Link
                          href={`mailto:${member.fields.email}`}
                          className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-black 
                            hover:text-white transition-colors duration-300"
                        >
                          <CiMail size={18} />
                        </Link>
                      )}
                      {member.fields.linkedIn && (
                        <Link
                          href={member.fields.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-black 
                            hover:text-white transition-colors duration-300"
                        >
                          <CiLinkedin size={18} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
    )
}

export default Members
