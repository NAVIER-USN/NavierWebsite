export interface Teams {
    fields: Fields
}

export interface Fields {
    title: string
    teamGroupImage: TeamGroupImage
}

export interface TeamGroupImage {
    fields: TeamGroupImageFields
}

export interface TeamGroupImageFields {
    title: string
    file: File
}

export interface File {
    url: string
    fileName: string
    contentType: string
}
