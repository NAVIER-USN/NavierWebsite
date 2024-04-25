export interface Footer {
    fields: Fields
}

export interface Fields {
    brand: string
    phone: number
    email: string
    address: string
    postalCode: number
    socialMedia: SocialMedia[]
}

export interface SocialMedia {
    fields: {
        socialMedia: string
        url: string
    }
}
