import React from 'react';

const Projects = () => {
    const projects = [

        {
            title: "MoodMate – Emotion-Based Music Recommender System",
            description:
                " Developed an end-to-end AI-driven music recommendation system that detects user emotions in real time via webcam or static images and generates personalized music playlists based on mood.",
            link: "https://github.com/Surya-Pratap-Dash/Emotion-Detection-and-Music-Recommended-system/tree/08af284c0654f1952c28de1def8ebc5fa6810edc"
        },
        {
            title: "Weather Forecasting Web Application",
            description:
                "Real-time weather app using Python, Django, HTML, CSS, and JavaScript. Integrated APIs from trusted weather services.",
            link: "https://github.com/Surya-Pratap-Dash/Weather_Forecasting_Web_Application",
        },
        {
            title: "House Price prediction using Machine Learning",
            description:
                "I built and optimized machine learning models (Linear Regression, Random Forest) to predict house prices. This involved an end-to-end data analysis workflow, from data cleaning and feature engineering to model evaluation using R² and RMSE.",
            link: "https://github.com/Surya-Pratap-Dash/House_Price_Prediction",
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
