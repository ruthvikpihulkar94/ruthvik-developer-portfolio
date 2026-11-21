import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2,
  Database, Github, Linkedin, Mail, MapPin, Menu, Monitor,
  Server, Smartphone, X, Download, ExternalLink, Layers3, Cloud,
  Terminal, Workflow, Sparkles
} from "lucide-react";

// Add your real profile URLs below when ready. Empty values hide the links.
const profile = {
  name: "Ruthvik Pihulkar",
  role: "Full Stack Developer",
  location: "Pune, Maharashtra, India",
  email: "ruthvikpihulkar@gmail.com",
  phone: "+91 9420834950",
  github: "",
  linkedin: "",
};

const skills = [
  { title: "Backend", icon: Server, items: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "REST APIs", "Spring Security", "Microservices"] },
  { title: "Frontend", icon: Monitor, items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "API Integration"] },
  { title: "Database & Messaging", icon: Database, items: ["PostgreSQL", "MySQL", "Redis", "Apache Kafka"] },
  { title: "Cloud & DevOps", icon: Cloud, items: ["AWS", "Docker", "Jenkins", "Git", "Bitbucket", "Maven", "Linux"] },
  { title: "Testing & Practices", icon: Workflow, items: ["JUnit", "Mockito", "SonarQube", "Agile/Scrum", "SOLID", "Design Patterns"] },
];

const projects = [
  {
    number: "01",
    name: "Food Delivery Application",
    type: "Backend development · Team project",
    description: "A food delivery application with backend workflows for users, restaurants, menus, pricing, carts, and order history.",
    highlights: [
      "Worked on REST API features for user and restaurant-related workflows.",
      "Implemented menu retrieval with category-wise grouping of available food items.",
      "Built cart-item validation and lookup flows for carts and menu items.",
      "Worked with Spring Data JPA, PostgreSQL, and centralized exception handling."
    ],
    stack: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "REST APIs"],
    icon: Smartphone,
    note: "Add your GitHub repository URL and screenshots before publishing, if you can share them."
  },
  {
    number: "02",
    name: "ISKCON Tour Management",
    type: "Full-stack project",
    description: "A tour management application designed to manage tour details, pilgrim registrations, bookings, and travel schedules.",
    highlights: [
      "Developed backend functionality using Java and Spring Boot.",
      "Designed PostgreSQL data storage using Spring Data JPA.",
      "Created REST APIs to connect backend services with a React.js frontend.",
      "Used a modular application structure to support maintainability."
    ],
    stack: ["Java", "Spring Boot", "React.js", "PostgreSQL", "Spring Data JPA"],
    icon: Layers3,
    note: "Add a live demo or repository link if available."
  }
];

const experience = [
  {
    role: "Backend Developer Intern",
    company: "LitsBros Pvt. Ltd.",
    date: "December 2025",
    bullets: [
      "Developed and maintained Java/Spring Boot services and RESTful APIs.",
      "Worked with JWT authentication, request validation, and exception handling.",
      "Worked with PostgreSQL/MySQL and technologies including Redis and Apache Kafka.",
      "Collaborated with frontend teams on API integration with React.js applications.",
      "Participated in CI/CD workflows and application monitoring/debugging."
    ]
  }
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">R</span>
          <span>ruthvik pihulkar<span className="brand-dot">.</span></span>
        </a>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenu}>
            Resume <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
            <div className="availability"><span className="pulse" /> Open to software engineering opportunities</div>
            <p className="hero-kicker">HELLO, I'M {profile.name.toUpperCase()}</p>
            <h1>I build thoughtful<br /><span>digital experiences.</span></h1>
            <p className="hero-description">
              I'm a <strong>Full Stack Developer</strong> focused on building backend applications,
              REST APIs, and database-driven products with Java, Spring Boot, and React.js.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-ghost" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={16} /> View resume</a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> {profile.location}</span>
              <span><Code2 size={15} /> Backend-first, full-stack mindset</span>
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="profile-card">
              <div className="profile-card-top"><span className="window-dots"><i /><i /><i /></span><span>developer.profile</span><span className="status-dot" /></div>
              <div className="avatar-placeholder"><Code2 size={48} strokeWidth={1.25} /></div>
              <h3>{profile.name}</h3>
              <p>{profile.role}</p>
              <div className="profile-divider" />
              <div className="code-line"><span>01</span><b>const</b> developer = <em>"builder"</em>;</div>
              <div className="code-line"><span>02</span><b>focus</b>: <em>"reliable APIs"</em>,</div>
              <div className="code-line"><span>03</span><b>learning</b>: <em>"AI products"</em></div>
              <div className="profile-tags"><span>Java</span><span>Spring Boot</span><span>React</span></div>
            </div>
            <div className="floating-chip chip-top"><Sparkles size={15} /> Curious by nature</div>
            <div className="floating-chip chip-bottom"><Terminal size={15} /> Always building</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap content-section" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Turning problems into practical solutions." />
          <motion.div className="about-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <div className="about-main">
              <p className="about-lead">I enjoy building software that is useful, maintainable, and easy to evolve.</p>
              <p>My experience is centered on backend development with Java and Spring Boot, including REST API design, database integration, authentication, validation, and exception handling. I also have working knowledge of React.js and enjoy connecting frontend experiences with reliable backend services.</p>
              <p>I value clean code, collaborative development, continuous learning, and understanding the problem behind the feature—not just completing the task.</p>
            </div>
            <div className="about-facts">
              <div className="fact-card"><BriefcaseBusiness size={19} /><strong>Professional experience</strong><span>Backend Developer Intern</span></div>
              <div className="fact-card"><Code2 size={19} /><strong>Core focus</strong><span>Java · Spring Boot · REST APIs</span></div>
              <div className="fact-card"><MapPin size={19} /><strong>Based in</strong><span>Pune, Maharashtra, India</span></div>
            </div>
          </motion.div>
        </section>

        <section className="section-wrap content-section" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title="Technologies I work with." description="A snapshot of the tools and concepts I have worked with or studied." />
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.article className="skill-card" key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: index * 0.06 }}>
                  <div className="skill-icon"><Icon size={20} /></div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </motion.article>
              );
            })}
          </div>
          <p className="skills-footnote">Skill levels vary by technology; this list reflects my current hands-on experience and working knowledge.</p>
        </section>

        <section className="section-wrap content-section" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects I've contributed to." description="A selection of applications that demonstrate my backend engineering and full-stack integration experience." />
          <div className="projects-list">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article className="project-card" key={project.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
                  <div className="project-topline"><span>PROJECT {project.number}</span><span>{project.type}</span></div>
                  <div className="project-content">
                    <div className="project-symbol"><Icon size={29} /></div>
                    <div className="project-details">
                      <h3>{project.name}</h3>
                      <p className="project-description">{project.description}</p>
                      <ul>{project.highlights.map((point) => <li key={point}>{point}</li>)}</ul>
                      <div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                      <p className="project-note">{project.note}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section-wrap content-section" id="experience">
          <SectionHeading eyebrow="WHERE I'VE WORKED" title="Experience & education." />
          <div className="timeline">
            {experience.map((job) => (
              <motion.div className="timeline-item" key={job.company} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-heading"><div><h3>{job.role}</h3><p>{job.company}</p></div><span>{job.date}</span></div>
                  <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </motion.div>
            ))}
            <motion.div className="timeline-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-heading"><div><h3>Bachelor of Engineering</h3><p>P. R. Pote College of Engineering, Amravati</p></div><span>CGPA: 8.2</span></div>
                <p className="education-note">Education details as listed in my resume.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <span className="eyebrow">LET'S CONNECT</span>
            <h2>Have an interesting opportunity<br />or idea in mind?</h2>
            <p>I'm open to connecting about software engineering opportunities, projects, and learning from other builders.</p>
            <div className="contact-cta-row">
              <a
                className="button button-primary"
                href={`https://wa.me/91${profile.phone.replace(/\D/g, "").slice(-10)}?text=Hi%20Ruthvik%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!`}
                target="_blank"
                rel="noreferrer"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Say hello on WhatsApp
              </a>
              <a
                className="button button-ghost"
                href={`mailto:${profile.email}?subject=Opportunity%20from%20Portfolio`}
                target="_blank"
                rel="noreferrer"
              >
                <Mail size={16} /> Send an email
              </a>
            </div>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
              <span><MapPin size={16} /> {profile.location}</span>
            </div>
            <div className="social-links">
              {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>}
              {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">R</span><span>ruthvik<span className="brand-dot">.</span></span></a>
        <span>Designed & built with care · © {new Date().getFullYear()} {profile.name}</span>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;