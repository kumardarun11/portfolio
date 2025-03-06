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
                    <li><a href="#internship">Internships</a></li>
                    <li><a href="#certification">Certifications</a></li>
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
                            <p><strong>School Year:</strong> 2020</p>
                        </div>
                        <div className="education-card">
                            <h3>Senior Secondary Education (12th Grade)</h3>
                            <p><strong>School:</strong> Guru Teg Bahadur Public School, Durgapur, West Bengal</p>
                            <p><strong>School Year:</strong> 2022</p>
                        </div>
                        <div className="education-card">
                            <h3>Bachelor of Technology in Computer Science Engineering (UG)</h3>
                            <p><strong>University:</strong> Techno India University, Kolkata, West Bengal</p>
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
                            <i className="fab fa-python"></i>
                            <h3>Python Libraries</h3>
                            <p>NumPy, Pandas, Matplotlib, Plotly.express, Streamlit</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-globe"></i>
                            <h3>Web Development</h3>
                            <p>HTML, CSS, JavaScript, PHP</p>
                        </div>
                        <div className="skill-item">
                            <i className="fab fa-js"></i>
                            <h3>JavaScript Libraries</h3>
                            <p>React.js, Node.js</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-database"></i>
                            <h3>Databases & OS</h3>
                            <p>MySQL, SQL</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-tools"></i>
                            <h3>IDEs & Tools</h3>
                            <p>VS Code, Jupyter Lab, Excel, Power BI</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-desktop"></i>
                            <h3>Operating Systems</h3>
                            <p>Windows, Linux</p>
                        </div>

                        <div className="skill-item">
                            <i className="fas fa-cogs"></i>
                            <h3>Concepts</h3>
                            <p>Data Structures & Algorithms</p>
                            <p>Object Oriented Programming</p>
                        </div>
                        <div className="skill-item">
                            <i className="fas fa-user-check"></i>
                            <h3>Soft Skills</h3>
                            <p>Problem Solving, Analytical Thinking, Team Collaboration, Time Management</p>
                        </div>
                    </div>
                </section>

                <section id="projects" className="section">
                    <h1>Projects</h1>
                    <div className="project-grid">
                    <a href="https://github.com/kumardarun11/dksalesdashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-card">

                            <h3>Interactive Data Dashboard <a href="https://dksalesdashboard.streamlit.app/" style={{ textDecoration: 'none', color: 'inherit' }}>(Live Demo)</a></h3>
                            <p>
                                <strong>Problem Statement:</strong> Designed an interactive dashboard to analyze sales trends and automate reporting.
                            </p>
                            <p><strong>Technologies Used:</strong> Excel, Python (Pandas, Plotly), SQL</p>
                            <p><strong>Key Features:</strong></p>
                            <ul>
                                <li>Interactive charts and graphs for data visualization</li>
                                <li>SQL-based data extraction and preprocessing</li>
                                <li>Automated reporting with Python scripts</li>
                            </ul>
                            
                        </div>
                        </a>
                        <a href="https://github.com/kumardarun11/dkks_lms" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-card">
                            <h3>Library Management System</h3>
                            <p>
                                <strong>Problem Statement:</strong> Developed a Library Management System to streamline book management, borrowing, and return processes.
                                </p>
                                <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, PHP, MySQL</p>
                                <p><strong>Key Features:</strong></p>
                                <ul>
                                    <li>User authentication and role-based access control</li>
                                    <li>Search and filter functionality for books</li>
                                    <li>Real-time inventory tracking for borrowing and returns</li>
                                    </ul>
                        </div>
                        </a>
                        <a href="https://github.com/kumardarun11/dkyttrendsentimentanalysis" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-card">
                            <h3>YouTube Trending Video Analysis with Dashboard</h3>
                            <p>
                                <strong>Problem Statement:</strong> Built an interactive web dashboard to analyze YouTube video trends and engagement metrics.
                            </p>
                            <p><strong>Technologies Used:</strong> Python (Pandas, Matplotlib, Plotly), Streamlit, YouTube API</p>
                            <p><strong>Key Features:</strong></p>
                            <ul>
                                <li>Trending & Engagement Analysis – Tracks views, likes, comments, and engagement rates</li>
                                <li>Sentiment & Visualization – Analyzes comment sentiment using NLP</li>
                                <li>Real-time Search & Reporting – Enables keyword-based video search and CSV export</li>
                            </ul>
                        </div>
                        </a>
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

                <section id="internship" className="section">
                    <h1>Virtual Internships</h1>
                    <div className="internship-grid">
                        <div className="internship-item">
                            <h3>Google Android Developer Virtual Internship</h3>
                            <p>Completed hands-on projects related to Android development, app UI/UX design, and Firebase integration.</p>
                        </div>
                        <div className="internship-item">
                            <h3>Palo Alto Cybersecurity Virtual Internship</h3>
                            <p>Gained insights into network security, threat detection, and cybersecurity best practices.</p>
                        </div>
                        <div className="internship-item">
                            <h3>Google AI-ML Virtual Internship</h3>
                            <p>Worked on AI/ML models, data preprocessing, and predictive analytics using TensorFlow and Python.</p>
                        </div>
                    </div>
                </section>

                <section id="certification" className="section">
                    <h1>Certifications</h1>
                    <div className="certification-grid">
                        <div className="certification-item">
                            <h3>AWS Academy Graduate - AWS Academy Cloud Foundations</h3>
                            <p>Fundamentals of cloud computing with AWS services and best practices.</p>
                        </div>
                        <div className="certification-item">
                            <h3>IBM SkillsBuild - Getting Started with Artificial Intelligence</h3>
                            <p>Introduction to AI concepts, machine learning, and applications.</p>
                        </div>
                        <div className="certification-item">
                            <h3>HackerRank – Frontend (React) Developer</h3>
                            <p>Demonstrated proficiency in React development and frontend skills.</p>
                        </div>
                        <div className="certification-item">
                            <h3>HackerRank – SQL (Intermediate)</h3>
                            <p>Hands-on experience with SQL queries, database management, and optimization.</p>
                        </div>
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
                        <a href="https://kumardarun11.github.io/portfolio/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-download"></i> Resume
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
