export class Action {
    id: string;
    date: Date;
    notes: string[];
    link?: Link;
    image?: Link;
}

export class Link {
    text: string;
    path: string;
    type?: string;
}