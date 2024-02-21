export interface Link {
  sys: {
    type: 'Link'
    linkType: 'Space' | 'Environment' | 'ContentType' | 'Asset'
    id: string
  }
}

export interface MemberProfile {
  sys: Link
  fields: {
    name: string
    role: string
    bio: string
    photo: Link
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
