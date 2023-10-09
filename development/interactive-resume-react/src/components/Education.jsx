const Education = () => {
    const educationData = [
        {
            "name": "Information Technology University",
            "duration": "Aug 2022 - Present",
            "education": "M.S. Computer Science",
            "coursework": [
                "Advance Algorithm Analysis",
                "Cyber Security",
                "Advance Computer Architecture",
                "Computer Vision",
                "Advance Operating Systems"
            ]
        },
        {
            "name": "GIFT University",
            "duration": "Oct 2017 - Oct 2021",
            "education": "B.S. Software Engineering",
            "coursework": [
                "Web Development",
                "Introduction to Database Systems",
                "Human-Computer Interaction",
                "Artificial Intelligence",
                "Software Design and Architecture",
                "Computer Graphics"
            ]
        }
    ];
    return (
        <div className="wrapper-section">
            <div className="section-content">
                <h2>Education</h2>
                <hr />
                {educationData.map((eData) => (
                    <div className="content-grid triple" key={eData.name}>
                        <ul>
                            <li className="big bold">{eData.name}</li>
                            <li>{eData.duration}</li>
                        </ul>
                        <ul>
                            <li className="bold">{eData.education}</li>
                        </ul>
                        <ul>
                            <li className="bold">Coursework</li>
                            {eData.coursework.map((cwData) => (
                                <li key={cwData}>{cwData}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
