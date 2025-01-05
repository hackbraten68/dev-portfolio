//databaseTechnologies.ts
interface DatabaseTechnologies {
    name: string;
    icon: string;
}

export const databaseTechnologies: DatabaseTechnologies[] = [
    {
        name: 'MySQL',
        icon: 'src/assets/icons/mysql.svg'
    },
    {
        name: 'MariaDB',
        icon: 'src/assets/icons/mariadb.svg'
    },
    {
        name: 'MongoDB',
        icon: 'src/assets/icons/mongodb.svg'
    },
    {
        name: 'Redis',
        icon: 'src/assets/icons/redis.svg'
    },
    {
        name: 'Prisma ORM',
        icon: 'src/assets/icons/prisma.svg'
    },
];
