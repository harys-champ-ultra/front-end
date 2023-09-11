const Experience = () => {
    const experienceData = [
        {
            "name": "Freelance",
            "duration": "2021 - Present",
            "role": "Full-stack Developer",
            "details": "Spearheaded front-end and back-end tasks for web apps. Collaborated cross-functionally to deliver captivating digital solutions. Translated design concepts to responsive user experiences."
        },
        {
            "name": "Information Technology University",
            "duration": "2022 - 2023",
            "role": "Teaching Assistant - Web Development",
            "details": "Help students troubleshoot technical issues they encounter while working on web development projects. Offer guidance on using development tools, software, and frameworks commonly used in web development."
        }
    ];
    return (
        <div className="wrapper-section">
            <div className="section-content">
                <h2>Experience</h2>
                <hr />
                {experienceData.map((data) => (
                    <div className="content-grid double" key={data.name}>
                        <ul>
                            <li className="big bold">{data.name}</li>
                            <li>{data.duration}</li>
                        </ul>
                        <ul>
                            <li className="bold">{data.role}</li>
                            <li>{data.details}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
