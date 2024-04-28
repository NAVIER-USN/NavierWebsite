export interface Footer {
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
