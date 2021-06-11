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
    id: number,
    conference: string,
    teamName: string,
    stadiumName: string,
    stadiumImage: string,
    matches: string[]

}

export interface Ihome {
    id: number,
    woodmark: string,
}

export interface Iregister {
    name:string;
    password:any;
    repeatPassword:any;
    email:string;
    phone:number;

}

export interface InewTicket {
    name: string,
    quantity: number,
    place: string,
    email: string
}