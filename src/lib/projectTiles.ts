// projectTiles.ts
interface ProjectTile {
    title: string;
    href: string;
    description: string;
    gradientFrom: string;
    gradientTo: string;
    iconColor: string;
    icon: string;
    tags: string[];
}

export const projectTiles: ProjectTile[] = [
    {
        title: 'Project One',
        href: '/projects/one',
        description: 'This is the first project. It provides an example of how you can manage state in a React application while integrating with various APIs. Here, we focus on creating a robust and scalable architecture.',
        gradientFrom: 'from-pink-500',
        gradientTo: 'to-blue-500',
        iconColor: 'text-pink-500',
        icon: 'M12 4V1m0 3v13m8 8h-3a9 9 0 11-6 0H4',
        tags: ['JavaScript', 'React']
    },
    {
        title: 'Project Two',
        href: '/projects/two',
        description: 'This is the second project. It demonstrates the use of TypeScript for building a Node.js backend. The project includes examples of Express routing, middleware, and advanced TypeScript features.',
        gradientFrom: 'from-green-500',
        gradientTo: 'to-blue-500',
        iconColor: 'text-green-500',
        icon: 'M9 17a2 2 0 104 0H9z',
        tags: ['TypeScript', 'Node.js']
    },
    {
        title: 'Project Three',
        href: '/projects/three',
        description: 'This is the third project. This project illustrates the basics of HTML and CSS, focusing on responsive design principles and accessibility. It includes various hands-on exercises and real-world examples.',
        gradientFrom: 'from-yellow-500',
        gradientTo: 'to-red-500',
        iconColor: 'text-yellow-500',
        icon: 'M12 4.354V19.646M6.342 17.464L12 13.277l5.657 4.186',
        tags: ['HTML', 'CSS']
    },
    {
        title: 'Project Four',
        href: '/projects/four',
        description: 'This is the fourth project. It showcases the use of Vue.js along with TailwindCSS. The project is geared towards creating dynamic, high-performance web applications with a seamless design.',
        gradientFrom: 'from-purple-500',
        gradientTo: 'to-indigo-500',
        iconColor: 'text-purple-500',
        icon: 'M15 12H9m6 0a6 6 0 10-12 0 6 6 0 009 5.472',
        tags: ['Vue.js', 'TailwindCSS']
    },
    {
        title: 'Project Five',
        href: '/projects/five',
        description: 'This fifth project focuses on integrating third-party services into your applications. Topics like OAuth 2.0, REST API consumption, and service orchestration are covered in detail.',
        gradientFrom: 'from-red-500',
        gradientTo: 'to-yellow-500',
        iconColor: 'text-red-500',
        icon: 'M5 13L12 21l7-8M4 6h16',
        tags: ['OAuth', 'API']
    },
    {
        title: 'Project Six',
        href: '/projects/six',
        description: 'The final project is about optimizing the performance of web applications. It includes methods for measuring performance, profiling applications, and implementing performance improvements.',
        gradientFrom: 'from-blue-500',
        gradientTo: 'to-green-500',
        iconColor: 'text-blue-500',
        icon: 'M11 2v9h6a1 1 0 011 1v1a2 2 0 01-2 2H9a1 1 0 00-1 1v2H5m0-6h2',
        tags: ['Performance', 'Optimization']
    },
];