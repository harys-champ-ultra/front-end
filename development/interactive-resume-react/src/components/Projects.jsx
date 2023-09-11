const Projects = () => {
    const projectsData = [
        {
            "name": "Computer Science",
            "url": "https://github.com/harys-champ-ultra/computer-science",
            "languages": "JavaScript, Python, Bash, and Bat",
            "description": "Inside the computer science, explore the logics and coding techniques in iteresting projects."
        },
        {
            "name": "Interactive Resume",
            "url": "https://github.com/harys-champ-ultra/front-end/interactive-resume-react",
            "languages": "React, SCSS",
            "description": "A web-based resume that allows users to explore a dynamic representation of skills, experience, and achievements."
        },
        {
            "name": "Payment Trading System",
            "url": "https://github.com/harys-champ-ultra/payment-trading",
            "languages": "Node.js, Express.js, and MySQL",
            "description": "A web-based application that facilitates secure and efficient payment transactions between users. It allows users to create accounts, deposit funds, execute trades, and withdraw funds."
        }
    ];
    return (
        <div className="wrapper-section">
            <div className="section-content">
                <h2>Projects</h2>
                <hr />
                {projectsData.map((data) => (
                    <div className="content-grid double" key={data.name}>
                        <ul>
                            <li><a href={data.url} target="_blank" rel="noreferrer">{data.name}</a></li>
                            <li>{data.languages}</li>
                        </ul>
                        <ul>
                            <li className="bold">Description</li>
                            <li>{data.description}</li>
                        </ul>
                    </div>
                ))}
                <div className="content-grid">
                    <ul>
                        <li><a href="https://github.com/harys-champ-ultra" target="_blank" rel="noreferrer">More on GitHub</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;
