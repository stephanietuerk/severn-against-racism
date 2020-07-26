import { Labels } from '../models/labels.model';

export const labels: Labels = {
    sections: {
        about: { 
            id: 'about', 
            display: 'About Us'
        },
        actions: { 
            id: 'actions', 
            display: 'Actions',
            subsections: [
                {
                    id: 'actions-subsection-take-action',
                    display: 'Take Action'
                },
                {
                    id: 'actions-subsection-recent',
                    display: 'Recent'
                },
                {
                    id: 'actions-subsection-our-formation',
                    display: 'Our Formation'
                }
            ]
        },
        resources: {
            id: 'resources', 
            display: 'Resources',
            subsections: [
                {
                    id: 'resources-subsection-documentation',
                    display: 'Documentation'
                },
                {
                    id: 'resources-subsection-media',
                    display: 'Media'
                }
            ]
        },
        join: { 
            id: 'join', 
            display: 'Join Us'
        }
    }
};

