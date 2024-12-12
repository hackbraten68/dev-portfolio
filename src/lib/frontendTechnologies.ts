//frontendTechnologies.ts
interface FrontendTechnologies {
    name: string;
    icon: string;
    since: string;
    used: string;
}

export const frontendTechnologies: FrontendTechnologies[] = [
    {
        name: 'Tailwind',
        icon: 'tailwind',
        since: '2021',
        used: '14'
    },
    {
        name: 'AlpineJS',
        icon: 'alpine',
        since: '2021',
        used: '23'
    }
]