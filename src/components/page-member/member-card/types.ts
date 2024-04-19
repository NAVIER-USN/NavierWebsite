export interface PhotoUrl {
    url: string
}

export interface PhotoFile {
    file: PhotoUrl
}

export interface PhotoFields {
    fields: PhotoFile
}

export interface Metadata {
    tags: string[]
}

export interface MemberFields {
    name: string
    role: string
    bio: string
    photo: PhotoFields
    linkedIn: string
    leaderRole: boolean
}

export interface MemberEntry {
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

export interface AllMembersEntry {
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

export interface MembersProps {
    allMembers: AllMembersEntry
}
