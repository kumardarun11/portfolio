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
                <p className="hero-subtitle"> AI/ML Developer | Full Stack Developer | Cloud & IoT Enthusiast</p>
            </div>


            <main>
                <section id="about" className="section">
                    <h1>About Me</h1>
                    <div className="project-grid">
                        <div className="project-card">
                        <p>
                        I am a <strong>Computer Science Engineering graduate</strong> passionate
            about building <strong>intelligent software solutions</strong> powered
            by Artificial Intelligence and modern technologies.
            My interests span <strong>Artificial Intelligence, Machine
            Learning, Deep Learning, Agentic AI, and Retrieval-Augmented
            Generation (RAG)</strong>, along with <strong>Full Stack
            Development</strong> and <strong>IoT-driven intelligent systems</strong>.
            I enjoy transforming ideas into practical applications by combining
            <strong> software engineering, AI capabilities, and scalable
            backend architectures</strong>. I am continuously exploring
            emerging technologies and developing solutions
            that address <strong>real-world challenges</strong>.
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
                            <h3>Bachelor of Technology in Computer Science and Engineering</h3>
                            <p><strong>University:</strong> Techno India University, Kolkata, West Bengal</p>
                            <p><strong>Graduation Year:</strong> 2026</p>
                        </div>
                    </div>
                </section>

                <section id="skills" className="section">
                    <h1>Skills</h1>
                    <div className="skills-grid">
                    
                        <div className="skill-item">
                            <i className="fas fa-code"></i>
                            <h3>Programming Languages</h3>
                            <p>Python, Java, C, C++, JavaScript, TypeScript, PHP, SQL</p>
                        </div>
                    
                        <div className="skill-item">
                            <i className="fab fa-python"></i>
                            <h3>AI, ML & Python Libraries</h3>
                            <p>NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, Keras, OpenCV, Matplotlib, Seaborn, Plotly, Streamlit</p>
                        </div>
                    
                        <div className="skill-item">
                            <i className="fas fa-globe"></i>
                            <h3>Frontend Development</h3>
                            <p>HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Flutter, Tailwind CSS, Bootstrap</p>
                        </div>
                    
                        <div className="skill-item">
                            <i className="fab fa-js"></i>
                            <h3>Backend Development</h3>
                            <p>Node.js, Express.js, FastAPI, Laravel, Django, Flask</p>
                        </div>
                    
                        <div className="skill-item">
                            <i className="fas fa-brain"></i>
                            <h3>Generative AI & Agentic AI</h3>
                            <p>LangChain, Hugging Face, FAISS, RAG, Large Language Models (LLMs), OpenAI</p>
                        </div>
                    
                        <div className="skill-item">
                            <i className="fas fa-database"></i>
                            <h3>Databases</h3>
                            <p>MySQL, PostgreSQL, MongoDB, SQLite, SQL Server</p>
                        </div>
                    
                        <div className="skill-item">
                            <i className="fas fa-cloud"></i>
                            <h3>Cloud & DevOps</h3>
                            <p>AWS, Google Cloud, Firebase, Docker, Kubernetes, Git, GitHub, GitHub Actions</p>
                        </div>
                    
                        <div className="skill-item">
                            <i className="fas fa-microchip"></i>
                            <h3>IoT & Embedded Systems</h3>
                            <p>ESP32, Arduino, Raspberry Pi</p>
                        </div>
                    
                        <div className="skill-item">
                            <i className="fas fa-tools"></i>
                            <h3>Tools & Platforms</h3>
                            <p>VS Code, Jupyter Notebook, JupyterLab, Postman, Swagger, Power BI, Excel, Selenium, Playwright</p>
                        </div>
                    
                        <div className="skill-item">
                            <i className="fas fa-desktop"></i>
                            <h3>Operating Systems</h3>
                            <p>Windows, Linux</p>
                        </div>
                    
                        <div className="skill-item">
                            <i className="fas fa-cogs"></i>
                            <h3>Core Concepts</h3>
                            <p>Data Structures & Algorithms, Object-Oriented Programming, REST APIs, Machine Learning, Deep Learning</p>
                        </div>
                    
                        <div className="skill-item">
                            <i className="fas fa-user-check"></i>
                            <h3>Soft Skills</h3>
                            <p>Problem Solving, Analytical Thinking, Team Collaboration, Critical Thinking, Time Management</p>
                        </div>
                    
                    </div>
                </section>

                <section id="internship" className="section">
                    <h1>Internships</h1>
                    <div className="internship-grid">

                        <div className="internship-item">
                            <h3>Research & Development Intern – IIIT Guwahati</h3>
                            <p>
                                Worked on AI/ML-based legal document analysis and
                                classification, applying Natural Language Processing,
                                semantic analysis, and machine learning techniques.
                                Conducted research and experimental evaluation,
                                contributing to a research paper.
                            </p>
                            <p><strong>Duration:</strong> January 2026 – June 2026</p>
                        </div>

                        <div className="internship-item">
                            <h3>Data Visualization Intern | Infosys Springboard</h3>
                            <p>
                                Developed HotelRevAI, an AI-driven hotel revenue
                                analytics platform featuring guest segmentation,
                                booking cancellation prediction, revenue forecasting,
                                and interactive dashboards for data-driven decision-making.
                            </p>
                            <p><strong>Technologies:</strong> Python, Pandas, NumPy,
                                Scikit-learn, Statsmodels, Streamlit, Power BI</p>
                            <p><strong>Duration:</strong> August 2025 – October 2025</p>
                        </div>
                    </div>
                </section>

                <section id="projects" className="section">
                    <h1>Projects</h1>
                    <div className="project-grid">
                    {/* 1. Agentic Legal AI */}
                    <a href="https://github.com/kumardarun11/agentic_legal_ai" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-card">
                            <h3>Agentic Legal AI – Multi-Agent Legal Intelligence System</h3>
                            <p>
                                <strong>Problem Statement:</strong> Developed a document-first legal intelligence platform that combines Retrieval-Augmented Generation (RAG), controlled agentic reasoning, and statute-aware analysis to provide explainable legal assistance while minimizing hallucinations through strict document grounding.
                            </p>
                            <p><strong>Tech Stack:</strong></p>
                            <ul className="tech-stack">
                                <li>🟢 <strong>Frontend:</strong> React.js, TypeScript</li>
                                <li>🔵 <strong>Backend:</strong> Python, FastAPI</li>
                                <li>🟡 <strong>AI/ML:</strong> PyTorch, Transformers, Sentence Transformers</li>
                                <li>🟠 <strong>RAG & Vector Search:</strong> FAISS, Semantic Search, Embeddings</li>
                                <li>🟣 <strong>Database:</strong> PostgreSQL, SQLAlchemy</li>
                                <li>⚫ <strong>Document Processing:</strong> PyMuPDF, PyPDF2, Tesseract OCR</li>
                                <li>🔴 <strong>Deployment:</strong> Docker</li>
                            </ul>
                            <p><strong>Key Features:</strong></p>
                            <ul>
                                <li>Document-grounded legal question answering using RAG</li>
                                <li>Multi-agent architecture with retrieval, analysis, compliance, and drafting agents</li>
                                <li>Explainable agentic reasoning with inspectable execution traces</li>
                                <li>BNS statutory compliance verification with false-positive prevention</li>
                                <li>Separate criminal and civil legal analysis workflows</li>
                                <li>Criminal intelligence engine with structured FIR analysis and risk evaluation</li>
                                <li>Civil intelligence engine for contract clause detection and risk insights</li>
                                <li>Multi-document processing with fast and AI-assisted modes</li>
                                <li>Document-grounded legal draft generation with PDF/DOCX export</li>
                            </ul>
                        </div>
                    </a>
                    <a href="https://github.com/kumardarun11/drug_recommendation_system" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="project-card">
                        <h3>Drug Analysis & Recommendation System <a href="https://drugrecommendationsystem11.streamlit.app/" style={{ textDecoration: 'none', color: 'inherit' }}>(Live Demo)</a></h3>
                        <p>
                            <strong>Problem Statement:</strong> Built an advanced AI-powered medical dashboard using Streamlit and Machine Learning to offer intelligent drug recommendations, real-time sentiment analysis from patient reviews, and interactive data visualizations to support patients and healthcare professionals.
                        </p>
                        {/* Tech Stack Section */}
                        <p><strong>Tech Stack:</strong></p>
                        <ul className="tech-stack">
                            <li>🟢 <strong>Frontend:</strong> Streamlit (Dark Neon UI with Glassmorphism)</li>
                            <li>🔵 <strong>Backend:</strong> Python, Pandas, BeautifulSoup</li>
                            <li>🟡 <strong>AI/NLP:</strong> Scikit-learn, TextBlob</li>
                            <li>🟠 <strong>Visualization:</strong> Plotly, Power BI</li>
                            <li>🟣 <strong>Tools:</strong> VS Code, Session State, Web Scraping</li>
                        </ul>
                        <p><strong>Key Features:</strong></p>
                        <ul>
                            <li>Personalized drug recommendations using ML models</li>
                            <li>Real-time sentiment analysis from user reviews</li>
                            <li>Interactive dashboards using Plotly & Power BI</li>
                            <li>Time series forecasting for drug ratings and trends</li>
                            <li>AI-powered medical chatbot for user queries</li>
                            <li>Daily health tips and curated medical resource links</li>
                        </ul>
                    </div>
                    </a>
                    <a href="https://assetflow-ashen.vercel.app/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-card">
                            <h3>AssetFlow – Enterprise Asset & Resource Management System</h3>
                            <p>
                                <strong>Problem Statement:</strong> Developed a full-stack enterprise asset management platform to digitize the complete lifecycle of organizational assets, including registration, allocation, transfers, bookings, maintenance, returns, auditing, and disposal through a centralized role-based system.
                            </p>
                            <p><strong>Tech Stack:</strong></p>
                            <ul className="tech-stack">
                                <li>🟢 <strong>Frontend:</strong> React 19, TypeScript, Tailwind CSS</li>
                                <li>🔵 <strong>Backend:</strong> Python 3.11, FastAPI</li>
                                <li>🟡 <strong>Database:</strong> TiDB Cloud (MySQL-compatible)</li>
                                <li>🟠 <strong>ORM & API:</strong> SQLAlchemy, REST APIs, Axios</li>
                                <li>🟣 <strong>Authentication:</strong> JWT, Role-Based Access Control</li>
                                <li>⚫ <strong>Deployment:</strong> Vercel, Render</li>
                            </ul>
                            <p><strong>Key Features:</strong></p>
                            <ul>
                                <li>Centralized asset and inventory management</li>
                                <li>Asset allocation, transfers, and return tracking</li>
                                <li>Resource booking and maintenance management</li>
                                <li>Department, category, and user management</li>
                                <li>Audit management and discrepancy tracking</li>
                                <li>Activity logs and notification management</li>
                                <li>Role-based access for four user roles</li>
                                <li>Interactive dashboard and analytics</li>
                                <li>Production deployment with cloud database integration</li>
                            </ul>
                            {/* <p>
                                <a href="https://assetflow-ashen.vercel.app/" style={{ textDecoration: 'none', color: 'inherit' }}>(Live Demo)</a>
                                {" | "}
                                <a href="https://assetflow-backend-hruj.onrender.com/docs" style={{ textDecoration: 'none', color: 'inherit' }}>(API Documentation)</a>
                            </p> */}
                        </div>
                    </a>
                    <a href="https://github.com/kumardarun11/JCFlix-Fresh" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-card">
                            <h3>JCFlix – AI-Powered Jackie Chan Movie Recommendation Platform</h3>
                            <p>
                                <strong>Problem Statement:</strong> Developed a personalized movie discovery and recommendation platform dedicated to Jackie Chan's film collection, combining content-based filtering, collaborative recommendations, and user-specific movie management through an interactive streaming-style interface.
                            </p>
                            <p><strong>Tech Stack:</strong></p>
                            <ul className="tech-stack">
                                <li>🟢 <strong>Frontend:</strong> Streamlit, Custom CSS</li>
                                <li>🔵 <strong>Backend:</strong> Python</li>
                                <li>🟡 <strong>Machine Learning:</strong> Scikit-learn, TF-IDF, Cosine Similarity</li>
                                <li>🟠 <strong>Database:</strong> SQLite, Pandas, CSV</li>
                                <li>🟣 <strong>Authentication:</strong> JWT, Bcrypt, Encrypted Cookies</li>
                            </ul>
                            <p><strong>Key Features:</strong></p>
                            <ul>
                                <li>AI-powered movie recommendations using content-based filtering</li>
                                <li>Hybrid recommendations combining similar and random movie suggestions</li>
                                <li>Collaborative filtering based on watch history and movie genres</li>
                                <li>Genre-based movie discovery and search</li>
                                <li>User registration, login, and persistent authentication</li>
                                <li>Personalized watchlist and liked movies management</li>
                                <li>Movie details, posters, ratings, and trailer integration</li>
                                <li>Dark interface with custom gold-themed UI</li>
                            </ul>
                        </div>
                    </a>
                    <a href="https://github.com/kumardarun11/human_resource_management_system" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-card">
                            <h3>Human Resource Management System (HRMS)</h3>
                            <p>
                                <strong>Problem Statement:</strong> Developed a full-stack HR management platform with a Flutter mobile application and Laravel REST API backend to streamline employee administration, attendance tracking, leave workflows, department management, and payroll operations through dedicated Admin and Employee modules.
                            </p>
                            <p><strong>Tech Stack:</strong></p>
                            <ul className="tech-stack">
                                <li>🟢 <strong>Frontend:</strong> Flutter, Dart</li>
                                <li>🔵 <strong>Backend:</strong> PHP, Laravel 12</li>
                                <li>🟡 <strong>Database:</strong> MySQL, Aiven</li>
                                <li>🟠 <strong>API & Authentication:</strong> REST APIs, Laravel Sanctum</li>
                                <li>🟣 <strong>Networking & State Management:</strong> Dio, Provider, Shared Preferences</li>
                                <li>⚫ <strong>Deployment:</strong> Docker, Render</li>
                                <li>🔴 <strong>Testing:</strong> Postman, Android Emulator</li>
                            </ul>
                            <p><strong>Key Features:</strong></p>
                            <ul>
                                <li>Secure authentication, OTP verification, and session restoration</li>
                                <li>Role-based Admin and Employee dashboards</li>
                                <li>Employee and department management</li>
                                <li>Attendance check-in, check-out, and history tracking</li>
                                <li>Leave application, approval, and rejection workflows</li>
                                <li>Payroll management with earnings and deductions</li>
                                <li>Employee profile and account management</li>
                                <li>Production-hosted Laravel REST API with cloud MySQL database</li>
                            </ul>
                        </div>
                    </a>
                    <a href="https://github.com/kumardarun11" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-card">
                            <h3>HotelRevAI – Hotel Revenue Analytics & Forecasting</h3>
                            <p>
                                <strong>Problem Statement:</strong> Developed a machine learning-based hotel analytics platform during the Infosys Springboard internship to analyze booking patterns, identify customer segments, predict cancellations, and generate revenue and occupancy insights for data-driven hospitality management.
                            </p>
                            <p><strong>Tech Stack:</strong></p>
                            <ul className="tech-stack">
                                <li>🟢 <strong>Frontend:</strong> Streamlit</li>
                                <li>🔵 <strong>Backend:</strong> Python</li>
                                <li>🟡 <strong>Data Science:</strong> Pandas, NumPy</li>
                                <li>🟠 <strong>Machine Learning:</strong> Scikit-learn, Statsmodels</li>
                                <li>🟣 <strong>Visualization:</strong> Plotly, Power BI</li>
                            </ul>
                            <p><strong>Key Features:</strong></p>
                            <ul>
                                <li>Hotel booking data analysis and preprocessing</li>
                                <li>Customer segmentation and booking pattern analysis</li>
                                <li>Booking cancellation prediction</li>
                                <li>Revenue forecasting and occupancy analysis</li>
                                <li>Interactive analytics dashboards</li>
                                <li>Data-driven insights for hospitality management</li>
                            </ul>
                        </div>
                    </a>
                    <a href="https://github.com/kumardarun11/dksalesdashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-card">

                            <h3>Interactive Data Dashboard <a href="https://dksalesdashboard.streamlit.app/" style={{ textDecoration: 'none', color: 'inherit' }}>(Live Demo)</a></h3>
                            <p>
                                <strong>Problem Statement:</strong> Designed an interactive dashboard to analyze sales trends and automate reporting.
                            </p>
                            {/* Tech Stack Section */}
                            <p><strong>Tech Stack:</strong></p>
                            <ul className="tech-stack">
                                <li>🟢 <strong>Frontend:</strong> Streamlit, Plotly</li>
                                <li>🔵 <strong>Backend:</strong> Python</li>
                                <li>🟠 <strong>Database:</strong> SQLite, CSV</li>
                                <li>🟡 <strong>Data Science:</strong> Pandas, NumPy, Matplotlib</li>
                                <li>🟣 <strong>Tools:</strong> VS Code, Jupyter Notebook, Streamlit Cloud</li>
                            </ul>
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
                                {/* Tech Stack Section */}
                                <p><strong>Tech Stack:</strong></p>
                                <ul className="tech-stack">
                                    <li>🟢 <strong>Frontend:</strong> HTML, CSS, JavaScript</li>
                                    <li>🔵 <strong>Backend:</strong> PHP</li>
                                    <li>🟠 <strong>Database:</strong> MySQL</li>
                                    <li>🟣 <strong>Tools:</strong> VS Code, XAMPP(Apache Server)</li>
                                </ul>
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
                            <h3>YouTube Trending Video Analysis with Dashboard <a href="https://kd11yttrendsentimentanalysis.streamlit.app/" style={{ textDecoration: 'none', color: 'inherit' }}>(Live Demo)</a></h3>
                            <p>
                                <strong>Problem Statement:</strong> Built an interactive web dashboard to analyze YouTube video trends and engagement metrics.
                            </p>
                            {/* Tech Stack Section */}
                            <p><strong>Tech Stack:</strong></p>
                            <ul className="tech-stack">
                                <li>🟢 <strong>Frontend:</strong> Streamlit, Plotly, Matplotlib, Seaborn</li>
                                <li>🔵 <strong>Backend:</strong> Python, Youtube API</li>
                                <li>🟠 <strong>Database:</strong> CSV Files</li>
                                <li>🟡 <strong>Data Science:</strong> Pandas, TextBlob (Sentiment Analysis), WordCloud</li>
                                <li>🟣 <strong>Tools:</strong> VS Code, Jupyter Notebook, Streamlit Cloud</li>
                            </ul>
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
                    <h1>Hackathons & Competitions</h1>

                    <div className="project-grid">

                        {/* Smart India Hackathon */}
                        <a href="https://github.com/kumardarun11/hamara-desh-bharat"
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="project-card">

                                <h3>Smart India Hackathon 2024 – Hamara Desh Bharat</h3>
                                {/* <p>
                                    <a href="https://kumardarun11.github.io/hamara-desh-bharat/"
                                        target="_blank" rel="noreferrer"
                                        style={{ color: 'inherit' }}>
                                        (Live Demo)
                                    </a>
                                </p>                               */}
                                <p>
                                    <strong>Problem Statement:</strong> Collaborated with a team to develop a digital platform focused on promoting India's heritage and cultural diversity through interactive web technologies and AI-powered assistance.
                                </p>

                                <p><strong>Tech Stack:</strong></p>
                                <ul className="tech-stack">
                                    <li>🟢 <strong>Frontend:</strong> HTML, CSS, JavaScript</li>
                                    <li>🔵 <strong>Backend:</strong> PHP</li>
                                    <li>🟠 <strong>Database:</strong> MySQL</li>
                                    <li>🟣 <strong>Tools:</strong> VS Code, XAMPP, Apache Server</li>
                                </ul>

                                <p><strong>Key Features:</strong></p>
                                <ul>
                                    <li>Exploration of India's cultural diversity and heritage</li>
                                    <li>State-wise cultural insights and historical site information</li>
                                    <li>AI-powered assistance for cultural inquiries</li>
                                    <li>Curated travel information for cultural destinations</li>
                                    <li>Digital initiatives for heritage awareness and preservation</li>
                                </ul>

                            </div>
                        </a>

                        {/* Technothon 2025 */}
                        <div className="project-card">

                            <h3>Technothon 2025 – Bahuballa (AI-Powered IoT Smart Cricket Bat)</h3>

                            <p>
                                <strong>Project Overview:</strong> Led a five-member team to develop Bahuballa, an AI-powered IoT smart cricket bat integrating sensor-based motion tracking, machine learning, and computer vision to analyze batting performance. The system captures swing movements, tracks key performance metrics, and provides data-driven insights for cricket training and performance improvement.
                            </p>

                            <p><strong>Tech Stack:</strong></p>
                            <ul className="tech-stack">
                                <li>🟢 <strong>Hardware & IoT:</strong> ESP32, MPU6050, HMC5883L, LDR, KY-038 Sensors</li>
                                <li>🔵 <strong>Embedded Systems:</strong> Arduino IDE, Embedded C/C++</li>
                                <li>🟡 <strong>AI & Computer Vision:</strong> TensorFlow.js, Python, OpenCV</li>
                                <li>🟠 <strong>Frontend & Dashboard:</strong> React.js, TypeScript, HTML, CSS, JavaScript, Tailwind CSS</li>
                                <li>🟣 <strong>3D Visualization & Simulation:</strong> Unity</li>
                                <li>⚫ <strong>Communication:</strong> WebRTC, Wi-Fi, IoT Protocols</li>
                            </ul>

                            <p><strong>Key Features:</strong></p>
                            <ul>
                                <li>IoT-enabled smart cricket bat with integrated motion and impact sensors</li>
                                <li>Real-time tracking of bat speed, swing dynamics, impact force, and strike angle</li>
                                <li>Sensor-based motion tracking and wireless data transmission</li>
                                <li>AI-powered movement analysis and computer vision-based batting visualization</li>
                                <li>Interactive 3D visualization and simulation of batting movements using Unity</li>
                                <li>Interactive dashboard for live performance monitoring and data visualization</li>
                                <li>Performance insights and intelligent coaching recommendations for players</li>
                            </ul>

                            <p><strong>Role:</strong> Team Lead – Led and coordinated a team of 5 members.</p>

                            <p><strong>Awards & Recognition:</strong></p>
                            <ul>
                                <li>🏆 Best Innovative Idea – IoT Exposition</li>
                                <li>🏆 Sponsor's Choice – AI Unleashed</li>
                            </ul>

                        </div>

                        {/* IHMMC 2026 */}
                        <div className="project-card">

                            <h3>IHMMC 2026 – Stealth Fighter Jet (IoT-Based RC Aircraft)</h3>

                            <p>
                                <strong>Project Overview:</strong> Designed and developed an IoT-enabled remote-controlled aircraft inspired by stealth fighter jet designs, focusing on aerial imaging, remote sensing, and potential applications in terrain mapping and disaster analysis.
                            </p>

                            <p><strong>Tech Stack:</strong></p>
                            <ul className="tech-stack">
                                <li>🟢 <strong>Hardware:</strong> Microcontrollers, Electronic Components, Sensors</li>
                                <li>🔵 <strong>Embedded Systems:</strong> Flight Control Systems, Embedded Programming</li>
                                <li>🟡 <strong>Communication:</strong> Wireless Communication, IoT</li>
                                <li>🟠 <strong>Engineering:</strong> Aerodynamics, Aircraft Design</li>
                                <li>🟣 <strong>Applications:</strong> Aerial Imaging, Remote Sensing</li>
                            </ul>

                            <p><strong>Key Features:</strong></p>
                            <ul>
                                <li>IoT-enabled remote-controlled aircraft development</li>
                                <li>Integration of electronic components and flight-control systems</li>
                                <li>Wireless communication and remote operation</li>
                                <li>Aerial imaging and remote sensing capabilities</li>
                                <li>Application-oriented design for terrain mapping and disaster analysis</li>
                                <li>Practical implementation of aerodynamics and embedded systems concepts</li>
                            </ul>

                            <p><strong>Role:</strong> Participant</p>

                            <p><strong>Achievement:</strong></p>
                            <ul>
                                <li>🏆 Secured a Top 8 position among 200+ participating teams in IHMMC 2026 – International Competition</li>
                            </ul>

                        </div>

                    </div>
                </section>


                <section id="certification" className="section">
                    <h1>Certifications</h1>
                    <div className="certification-grid">

                        <div className="certification-item">
                            <h3>Oracle Cloud Infrastructure 2025 Certified Generative AI Professional</h3>
                            <p>Validated knowledge of generative AI concepts, applications, and Oracle Cloud AI services.</p>
                        </div>

                        <div className="certification-item">
                            <h3>Oracle Cloud Infrastructure 2025 Certified Data Science Professional</h3>
                            <p>Demonstrated skills in data science, machine learning, and building ML solutions using OCI.</p>
                        </div>

                        <div className="certification-item">
                            <h3>Oracle AI Vector Search Certified Professional</h3>
                            <p>Knowledge of vector search, embeddings, and AI-powered semantic search using Oracle Database.</p>
                        </div>

                        <div className="certification-item">
                            <h3>Oracle Cloud Infrastructure 2025 Certified Developer Professional</h3>
                            <p>Validated expertise in developing, deploying, and managing applications on Oracle Cloud Infrastructure.</p>
                        </div>

                        <div className="certification-item">
                            <h3>Oracle Cloud Infrastructure 2025 Certified Architect Associate</h3>
                            <p>Understanding of cloud architecture, infrastructure design, and OCI services.</p>
                        </div>

                        <div className="certification-item">
                            <h3>Oracle Cloud Infrastructure 2025 Certified Networking Professional</h3>
                            <p>Demonstrated knowledge of cloud networking, connectivity, and network security in OCI.</p>
                        </div>

                        <div className="certification-item">
                            <h3>Oracle Certified DevOps Professional</h3>
                            <p>Knowledge of DevOps practices, automation, CI/CD pipelines, and cloud deployment workflows.</p>
                        </div>

                        <div className="certification-item">
                            <h3>AWS Academy Graduate – AWS Academy Cloud Foundations</h3>
                            <p>Fundamentals of cloud computing, AWS services, architecture, security, and best practices.</p>
                        </div>

                        <div className="certification-item">
                            <h3>Docker Foundations Professional – LinkedIn Learning</h3>
                            <p>Understanding of Docker fundamentals, containerization, and container-based application workflows.</p>
                        </div>

                        <div className="certification-item">
                            <h3>IBM SkillsBuild – Getting Started with Artificial Intelligence</h3>
                            <p>Introduction to artificial intelligence concepts, machine learning, and real-world applications.</p>
                        </div>

                        <div className="certification-item">
                            <h3>HackerRank – Frontend Developer (React)</h3>
                            <p>Demonstrated proficiency in React development and frontend programming concepts.</p>
                        </div>

                        <div className="certification-item">
                            <h3>HackerRank – REST API (Intermediate)</h3>
                            <p>Validated skills in working with REST APIs, HTTP methods, and API integration.</p>
                        </div>

                        <div className="certification-item">
                            <h3>HackerRank – SQL (Intermediate)</h3>
                            <p>Demonstrated proficiency in SQL queries, joins, data manipulation, and database operations.</p>
                        </div>

                        <div className="certification-item">
                            <h3>HackerRank – JavaScript (Intermediate)</h3>
                            <p>Validated intermediate JavaScript skills, including functions, ES6+ features, and programming fundamentals.</p>
                        </div>

                        <div className="certification-item">
                            <h3>HackerRank – Software Engineer Intern Certificate</h3>
                            <p>Recognition for technical assessment performance aligned with software engineering internship standards.</p>
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
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>Follow Me</h3>
                        <div className="social-icons">
                            <a href="https://github.com/kumardarun11" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/kumardarun11" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://x.com/kumardarun11" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 D Arun Kumar | Designed & built with ❤️ & React</p>
                </div>
            </footer>
        </div>
    );
}

export default App;