export interface Logo {
    logoDarkmode: string
    logoLightmode: string
    teams: Fields[]
}

export interface Fields {
    fields: Title
}

export interface Title {
    title: string
}
