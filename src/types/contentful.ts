export interface Link {
    sys: {
        type: 'Link'
        linkType: 'Space' | 'Environment' | 'ContentType' | 'Asset'
        id: string
    }
}

export type PhotoUrl = {
    url: string
}

export type PhotoFile = {
    title: string
    file: PhotoUrl
}

export type PhotoFields = {
    fields: PhotoFile
}

export interface MemberProfile {
    sys: Link
    fields: {
        name: string
        role: string
        bio: string
        photo: PhotoFields
        linkedIn: string
        email: string
        leaderRole: boolean
    }
}

export interface MembersPage {
    sys: Link
    fields: {
        title: string
        member: Link[]
    }
}

export interface Asset {
    sys: Link
    fields: {
        title: string
        role: string
        description: string
        file: {
            url: string
            details: {
                size: number
                image?: {
                    width: number
                    height: number
                }
            }
            fileName: string
            contentType: string
        }
    }
}

export type Metadata = {
    tags: string[]
}

export type MemberEntry = {
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
    fields: MemberProfile['fields']
}

export type AllMembersEntry = {
    metadata: Metadata
    sys: MemberEntry['sys']
    fields: {
        title: string
        member: MemberEntry[]
    }
}

export type MembersProps = {
    allMembers: AllMembersEntry
}

export interface SponsorProps {
    sponsors: Sponsor[]
}

export interface Sponsor {
    metadata: any
    sys: any
    fields: {
        logoDarkmode: PhotoFields
        logoLightmode: PhotoFields
        sponsor: string
        description: string
        importance: number
        url: string
    }
}
