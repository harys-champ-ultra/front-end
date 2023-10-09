import ProfilePicture from "../assets/profile.png";

const Head = () => {
    return (
        <div className="wrapper-heading">
            <div className="heading-content">
                <div className="content-description">
                    <h1>Haris Amjad</h1>
                    <a href="https://github.com/harys-champ-ultra" target="_blank" rel="noreferrer">github.com/harys-champ-ultra</a>
                    <p>A software engineer with a passion for creative web development, designing, and passionate mastering <span>front-end technologies</span>, based in Lahore, Pakistan.</p>
                    <p><a href="mailto:harisamjad56@gmail.com" target="_blank" rel="noreferrer">harisamjad56@gmail.com</a></p>
                </div>
                <div className="content-image">
                    <img src={ProfilePicture} alt="Haris Amjad" />
                </div>
            </div>
        </div>
    );
}

export default Head;
