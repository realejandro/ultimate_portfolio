import React from 'react'

export const TimeLineComponent = () => {
  return (
    <ul className="timeline timeline-snap-icon max-lg:timeline-compact timeline-vertical">
        <li>
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
            >
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                />
            </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2018 - 2020</time>
                <div className="text-lg font-black">Oxoft Group</div>
                    As a Jr Software Developer, I created web applications using JavaScript, React.js, and Node.js, translating UX/UI wireframes into reusable JSX components. 
                    Collaborated with designers to build and test features using unit testing practices, 
                    while applying modern JavaScript (ES6) and object-oriented principles to create scalable, maintainable code.
            </div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
            >
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                />
            </svg>
            </div>
            <div className="timeline-end md:mb-10">
                <time className="font-mono italic">2022 - 2023</time>
                <div className="text-lg font-black">Etsy.com Apprenticeship</div>
                During my apprenticeship at Etsy.com, I worked as a Junior SDET focused on UI testing and automation.
                I analyzed requirements and created detailed test scenarios to ensure feature quality and coverage.
                I developed and maintained automated tests using Java, Selenium WebDriver, Cucumber BDD, and JUnit.
                I also generated test reports with screenshots and helped improve testing reliability and debugging efficiency.
            </div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
            >
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                />
            </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2023 - Present</time>
            <div className="text-lg font-black">Self-Employee Software Engineer</div>
                As a Software Engineer, I worked on building and maintaining web applications using React, Next.js, Node.js, and Python.
                I developed both frontend and backend features and implemented new functionalities based on project requirements.
                I ensured software quality through automated testing and contributed to CI/CD pipelines and end-to-end testing.
                I collaborated with teams to deliver reliable, production-ready applications.
            </div>
            <hr />
        </li>
    </ul>
  )
}
