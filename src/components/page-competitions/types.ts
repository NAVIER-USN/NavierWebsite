interface File {
    url: string
}

interface TeamPhoto {
    fields?: {
        file?: File
    }
}

interface ReportLink {
    fields?: {
        file?: File
    }
}

interface CompetitionLogo {
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
    place?: string;
    competitionLink?: string
    teamVideoLink?: string
    competitionLogo?: CompetitionLogo
    technicalReportLink?:ReportLink
}

interface Competition {
    fields: CompetitionFields
}

interface CompetitionsProps {
    competitions: Competition[]
}
    