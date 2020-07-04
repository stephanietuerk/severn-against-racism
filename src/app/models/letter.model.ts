
export class Letter {
    author: Name;
    addressee: Name;
    date: Date;
    content: Content;
}

export class Name {
    last: string;
    first?: string;
}

export class Content {
    type: 'md' | 'html';
    location: string;
}