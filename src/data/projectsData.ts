
export type ProjectsData = Readonly<{
    id:string;
    title:string;
    description:string;
    mission:string;
    url:string;
    url_github:string;
    skills:string[];
    role:string;
    image:string
}>;

export const projects : ProjectsData[] = [
   {
        id: '1',
        title : 'Gourmet Hound',
        description : 'Built an ecommerce app for Gourmet Hound, a Fulham deli, with Headless WordPress and Next.js, including product catalogue, shopping basket, and responsive layout for local customers',
        mission :'My mission was to adapt both the frontend and backend of the web application using Next.js for the client interface and Strapi as the headless CMS and API.',
        url:'https://gourmet-hound.vercel.app/',
        url_github:'https://github.com/realejandro/gourmet_hound',
        skills:['Next.js', 'Wordpress', 'GraphQL'],
        role:'Full Stack Developer',
        image: "/assets/images/projects/gourmet_hound.png"
    },
    {
        id: '2',
        title : 'Car Management Dashboard',
        description : 'System Management to organize and get the best car',
        mission :'I support creating the and designing the API and Database of this project and align it with the business logic as much as possible',
        url:'https://github.com/realejandro/car_management',
        url_github:'https://github.com/realejandro/car_management',
        skills:['Python', 'Flask', 'PostgreSQL'],
        role:'Software Engineer(Backend)',
        image: "/assets/images/projects/car_management_app.png"
    },
    {
        id: '3',
        title : 'Book Storage',
        description : 'Built a Book Search Engine with login/signup, using Google Books API. Users can search, save, view, and remove books from their account.',
        mission :'My mission was to adapt both the frontend and backend of the web application using Next.js for the client interface and Strapi as the headless CMS and API.',
        url:'https://my-book-storage.onrender.com/',
        url_github:'https://github.com/realejandro/my-book-storage',
        skills:['Next.js', 'Wordpress', 'GraphQL'],
        role:'Software Engineer (Backend) ',
        image: "/assets/images/projects/book_storage.png"
    } 
]