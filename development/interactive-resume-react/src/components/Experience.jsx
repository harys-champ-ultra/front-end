const Experience = () => {
    const experienceData = [
        {
            "name": "Freelance/Agencies",
            "duration": "Feb 2021 - Present",
            "location": "Remote",
            "role": "Full-stack Developer",
            "details": "Create neat and interactive tailored websites. I usually work with agencies, startups, and otherfreelancers such as Talents by MYM ImageWorks, and RADIO TELEVISION SUISSE (RTS)."
        },
        {
            "name": "Student Help",
            "duration": "Fall 2022",
            "location": "Lahore, Pakistan",
            "role": "Teaching Assistant",
            "details": "Help students troubleshoot technical issues they encounter while working on web development projects. Offer guidance on using development tools, software, and frameworks commonly used in web development."
        },
        {
            "name": "Child Protection & Welfare Bureau",
            "duration": "Summer 2019",
            "location": "Gujranwala, Pakistan",
            "role": "Education Tech Leadership Intern",
            "details": "Collaborate with CPWB management and stakeholders to develop a comprehensive computer education program tailored to the specific needs and interests of the rescued children."
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
                            <li className="bold">{data.role} - {data.location}</li>
                            <li>{data.details}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
