import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aboutImage from "../../assets/aboutImage.jpg";
import resume from "../../assets/Resume.pdf";
import "./about.css";

const About = () => {
    return (
        <div id="about" className="about-container">
            <p className="about-title">About me</p>
            <div className="about">
                <div className="image-about">
                    <img src={aboutImage} alt="About Image" />
                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                </div>
                <div className="about-content">
                    <p>
Hello! I’m Mayank Srivastava, a Software Developer from Raebareli, Uttar Pradesh. I’m passionate about building scalable, user-focused web applications and solving real-world problems through technology.                    </p>
                    <p>
With a strong foundation in full-stack development and experience working with modern technologies, I enjoy turning ideas into impactful digital solutions. I’m always eager to explore new technologies, take on challenging projects, and continuously grow as a developer.                    </p>
                    <p>
I’m driven by curiosity, consistency, and a commitment to keep learning, building, and improving every day.                    </p>
                    <p>
                        Here are a few of the technologies I have been working with recently:
                    </p>
                    <div className="tech">
                        <div className="tech-item">
                            <ul>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="tech-item">
                            <ul>
                                <li>Express.js</li>
                                <li>Postgre Sql</li>
                                <li>Java</li>
                            </ul>
                        </div>
                    </div>
                    <div className="button">
                        <a href={resume} className="btn-download" download="Mayank Resume.pdf">
                            Download Resume
                        </a>
                        <a href="#contact" className="btn-talk">
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
