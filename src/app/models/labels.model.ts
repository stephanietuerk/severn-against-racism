export class Labels {
    sections: {
        about: Section,
        actions: Section,
        resources: Section,
        join: Section
    };
}

export class Section {
    id: string;
    display: string;
    subsections?: Section[];
}
