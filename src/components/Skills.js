import React from 'react';

const Skills = () => {
    const skills = [
        "Python",
        "Git",
        "Django Framework",
        "SQL",
        "HTML",
        "CSS",
        "Pandas",
        "Numpy",
        "Matplotlib",
    ];

    return (
        <section>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
