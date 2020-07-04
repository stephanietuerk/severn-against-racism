
export class Letter {
    id: string;
    author: Name;
    addressee: Name;
    date: Date;
    content: Content;
    response?: string[];
}

export class Name {
    last: string;
    first?: string;
}

export class Content {
    type: 'md' | 'html';
    location: string;
}