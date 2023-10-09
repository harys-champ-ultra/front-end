const Skills = () => {
    const skillsData = [
        {
            "skill": "Front-end Technologies",
            "items": [
                "HTML/CSS",
                "JavaScript",
                "React",
                "Git/GitHub",
                "Npm/Vite"
            ]
        },
        {
            "skill": "Back-end Technologies",
            "items": [
                "Node.js/Express.js",
                "MySQL",
                "REST API",
                "Apache"
            ]
        },
        {
            "skill": "UX/UI Design",
            "items": [
                "Figma",
                "Interactive Design",
                "Responsive Design",
                "Grid/Flexbox System"
            ]
        }
    ];
    return (
        <div className="wrapper-section">
            <div className="section-content">
                <h2>Skills</h2>
                <hr />
                <div className="content-grid triple">
                    {skillsData.map((sData) => (
                        <ul key={sData.skill}>
                            <li className="bold">{sData.skill}</li>
                            {sData.items.map((iData) => (
                                <li key={iData}>{iData}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
