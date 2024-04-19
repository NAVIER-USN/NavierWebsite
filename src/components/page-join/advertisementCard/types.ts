export interface AdvertisementFields {
    position: string
    jobDescription: string
    active: boolean
    formUrl: string
}

export interface Advertisement {
    fields: AdvertisementFields
}

export interface AdvertisementCardProps {
    advertisements: Advertisement[]
}
