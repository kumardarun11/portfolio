import React, { useState, useEffect } from "react";
import "./App.css";
import profilePic from "./dp.jpeg";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem("darkMode");
        return savedMode === "false" ? false : true; // Default to true if not set
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
        }
    }, [darkMode]);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        document.body.classList.toggle("light-mode", !newMode);
        localStorage.setItem("darkMode", newMode); // Save preference
    };
    

    return (
        <div className={`App ${darkMode ? "dark" : "light"}`}>
            <header className="header">
                <div className="logo"></div>
                <div className="theme-toggle">
                    <input
                        type="checkbox"
                        id="theme-switch"
                        onChange={toggleTheme}
                        checked={darkMode} // Checked when light mode
                    />
                    <label htmlFor="theme-switch" className="toggle">
                        <div className="toggle-bg">
                            <div className="sun"></div>
                            <div className="moon"></div>
                        </div>
                    </label>
                </div>
                <i
                    className="nav-toggle fas fa-bars"
                    onClick={toggleMenu}
                ></i>
                <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#hackathon">Hackathon</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </header>

            <div className="hero-section">
                <img src={profilePic} alt="D Arun Kumar" className="profile-pic" />
                <h1 className="hero-title">
                    Hello, I'm{" "}
                    <a 
                    href="https://www.linkedin.com/in/kumardarun11" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hero-link"
                    >D Arun Kumar
                    </a>
                </h1>
                <p className="hero-subtitle">Aspiring Data Scientist | Problem Solver | Data Enthusiast</p>
            </div>


            <main>
                <section id="about" className="section">
                    <h1>About Me</h1>
                    <div className="project-grid">
                        <div className="project-card">
                        <p>
                        I am a dedicated and motivated Computer Science Engineering student with a strong foundation in programming,
                        algorithms, and software development. I am seeking an entry-level position or internship to apply my knowledge
                        and contribute to the growth and success of an innovative organization.
                        </p>
                        </div>
                    </div>
                </section>

                <section id="education" className="section">
                    <h1>Education</h1>
                    <div className="education-grid">
                        <div className="education-card">
                            <h3>Secondary Education (10th Grade)</h3>
                            <p><strong>School:</strong> Guru Teg Bahadur Public School, Durgapur, West Bengal</p>
                            <p><strong>Percentage:</strong> 83.4%</p>
                            <p><strong>School Year:</strong> 2020</p>
                        </div>
                        <div className="education-card">
                            <h3>Senior Secondary Education (12th Grade)</h3>
                            <p><strong>School:</strong> Guru Teg Bahadur Public School, Durgapur, West Bengal</p>
                            <p><strong>Percentage:</strong> 72.2%</p>
                            <p><strong>School Year:</strong> 2022</p>
                        </div>
                        <div className="education-card">
                            <h3>Bachelor of Technology in Computer Science Engineering (UG)</h3>
                            <p><strong>University:</strong> Techno India University, Kolkata, West Bengal</p>
                            <p><strong>CGPA:</strong> 7.34 (Till Semester 4)</p>
                            <p><strong>Expected Graduation:</strong> 2026</p>
                        </div>
                    </div>
                </section>

                <section id="skills" className="section">
                    <h1>Skills</h1>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <i className="fas fa-code"></i>
                            <h3>Programming Languages</h3>
                            <p>C, C++, Python, Java</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-globe"></i>
                            <h3>Web Development</h3>
                            <p>HTML, CSS, JavaScript, PHP</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-database"></i>
                            <h3>Databases & OS</h3>
                            <p>MySQL, Linux</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-cogs"></i>
                            <h3>Concepts</h3>
                            <p>Data Structures & Algorithms</p>
                            <p>Object Oriented Programming</p>
                        </div>
                    </div>
                </section>

                <section id="projects" className="section">
                    <h1>Projects</h1>
                    <div className="project-grid">
                        <div className="project-card">
                            <h3>Library Management System</h3>
                            <p>
                               <strong>Problem Statement:</strong> Developed a Library Management System to streamline book management, borrowing, and return processes.
                            </p>
                            <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, PHP, MySQL</p>
                        </div>
                    </div>
                </section>

                <section id="hackathon" className="section">
                    <h1>Hackathon</h1>
                    <div className="project-grid">
                    <a href="https://github.com/kumardarun11/hamara-desh-bharat" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-card">
                            <h3>Smart India Hackathon 2024</h3>
                            <p>
                                <strong>Problem Statement:</strong> Collaborated with a team to create a solution for Heritage & Culture using modern web technologies.
                            </p> 
                            <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, PHP, MySQL</p>    
                        </div>
                    </a>
                    </div>
                </section>

                <section id="contact" className="section">
                    <h1>Contact</h1>
                    <p><strong>Address:</strong> 289/263 Bhiringi School Para, Durgapur, West Bengal, 713213</p>
                    <p><strong>Phone:</strong> 7908480527</p>
                    <p><strong>Email:</strong> <a href="mailto:kumardarun11@gmail.com">kumardarun11@gmail.com</a></p>
                    <div className="contact-links">
                        <a href="https://github.com/kumardarun11" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/kumardarun11" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2024 D Arun Kumar. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default App;
