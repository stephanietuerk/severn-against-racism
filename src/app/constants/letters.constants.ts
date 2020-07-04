import { Letter } from './../models/letter.model';

export const letters: Letter[] = [
    {
        author: {
            last: 'Lagarde',
            first: 'Doug'
        },
        addressee: {
            last: 'Severn School Community'
        },
        date: new Date('2020-06-03'),
        content: {
            type: 'html',
            location: 'lagarde001.html'
        }
    },
    {
        author: {
            last: 'Tuerk',
            first: 'Stephanie'
        },
        addressee: {
            last: 'Lagarde',
            first: 'Doug'
        },
        date: new Date('2020-06-04'),
        content: {
            type: 'md',
            location: 'tuerk001.md'
        }
    }
];
