interface File {
    url: string
}

interface TeamPhoto {
    fields?: {
        file?: File
    }
}

interface CompetitionFields {
    competition: string
    location?: string
    description?: string
    teamPhoto?: TeamPhoto
    startDate?: string
    endDate?: string
}

interface Competition {
    fields: CompetitionFields
}

interface CompetitionsProps {
    competitions: Competition[]
}
    