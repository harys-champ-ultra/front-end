import "./App.scss";
import Head from "./components/Head";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Foot from "./components/Foot";

const App = () => {
    return (
        <>
            <Head />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Certificates />
            <Foot />
        </>
    );
}

export default App;
