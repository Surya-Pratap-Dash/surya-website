import React from 'react';
import './Education.css'; // Ensure you have the correct import for the CSS file

const Education = () => {
    const education = [
        {
            school: "International Institute of Information Technology Bhubaneswar",
            degree: "B.Tech in Computer Science and Technology (CSE)",
            period: "Aug 2024 - Jun 2028",
            cgpa: "7.5",
        },
        {
            school: "DAV Public School, Kukatpally, Hyderabad (CBSE)",
            degree: "12th in PCM",
            period: "Jun 2021 - Mar 2023",
            cgpa: "8.6 (Grade A)",
        },
        {
            school: "St Xavier’s High School, Bhadrak, Odisha (CBSE)",
            degree: "10th",
            period: "Mar 2008 - Feb 2021",
            cgpa: "9.0 (Grade A)",
        },
    ];

    return (
        <section id="education">
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index}>
                    <h3>{edu.school}</h3>
                    <p>{edu.degree}</p>
                    <p>{edu.period}</p>
                    <p>CGPA: {edu.cgpa}</p>
                </div>
            ))}
        </section>
    );
};

export default Education;
