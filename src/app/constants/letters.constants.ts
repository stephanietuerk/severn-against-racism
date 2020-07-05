import { Letter } from './../models/letter.model';

export const letters: Letter[] = [
    {
        id: 'lagarde001',
        author: {
            last: 'Lagarde',
            first: 'Doug'
        },
        addressee: {
            last: 'Severn Community'
        },
        date: new Date('2020-06-03'),
        content: {
            type: 'img',
            location: 'lagarde001.png'
        }
    },
    {
        id: 'tuerk001',
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
        },
        response: ['lagarde002']
    },
    {
        id: 'lagarde002',
        author: {
            last: 'Lagarde',
            first: 'Doug'
        },
        addressee: {
            last: 'Tuerk',
            first: 'Stephanie'
        },
        date: new Date('2020-06-07'),
        content: {
            type: 'md',
            location: 'lagarde002.md'
        }
    },
    {
        id: 'tuerk001',
        author: {
            last: 'Tuerk',
            first: 'Stephanie'
        },
        addressee: {
            last: 'Belo',
            first: 'Charles'
        },
        date: new Date('2020-06-07'),
        content: {
            type: 'md',
            location: 'tuerk002.md'
        },
        response: ['belo001']
    },
    {
        id: 'belo001',
        author: {
            last: 'Belo',
            first: 'Charles'
        },
        addressee: {
            last: 'Tuerk',
            first: 'Stephanie'
        },
        date: new Date('2020-06-08'),
        content: {
            type: 'md',
            location: 'belo001.md'
        }
    },
    {
        id: 'severn001',
        author: {
            last: 'Severn School'
        },
        addressee: {
            last: 'Alumni'
        },
        date: new Date('2020-06-08'),
        content: {
            type: 'img',
            location: 'severn001.png'
        }
    }
];
