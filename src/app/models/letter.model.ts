
export class Letter {
    id: string;
    author: Name;
    addressee: Name;
    date: Date;
    content: Content;
    response?: string[];
    link?: string;
    notes?: string[];
}

export class Name {
    last: string;
    first?: string;
}

export class Content {
    type: 'md' | 'img' | 'pdf';
    location: string;
}