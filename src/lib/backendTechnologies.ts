//backendTechnologies.ts
interface BackendTechnologies {
    name: string;
    icon: string;
}

export const backendTechnologies: BackendTechnologies[] = [
    {
        name: 'Node.js',
        icon: 'src/assets/icons/nodejs.svg'
    },
    {
        name: 'Next.js',
        icon: 'src/assets/icons/nextjs.svg'
    },
    {
        name: 'Vite',
        icon: 'src/assets/icons/vite.svg'
    },
    {
        name: 'GraphQL',
        icon: 'src/assets/icons/graphql.svg',
    },
    {
        name: 'Rest API',
        icon: 'src/assets/icons/restapi.svg',
    }
];
