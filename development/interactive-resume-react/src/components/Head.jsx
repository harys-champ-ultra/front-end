import ProfilePicture from "../assets/profile.png";

const Head = () => {
    return (
        <div className="wrapper-heading">
            <div className="heading-content">
                <div className="content-description">
                    <h1>Haris Amjad</h1>
                    <a href="https://github.com/harys-champ-ultra" target="_blank" rel="noreferrer">github.com/harys-champ-ultra</a>
                    <p>A software engineer with a passion of creative web development, designing, and for mastering <span>front-end technologies</span>.</p>
                </div>
                <div className="content-image">
                    <img src={ProfilePicture} alt="Haris Amjad" />
                </div>
            </div>
        </div>
    );
}

export default Head;
