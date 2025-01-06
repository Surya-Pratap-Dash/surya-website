import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Weather Forecasting Web Application",
            description:
                "Real-time weather app using Python, Django, HTML, CSS, and JavaScript. Integrated APIs from trusted weather services.",
            link: "https://github.com/Surya-Pratap-Dash/Weather_Forecasting_Web_Application",
        },
        {
            title: "Employee Management System",
            description:
                "User-friendly system using Python and SQLite. Integrated Tkinter for an interactive interface for managing employee records.",
            link: "https://github.com/Surya-Pratap-Dash/Employee_Management_System",
        },
    ];

    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            View on GitHub
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
