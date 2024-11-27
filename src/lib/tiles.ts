// tiles.ts
interface Tile {
    title: string;
    href: string;
    gradientFrom: string;
    gradientTo: string;
    iconColor: string;
    icon: string;
    linkText: string;
    linkColor: string;
}

export const tiles: Tile[] = [
    {
        title: 'My Journey',
        href: '/about',
        gradientFrom: 'from-deepPink',
        gradientTo: 'to-blueViolet',
        iconColor: 'text-pink-600',
        icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m-4.5-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.332 18.477 17.746 18 16 18c-1.747 0-3.332-.477-4.5-1.253',
        linkText: 'Resume →',
        linkColor: 'text-indigo-400'
    },
    {
        title: 'Hire Me',
        href: '/download',
        gradientFrom: 'from-deepPink',
        gradientTo: 'to-greenMint',
        iconColor: 'text-fuchsia-600',
        // Icon: A simple briefcase or user symbol to represent "Hire Me"
        icon: 'M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H6zm7 7h5v9H6v-9h5.5v6.25l1.25-1.25 1.25 1.25V9z',
        linkText: 'Contact →',
        linkColor: 'text-amber-400'
    },
    {
        title: 'What i built',
        href: '/projects',
        gradientFrom: 'from-blueViolet',
        gradientTo: 'to-deepPink',
        iconColor: 'text-greenMint',
        icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
        linkText: 'Projects →',
        linkColor: 'text-deepPink'
    },
];