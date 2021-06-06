export interface Iteams {
    city: string,
    conference: string,
    teamName: string,
    state: string,
    homeVenue: Ivenue,
    logo: string
}
export interface Ivenue{
    name: string
}

export interface Itickets {
    teamID: number,
    conference: string,
    teamName: string,
    stadium: string,
    matches: string[]

}

export interface Ihome {
    id: number,
    woodmark: string,
}