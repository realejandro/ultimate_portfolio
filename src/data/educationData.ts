

export type EducationData = {
    id?:string;
    title:string;
    level: string;
    duration:string;
    description:string;
    img:string;
}


export const education: EducationData[] = [
    
    {
        id: '2',
        title : 'Northwestern University',
        level: 'Professional Certificate in Software Development',
        description : 'Over the last year, I have gained hands-on experience with powerful technologies such as the MERN Stack (MongoDB, Express, React, Node.js), Python, GraphQL and Apollo, Cypress for testing, and CI/CD with GitHub Actions. I’ve built full-stack applications, worked on automated testing, and streamlined my development process with modern tools and practices.',
        duration: 'September 2024 - April 2025',
        img: "/assets/images/education/northwestern_university.png"
    },
    {
        id: '3',
        title : 'UGMA',
        level: 'Bachelor of Science in System Engineering',
        description : 'Studied Systems Engineering at Universidad Gran Mariscal de Ayacucho, focusing on programming, algorithms, databases, and systems analysis. Built a strong foundation in software development and problem-solving through engineering principles.',
        duration: 'January 2017 - April 2019',
        img: "/assets/images/education/ugma_3.png"
    },
    /* 
    {
        id: '1',
        title : 'In Progress',
        level: 'Bachelor Degree',
        description : 'Computers',
        duration: 'September 2024 - April 2025',
        img: "/assets/images/education/northwestern_university.png"
    }
        */

]

