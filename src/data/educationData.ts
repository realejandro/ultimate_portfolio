

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
        description : 'Built an ecommerce app for Gourmet Hound, a Fulham deli, with Headless WordPress and Next.js, including product catalogue, shopping basket, and responsive layout for local customers',
        duration: 'September 2024 - April 2025',
        img: "/assets/images/education/northwestern_university.png"
    },
    {
        id: '3',
        title : 'UGMA',
        level: 'Bachelor of Science in System Engineering',
        description : 'System designing and software development focused program',
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

