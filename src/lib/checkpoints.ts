//checkpoints.ts
interface Checkpoints {
    title: string;
    year: string;
    month: string;
    description: string;
    iconColor: string;
    icons: string;
}

export const checkpoints: Checkpoints[] = [
    {
        title: 'Watched TRON Movie & decided to become a programmer one day',
        year: '1992',
        month: 'August',
        description: 'Beginn der Ausbildung zum Fachinformatiker in der Fachrichtung Anwendungsentwicklung.',
        iconColor: '#FF5733',
        icons: 'school'
    },
    {
        title: 'Internship @ local web agency',
        year: '2000',
        month: 'March',
        description: 'Worked on my first HTML Projects using MS Frontpage and Adobe Dreamweaver',
        iconColor: '#3366FF',
        icons: 'html, css'
    },
    {
        title: 'JavaScript Einführung',
        year: '2016',
        month: 'März',
        description: 'Einführung in die Programmierung mit JavaScript, Entwicklung interaktiver Webelemente.',
        iconColor: '#F7DF1E',
        icons: 'javascript'
    },
    {
        title: 'Erster Praktikumsplatz',
        year: '2017',
        month: 'Mai',
        description: 'Beginn eines Praktikums bei einem Webentwicklungsunternehmen, Vertiefung der praktischen Fähigkeiten.',
        iconColor: '#FF5733',
        icons: 'work'
    },
    {
        title: 'React.js lernen',
        year: '2018',
        month: 'April',
        description: 'Lernen und Anwenden des React.js Frameworks für die Entwicklung von Single-Page-Anwendungen.',
        iconColor: '#61DAFB',
        icons: 'react'
    },
    {
        title: 'Abschluss der Ausbildung',
        year: '2018',
        month: 'Juli',
        description: 'Erfolgreicher Abschluss der Ausbildung zum Fachinformatiker für Anwendungsentwicklung.',
        iconColor: '#2ECC71',
        icons: 'graduation'
    },
    {
        title: 'Erste Festanstellung',
        year: '2018',
        month: 'August',
        description: 'Beginnt eine Vollzeitstelle als Junior Frontend Entwickler bei einer mittelständischen Firma.',
        iconColor: '#8E44AD',
        icons: 'job'
    },
    {
        title: 'Einführung TypeScript',
        year: '2019',
        month: 'Oktober',
        description: 'Einarbeitung und Verwendung von TypeScript zur Verbesserung des Codes und der Typensicherheit.',
        iconColor: '#007ACC',
        icons: 'typescript'
    },
    {
        title: 'Mitwirkung an großen Projekten',
        year: '2020',
        month: 'März',
        description: 'Mitwirkung an großen, produktiven Webprojekten, Festigung der Fähigkeiten und Erfahrungen.',
        iconColor: '#E74C3C',
        icons: 'project'
    },
    {
        title: 'Aufstieg zum Senior Developer',
        year: '2022',
        month: 'Mai',
        description: 'Aufstieg und Übernahme von mehr Verantwortung als Senior Frontend Developer.',
        iconColor: '#F39C12',
        icons: 'promotion'
    }
];