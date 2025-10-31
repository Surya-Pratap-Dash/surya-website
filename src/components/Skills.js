import React from 'react';

// Skill categories
const languages = ["Python", "JavaScript", "SQL", "C/C++", "HTML", "CSS"];
const frameworks = ["Django", "ReactJS", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"];
const mlConcepts = [
    "Linear Regression", 
    "Logistic Regression", 
    "Decision Trees", 
    "Random Forests", 
    "K-Means Clustering",
    "Missing Value Imputation", 
    "Outlier Handling", 
    "Feature Scaling", 
    "One-Hot Encoding"
];
const tools = [
    "Git", 
    "GitHub", 
    "Docker",
    "Jupyter Notebook", 
    "VS Code", 
    "Google Colab", 
    "MLflow", 
    "Hugging Face", 
    "GCP", 
    "MySQL", 
    "SQLite"
];
const analyticalSkills = [
    "Linear Algebra", 
    "Probability & Statistics", 
    "Critical Thinking", 
    "Problem Solving",
    "Research Orientation"
];


const Skills = () => {
    // Helper function to render a list
    const renderSkillList = (title, skills) => (
        <div className="skills-category">
            <h3 className="skills-subtitle">{title}</h3>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            
            <div className="skills-container bd-grid">
                {renderSkillList("Languages", languages)}
                {renderSkillList("Frameworks & Libraries", frameworks)}
                {renderSkillList("Machine Learning", mlConcepts)}
                {renderSkillList("Tools & Platforms", tools)}
                {renderSkillList("Analytical & Mathematical Skills", analyticalSkills)}
            </div>
        </section>
    );
};

export default Skills;