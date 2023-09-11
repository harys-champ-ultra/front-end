const Education = () => {
    const educationData = [
        {
            "name": "Information Technology University",
            "duration": "2022 - Present",
            "education": "M.S. Computer Science",
            "coursework": [
                "Advance Operating Systems",
                "Cyber Security",
                "Advance Computer Architecture",
                "Computer Vision"
            ]
        },
        {
            "name": "GIFT University",
            "duration": "2017 - 2021",
            "education": "B.S. Software Engineering",
            "coursework": [
                "Web Development",
                "Introduction to Database Systems",
                "Human-Computer Interaction",
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
                {educationData.map((data) => (
                    <div className="content-grid triple" key={data.name}>
                        <ul>
                            <li className="big bold">{data.name}</li>
                            <li>{data.duration}</li>
                        </ul>
                        <ul>
                            <li className="bold">{data.education}</li>
                        </ul>
                        <ul>
                            <li className="bold">Coursework</li>
                            <li>{data.coursework[0]}</li>
                            <li>{data.coursework[1]}</li>
                            <li>{data.coursework[2]}</li>
                            <li>{data.coursework[3]}</li>
                            <li>{data.coursework[4]}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
