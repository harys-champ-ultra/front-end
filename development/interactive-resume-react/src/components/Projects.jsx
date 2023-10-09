const Projects = () => {
    const projectsData = [
        {
            "name": "Text Replier ChatGPT API Extension",
            "url": "https://github.com/harys-champ-ultra/microservices/tree/main/text-replier-chatgpt-extension",
            "languages": "JavaScript, OpenAI API",
            "duration": "Winter 2022",
            "location": "Client Project - Geneva, Switzerland",
            "description": "Worked for Chantal Lang, Former CEO of Projects Informatics and Radio Television Systems(RTS). Chrome extension of ChatGPT OpenAI API that supports multi-language emailreplies. User selects email text,right-clicks, and chooses reply tone: very positive, slightly positive, slightly negative, very negative."
        },
        {
            "name": "Standard File Explorer",
            "url": "https://github.com/harys-champ-ultra/directory-explorer",
            "languages": "JavaScript, React, and Node.js/Express.js",
            "duration": "Fall 2022",
            "location": "Lahore, Pakistan",
            "description": " Build React and Node.js/Express.js web application for managing local directories. Implement Add, Update and Delete features. Clean UI experience to show front-end designing & interaction."
        },
        {
            "name": "Payment Trading System",
            "url": "https://github.com/harys-champ-ultra/payment-trading",
            "languages": "Node.js/Express.js, and MySQL",
            "duration": "Summer 2022",
            "location": "Gujranwala, Pakistan",
            "description": "A web-based application that facilitates secure and efficient payment transactions between users. It allows users to create accounts, deposit funds, execute trades, and withdraw funds."
        },
        {
            "name": "Website Detector Tool",
            "url": "https://github.com/harys-champ-ultra/back-end/tree/main/website-detector-tool",
            "languages": "HTML/CSS, PHP, and MySQL",
            "duration": "Summer 2022",
            "location": "Client Project - Hong Kong, China",
            "description": "Worked for Calv, Tech Interest. Build a tool using PHP and MySQL forthe client, that monitors real-time changes (refresh every selected second given by user). The list of URLs can be updated by the user and stored URL in the database. Also, delete the desired list of URLs from it."
        },
        {
            "name": "Web Animation Banner Ads",
            "url": "https://github.com/harys-champ-ultra/front-end/tree/main/designing/web-banners",
            "languages": "HTML/CSS, JavaScript, and Webkit Animations",
            "duration": "Fall 2021 - Spring 2022 & Spring 2023",
            "location": "Client Project - Singapore",
            "description": "Worked for Beatrice Ng Beatz, Co-Founder at Talents by MYM ImageWorks. Create flex banner animations from PSD to HTML Templates with Webkits animations for different screen layouts."
        },
        {
            "name": "More on GitHub",
            "url": "https://github.com/harys-champ-ultra",
            "languages": "HTML/CSS, JavaScript, ..., Bash, and Bat",
            "duration": "Spring 2021 - Present",
            "location": "Lahore, Pakistan",
            "description": "Check the Computer Science, Front-end, and Back-end Development projects."
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
                            <li>{data.duration}</li>
                            <li className="gray">{data.languages}</li>
                        </ul>
                        <ul>
                            <li className="bold">{data.location}</li>
                            <li>{data.description}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
