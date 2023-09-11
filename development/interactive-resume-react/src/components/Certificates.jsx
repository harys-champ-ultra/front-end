const Certificates = () => {
    const certificatesData = [
        {
            "name": "Technical Workshop (UrFU + TUB)",
            "year": 2020,
            "institute": "GIFT University"
        },
        {
            "name": "Full-Stack Development",
            "year": 2021,
            "institute": "Arfa Trainings"
        },
        {
            "name": "Robot Operating System",
            "year": 2022,
            "institute": "Information Technology University"
        }
    ];
    return (
        <div className="wrapper-section">
            <div className="section-content">
                <h2>Certificates & Honors</h2>
                <hr />
                {certificatesData.map((data) => (
                    <div className="content-grid double" key={data.name}>
                        <ul>
                            <li className="big bold">{data.name}</li>
                            <li>{data.year}</li>
                        </ul>
                        <ul>
                            <li className="bold">Institute</li>
                            <li>{data.institute}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificates;
