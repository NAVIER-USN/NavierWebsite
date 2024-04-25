export interface EventData {
    fields: {
        city: string
        country: string
        eventDate: string
        eventDescription: string
        eventName: string
        location: string
    }
}

export interface LocationCoordinates {
    latitude: number
    longitude: number
}

export interface Props {
    eventData: EventData[]
}
