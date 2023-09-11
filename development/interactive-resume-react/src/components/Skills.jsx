const Skills = () => {
    const skillsData = [
        {
            "skill": "Front-end Technologies",
            "items": [
                "HTML/CSS",
                "JavaScript",
                "TypeScript",
                "React"
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
                "Responsive Design"
            ]
        },
        {
            "skill": "Testing Frameworks",
            "items": [
                "React Testing Library"
            ]
        },
        {
            "skill": "Version Control",
            "items": [
                "Git/GitHub"
            ]
        },
        {
            "skill": "Build Tools",
            "items": [
                "Npm/Vite"
            ]
        }
    ];
    return (
        <div className="wrapper-section">
            <div className="section-content">
                <h2>Skills</h2>
                <hr />
                <div className="content-grid triple">
                    {skillsData.map((data) => (
                        <ul key={data.skill}>
                            <li className="bold">{data.skill}</li>
                            <li>{data.items[0]}</li>
                            <li>{data.items[1]}</li>
                            <li>{data.items[2]}</li>
                            <li>{data.items[3]}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
