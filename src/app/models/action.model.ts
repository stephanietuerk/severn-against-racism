export class Action {
    date: Date;
    notes: string[];
    link?: Link;
    image?: Link;
}

export class Link {
    text: string;
    path: string;
}