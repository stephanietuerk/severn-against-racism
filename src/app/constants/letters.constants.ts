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
    },
    {
        id: 'sobel001',
        author: {
            last: 'Sobel',
            first: 'Dave'
        },
        addressee: {
            last: 'Lagarde',
            first: 'Doug'
        },
        date: new Date('2020-06-08'),
        content: {
            type: 'md',
            location: 'sobel001.md'
        }
    },
    {
        id: 'sobel002',
        author: {
            last: 'Sobel',
            first: 'Dave'
        },
        addressee: {
            last: 'Grimes',
            first: 'Carrie'
        },
        date: new Date('2020-06-08'),
        content: {
            type: 'md',
            location: 'sobel002.md'
        }
    },
    {
        id: 'prouty001',
        author: {
            last: 'Prouty',
            first: 'Allison'
        },
        addressee: {
            last: 'Lagarde',
            first: 'Doug'
        },
        date: new Date('2020-06-09'),
        content: {
            type: 'md',
            location: 'prouty001.md'
        }
    },
    {
        id: 'wu001',
        author: {
            last: 'Wu',
            first: 'Joyce'
        },
        addressee: {
            last: 'Lagarde',
            first: 'Doug'
        },
        date: new Date('2020-06-08'),
        content: {
            type: 'md',
            location: 'wu001.md'
        }
    },
    {
        id: 'thompson001.md',
        author: {
            last: 'Thompson',
            first: 'Dominique'
        },
        addressee: {
            last: 'Lagarde',
            first: 'Doug'
        },
        date: new Date('2020-06-05'),
        content: {
            type: 'md',
            location: 'thompson001.md'
        }
    },
    {
        id: 'lagarde002.md',
        author: {
            last: 'Lagarde',
            first: 'Doug'
        },
        addressee: {
            last: 'Alumni, Parents, Faculty, and Staff'
        },
        date: new Date('2020-06-12'),
        content: {
            type: 'img',
            location: 'lagarde002.png'
        }
    },
    {
        id: 'byrd001.md',
        author: {
            last: 'Byrd',
            first: 'Charlotte'
        },
        addressee: {
            last: 'Lagarde',
            first: 'Doug'
        },
        date: new Date('2020-06-11'),
        content: {
            type: 'md',
            location: 'byrd001.md'
        }
    },
    {
        id: 'crawford001.md',
        author: {
            last: 'Crawford',
            first: 'EJ'
        },
        addressee: {
            last: 'Lagarde',
            first: 'Doug'
        },
        date: new Date('2020-06-07'),
        content: {
            type: 'md',
            location: 'crawford001.md'
        }
    },
];
