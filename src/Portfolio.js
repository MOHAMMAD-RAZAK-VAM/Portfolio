import { useState, useEffect, useRef, useCallback } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Menu, X, Code, Briefcase, GraduationCap, User, Star, Sparkles } from 'lucide-react';
import './App.css';
import logo1 from './profilepic.jpg'; 
import logo from './logo.png';

const navItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'education', label: 'Education', icon: GraduationCap }
];

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  
  const containerRef = useRef(null);

  const personalInfo = {
    name: "Mohammad Razak Abdul Rasheeth",
    title: "Full-Stack Developer",
    subtitle: "Software Engineer | Skilled in JavaScript, React, Node.js, Java, Express & MongoDB",
    description: "👋 Hi, I'm Mohammad Razak, a full-stack developer passionate about building impactful, user-first web and mobile solutions. I specialize in MERN and React/Node.js with specialty in authentication, real-time systems, and deployment on zero-cost platforms.",
    location: "Coimbatore, Tamil Nadu, India",
    email: "mrazak338@gmail.com",
    linkedin: "https://linkedin.com/in/mohammadrazak-abdulrasheeth",
    github: "https://github.com/MohammadRazak-AbdulRasheeth"
  };

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Redux",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Material UI",
      "Tailwind CSS",
      "Next.js",
      "React Router"
    ],
    icon: "🎨"
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "RESTful APIs",
      "Socket.io",
      "JWT Authentication",
      "Java",
      "Spring Boot",
      "Python",
      "Flask"
    ],
    icon: "⚙️"
  },
  {
    category: "Database & SQL",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Prisma ORM",
      "Firebase",
      "Redis"
    ],
    icon: "🗄️"
  },
  {
    category: "AI, Data & ML",
    items: [
      "Prompt Engineering",
      "Generative AI",
      "Agentic AI",
      "LangChain",
      "LLM Integration",
      "RAG (Retrieval-Augmented Generation)",
      "Python for AI/ML",
      "Kaggle",
      "Google Colab"
    ],
    icon: "🤖"
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Microsoft Azure",
      "Docker",
      "CI/CD Basics",
      "Server Deployment",
      "Cloud Hosting"
    ],
    icon: "☁️"
  },
  {
    category: "Tools & Deployment",
    items: [
      "Git",
      "GitHub",
      "Netlify",
      "Vercel",
      "Heroku",
      "Railway",
      "Google APIs"
    ],
    icon: "🚀"
  },
  {
    category: "SEO & Growth",
    items: [
      "Technical SEO",
      "On-Page SEO",
      "Performance Optimization",
      "Web Analytics",
      "Page Speed Optimization"
    ],
    icon: "📈"
  },
  {
    category: "Freelancing & Business",
    items: [
      "Client Communication",
      "Requirement Analysis",
      "Project Estimation",
      "Proposal Writing",
      "Freelance Project Management",
      "Startup Consulting"
    ],
    icon: "💼"
  }
];


  const projects = [
    {
      title: "Raz Insurance",
      description: "A sleek insurance platform enabling users to buy, manage, and verify policies and coverage online.",
      features: ["Full-stack with React, Redux, Node, Express & PostgreSQL via Prisma ORM", "Customer/admin roles with JWT-based auth & admin approval flows", "Responsive design and SEO-friendly PWA"],
      tech: ["React", "Redux", "Node.js", "PostgreSQL", "Prisma"],
      liveUrl: "https://razinsurance.netlify.app/",
      githubUrl: "https://github.com/MohammadRazak-AbdulRasheeth",
      status: "Production Ready",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "RazChatz",
      description: "A real-time chat application built with React and Socket.io.",
      features: ["Instant messaging, seen/delivered statuses, emoji picker", "JWT authentication, Web Notifications, PWA optimized", "Installable mobile experience"],
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveUrl: "https://razchatz.netlify.app/",
      githubUrl: "https://github.com/MohammadRazak-AbdulRasheeth",
      status: "Live",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Placement Training System",
      description: "An end-to-end placement prep suite for students and TPOs.",
      features: ["MERN stack with MongoDB and Express", "Google Sheets API for live job data", "Role-based dashboards, quizzes, video lessons"],
      tech: ["React", "Node.js", "MongoDB", "Firebase"],
      liveUrl: "https://pts-by-razak.netlify.app",
      githubUrl: "https://github.com/MohammadRazak-AbdulRasheeth",
      status: "Live",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Interius India",
      description: "A professional interior design company website showcasing services and portfolio.",
      features: ["Modern responsive design with smooth animations", "Service showcase with detailed galleries", "SEO optimized for local visibility"],
      tech: ["React", "CSS3", "SEO", "Responsive"],
      liveUrl: "https://interiusindia.in",
      githubUrl: "https://github.com/MohammadRazak-AbdulRasheeth",
      status: "Live",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "TVK Canada Family",
      description: "A community platform connecting Tamil families in Canada.",
      features: ["Community event management", "Member directory and networking", "Cultural resources and news"],
      tech: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://tvkcanada.family",
      githubUrl: "https://github.com/MohammadRazak-AbdulRasheeth",
      status: "Live",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const experience = [
    { company: "ValueMomentum", position: "Software Engineer Intern", duration: "Feb 2025 - Jul 2025", location: "Coimbatore, Tamil Nadu", type: "On-site", description: "Working with Microsoft Azure and developing scalable software solutions.", achievements: ["Developing enterprise-level applications", "Working with cloud technologies", "Collaborating with cross-functional teams"] },
    { company: "ValueMomentum", position: "Software Engineer", duration: "Jul 2025 - Present", location: "Coimbatore, Tamil Nadu", type: "On-site", description: "Working with Spring-Boot, Microservices, Hibernate, RESTful Api, Docker, AWS, Kafka", achievements: ["Developing enterprise-level applications", "Working with cloud technologies", "Collaborating with cross-functional teams"] }
  ];

  const education = [
    { institution: "KG College of Arts and Science", degree: "Bachelor of Computer Application", duration: "Jul 2022 - May 2025", location: "Coimbatore, Tamil Nadu", specialization: "React.js, Node.js, MongoDB, Express.js" },
    { institution: "G.K.D Matric Higher Secondary School", degree: "Higher Secondary Education", duration: "2020 - 2022", location: "Tamil Nadu, India" }
  ];

  const achievements = [
    "Launched multiple production-ready apps on no-cost hosting",
    "Built admin workflows for policy/coverage approvals",
    "Synchronized dynamic job data via Google Sheets API",
    "Engineered real-time chat with seen indicators and notifications",
    "Enhanced UX with responsive design, PWA install prompts"
  ];

  // Scroll handler with progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScroll / docHeight) * 100);
      
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll reveal
  const observerCallback = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisibleSections(prev => new Set([...prev, entry.target.dataset.reveal]));
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [observerCallback]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const getParallaxStyle = (speed) => ({ transform: `translateY(${scrollY * speed}px)` });

  return (
    <div className="portfolio-container" ref={containerRef}>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Animated Background */}
      <div className="parallax-bg">
        <div className="parallax-layer parallax-layer-1" style={getParallaxStyle(0.05)} />
        <div className="parallax-layer parallax-layer-2" style={getParallaxStyle(0.1)} />
        <div className="parallax-layer parallax-layer-3" style={getParallaxStyle(0.15)} />
        <div className="mesh-gradient" />
      </div>

      {/* Floating Orbs */}
      <div className="floating-orbs">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`orb orb-${i + 1}`} />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`nav ${scrollY > 50 ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <div className="desktop-nav">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button key={item.id} onClick={() => scrollToSection(item.id)} 
                    className={`nav-button ${activeSection === item.id ? 'nav-button-active' : ''}`}>
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button" aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mobile-nav">
            {navItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <button key={item.id} onClick={() => scrollToSection(item.id)} 
                  className={`mobile-nav-button ${activeSection === item.id ? 'active' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}>
                  <Icon size={20} /><span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.3}px)`, opacity: Math.max(0, 1 - scrollY / 500) }}>
          <div className={`hero-badge ${visibleSections.has('hero-badge') ? 'visible' : ''}`} data-reveal="hero-badge">
            <Sparkles size={16} />
            <span>Available for opportunities</span>
          </div>
          
          <div className="profile-wrapper">
            <div className="profile-ring profile-ring-1" />
            <div className="profile-ring profile-ring-2" />
            <div className="profile-ring profile-ring-3" />
            <div className="profile-image-container">
              <img src={logo1} alt="Mohammad Razak" className="profile-image" />
              <div className="profile-status">
                <span className="status-dot" />
              </div>
            </div>
          </div>

          <h1 className="hero-title">
            <span className="title-line title-line-1">
              {personalInfo.name.split(' ')[0]}
            </span>
            <span className="title-line title-line-2">
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <p className="hero-subtitle">{personalInfo.subtitle}</p>

          <div className="hero-cta">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cta-button cta-primary"
              >
              <Linkedin size={20} />
              <span>LinkedIn</span>
              <div className="button-shine" />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="cta-button cta-secondary"
              >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="cta-button cta-outline"
              >
              <Mail size={20} />
              <span>Contact</span>
            </a>
          </div>
        </div>

        <button onClick={() => scrollToSection('about')} className="scroll-indicator" aria-label="Scroll down">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line">
            <div className="scroll-dot" />
          </div>
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-container">
          <div className={`section-header ${visibleSections.has('about-title') ? 'visible' : ''}`} data-reveal="about-title">
            <span className="section-number">01</span>
            <h2 className="section-title">About Me</h2>
            <div className="section-line" />
          </div>

          <div className="about-content">
            <div className={`about-text ${visibleSections.has('about-text') ? 'visible' : ''}`} data-reveal="about-text">
              <p className="about-description">{personalInfo.description}</p>
              <div className="location-badge">
                <MapPin size={18} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className={`achievements-grid ${visibleSections.has('achievements') ? 'visible' : ''}`} data-reveal="achievements">
              <h3 className="subsection-title">
                <Star size={20} />
                Key Achievements
              </h3>
              {achievements.map((item, i) => (
                <div key={i} className="achievement-item" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="achievement-icon">✦</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`skills-section ${visibleSections.has('skills') ? 'visible' : ''}`} data-reveal="skills">
            <h3 className="subsection-title">
              <Code size={20} />
              Tech Stack
            </h3>
            <div className="skills-grid">
              {skills.map((group, i) => (
                <div key={i} className="skill-card" style={{ animationDelay: `${i * 0.15}s` }}
                  >
                  <div className="skill-card-header">
                    <span className="skill-icon">{group.icon}</span>
                    <h4>{group.category}</h4>
                  </div>
                  <div className="skill-tags">
                    {group.items.map((skill, j) => (
                      <span key={j} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="skill-card-glow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-dark">
        <div className="section-container">
          <div className={`section-header ${visibleSections.has('exp-title') ? 'visible' : ''}`} data-reveal="exp-title">
            <span className="section-number">02</span>
            <h2 className="section-title">Experience</h2>
            <div className="section-line" />
          </div>

          <div className="timeline">
            {experience.map((exp, i) => (
              <div key={i} className={`timeline-item ${visibleSections.has(`exp-${i}`) ? 'visible' : ''}`} 
                data-reveal={`exp-${i}`} style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="timeline-marker">
                  <div className="marker-dot" />
                  <div className="marker-line" />
                </div>
                <div className="timeline-content"
                  >
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-title">{exp.position}</h3>
                      <p className="timeline-company">{exp.company}</p>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-date">{exp.duration}</span>
                      <span className="timeline-location">{exp.location}</span>
                    </div>
                  </div>
                  <p className="timeline-description">{exp.description}</p>
                  <ul className="timeline-achievements">
                    {exp.achievements.map((a, j) => (
                      <li key={j}><span className="bullet">→</span>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-container">
          <div className={`section-header ${visibleSections.has('proj-title') ? 'visible' : ''}`} data-reveal="proj-title">
            <span className="section-number">03</span>
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-line" />
          </div>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <div key={i} className={`project-card ${visibleSections.has(`proj-${i}`) ? 'visible' : ''}`}
                data-reveal={`proj-${i}`} style={{ animationDelay: `${i * 0.1}s` }}
                >
                <div className="project-card-bg" />
                <div className="project-card-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-status">{project.status}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-features">
                    {project.features.map((f, j) => (
                      <li key={j}><span>•</span>{f}</li>
                    ))}
                  </ul>
                  <div className="project-tech">
                    {project.tech.map((t, j) => (
                      <span key={j} className="tech-badge">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link primary">
                      <ExternalLink size={16} /><span>Live Demo</span>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                      <Github size={16} /><span>Source</span>
                    </a>
                  </div>
                </div>
                <div className="project-card-shine" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section section-dark">
        <div className="section-container">
          <div className={`section-header ${visibleSections.has('edu-title') ? 'visible' : ''}`} data-reveal="edu-title">
            <span className="section-number">04</span>
            <h2 className="section-title">Education</h2>
            <div className="section-line" />
          </div>

          <div className="education-grid">
            {education.map((edu, i) => (
              <div key={i} className={`education-card ${visibleSections.has(`edu-${i}`) ? 'visible' : ''}`}
                data-reveal={`edu-${i}`} style={{ animationDelay: `${i * 0.2}s` }}
                >
                <div className="education-icon">
                  <GraduationCap size={32} />
                </div>
                <div className="education-content">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  {edu.specialization && <p className="education-spec">Focus: {edu.specialization}</p>}
                  <div className="education-meta">
                    <span>{edu.duration}</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2025 {personalInfo.name}. Built with React & Pure CSS.</p>
          <div className="footer-social">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin size={28} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <Github size={28} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-link" aria-label="Email">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
