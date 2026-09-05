/* ============================================================
   DATA — edit this section to update site content
   ============================================================ */

const PROFILE = {
  name: "Parth Vaidya",
  title: "Software Development Engineer (Java)",
  location: "London, UK",
  email: "devparth2021@gmail.com",
  phone: "+44 7308 615180",
  linkedin: "www.linkedin.com/in/parth-vaidya-3465b2134", // add your LinkedIn URL
  github: "https://github.com/Parth1986-dotnet",   // add your GitHub profile URL
  summary:
    "Java developer with 2 years of experience building server-side applications, RESTful APIs, cloud-native microservices and browser-based front ends. Solid foundation in Java 17/21, Spring Boot, SQL, AWS and automated testing, with hands-on experience contributing to production systems and improving reliability. Looking for a collaborative, development-focused role where I can keep growing as an engineer.",
};

const HERO_METRICS = [
  { label: "Years of professional experience", value: "2", signal: true },
  { label: "Elasticsearch latency improved (OnBuy)", value: "3s → <500ms", signal: true },
  { label: "Response time supported under load (Evergreen Life)", value: "<1s", signal: false },
  { label: "Core stack", value: "Java · Spring Boot · AWS", signal: false },
];

const STACK = [
  {
    name: "Java & APIs",
    tags: ["Java 17/21", "Spring Boot 3", "Spring Cloud", "REST APIs", "GraphQL", "gRPC", "Microservices"],
  },
  {
    name: "Frontend",
    tags: ["React", "TypeScript", "JavaScript", "Angular", "HTML5", "CSS3"],
  },
  {
    name: "AWS & Cloud",
    tags: ["AWS Lambda", "EKS", "MSK", "S3", "RDS", "SQS/SNS", "CloudWatch"],
  },
  {
    name: "Databases",
    tags: ["PostgreSQL", "Oracle", "MongoDB", "DynamoDB", "Redis", "Elasticsearch"],
  },
  {
    name: "Messaging",
    tags: ["Apache Kafka", "RabbitMQ", "Event-driven architecture"],
  },
  {
    name: "DevOps & CI/CD",
    tags: ["Git", "GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Terraform"],
  },
  {
    name: "Testing",
    tags: ["JUnit", "Mockito", "Testcontainers", "Karate API testing"],
  },
];

const EXPERIENCE = [
  {
    org: "JPMorgan Chase",
    role: "Software Development Engineer — Java / AWS",
    dates: "Jan 2026 – Jul 2026",
    location: "Glasgow, UK",
    bullets: [
      "Contributed to event-driven trade processing workflows (booking, amendments, reversals) using AWS Lambda, Step Functions and Kafka (MSK).",
      "Wrote unit tests for Lambda functions to maintain strong code coverage across trade processing workflows.",
      "Added structured JSON logging across Lambda and Step Function workflows, improving traceability for debugging production issues.",
      "Worked with the team to redesign response validation logic, reducing runtime failures in trade booking flows.",
    ],
  },
  {
    org: "Evergreen Life",
    role: "Software Development Engineer — Java Full Stack",
    dates: "Feb 2025 – Oct 2025",
    location: "Remote, UK",
    bullets: [
      "Built FHIR-compliant microservices with Spring Boot to support integration with NHS systems.",
      "Developed a GraphQL API layer to unify data access across PostgreSQL, MongoDB and Neo4j.",
      "Contributed to real-time Kafka pipelines ingesting wearable-device data for patient dashboards.",
      "Wrote Karate API tests to validate FHIR contract compliance across providers.",
    ],
  },
  {
    org: "OnBuy",
    role: "Software Development Engineer — E-Commerce",
    dates: "Feb 2024 – Nov 2024",
    location: "Hybrid, UK",
    bullets: [
      "Developed Spring Boot microservices for order, catalogue, payment and search on Google Kubernetes Engine.",
      "Implemented Kafka-based event processing for carts and orders using idempotent producers to resolve race conditions.",
      "Improved Elasticsearch query performance through index tuning and Redis caching.",
      "Built gRPC APIs and Testcontainers integration tests as part of the delivery pipeline.",
    ],
  },
  {
    org: "Argos (Sainsbury's)",
    role: "Software Development Engineer — Cloud Native Platforms",
    dates: "2023 – 2024",
    location: "UK",
    bullets: [
      "Contributed to migrating legacy order and inventory systems to cloud-native microservices.",
      "Built WebFlux-based event pipelines supporting real-time stock updates.",
      "Helped integrate React dashboards giving store and supply-chain teams order visibility.",
      "Supported Jenkins CI/CD automation, helping reduce manual deployment steps.",
    ],
  },
];

const PROJECTS = [
  {
    org: "Personal project",
    name: "Full-Stack E-Commerce Web App",
    problem: "Wanted hands-on practice building a complete purchase flow end to end.",
    approach: "Built with Java, Spring Boot, REST APIs, React and PostgreSQL — covering authentication, catalogue, cart, ordering and payment.",
    impact: "Working full-stack demo covering the core flows of a real e-commerce checkout.",
  },
  {
    org: "OnBuy · Marketplace",
    name: "Order & Search Performance",
    problem: "Search latency and cart/order event handling were under pressure during peak load.",
    approach: "Contributed to Spring Boot microservices on GKE, idempotent Kafka producers, and Elasticsearch/Redis tuning.",
    impact: "Helped bring search latency down from ~3s to under 500ms under peak load.",
  },
  {
    org: "Evergreen Life · Digital Health",
    name: "Patient Data Platform",
    problem: "Patient data lived across relational, document and graph stores with no unified view.",
    approach: "Helped build a GraphQL layer unifying PostgreSQL, MongoDB and Neo4j, plus Kafka pipelines for wearable-device data.",
    impact: "Supported response times under 1s during load testing with Gatling.",
  },
];

const ACHIEVEMENTS = [
  { num: "3s → <500ms", desc: "Elasticsearch latency improved through index tuning and Redis caching at OnBuy." },
  { num: "<1s", desc: "Response times supported for health-record retrieval under load testing at Evergreen Life." },
  { num: "3 yrs", desc: "Hands-on commercial experience across fintech, healthcare and e-commerce domains." },
  { num: "4", desc: "Companies where I've shipped production Java/Spring Boot services." },
];

const EDUCATION = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Sardar Patel University, Gujarat, India",
  coursework: "Algorithms · Operating Systems · Database Management Systems · Software Engineering",
  honours: [
    "Top 5 Student Recognition — ranked among the programme's top five students for academic performance and successful project delivery.",
  ],
};

/* ============================================================
   COMPONENTS
   ============================================================ */

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-mark" href="#top">
          <span className="dot"></span>
          {PROFILE.name.toLowerCase().replace(" ", ".")}
        </a>
        <ul className="nav-links">
          <li><a href="#stack">Stack</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
        <a className="nav-cta" href="#contact">Get in touch</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow-status">
            <span className="dot"></span>
            open to opportunities
          </span>
          <h1>
            {PROFILE.name}<br />
            <span className="accent">{PROFILE.title}.</span>
          </h1>
          <div className="hero-role">Java Developer · Spring Boot · AWS · React</div>
          <p className="hero-summary">{PROFILE.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>Email me</a>
            <a className="btn btn-secondary" href="#experience">View experience</a>
            <a className="btn btn-secondary" href="#contact">Contact details</a>
          </div>
        </div>

        <div className="status-panel">
          <div className="status-panel-head">
            <span>career_metrics.log</span>
            <span>live</span>
          </div>
          {HERO_METRICS.map((m, i) => (
            <div className="status-metric" key={i}>
              <span className="label">{m.label}</span>
              <span className={"value" + (m.signal ? " signal" : "")}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <h2>About</h2>
          <span className="section-index mono">01 / profile</span>
        </div>
        <p className="about-body">
          I'm a <strong>Java developer with 3 years of hands-on experience</strong> building
          backend services and APIs — Spring Boot microservices, event pipelines with Kafka, and
          cloud infrastructure on AWS. I've also worked across the stack with <strong>React and
          Angular</strong> front ends. I enjoy digging into production issues, writing solid
          tests, and learning from the engineers around me. I'm looking for a
          development-focused role where I can keep building on that foundation.
        </p>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="section-head">
          <h2>Technical stack</h2>
          <span className="section-index mono">02 / capabilities</span>
        </div>
        <div className="stack">
          {STACK.map((layer, i) => (
            <div className="stack-layer" key={i}>
              <div className="stack-layer-label">
                <span className="name">{layer.name}</span>
              </div>
              <div className="stack-layer-tags">
                {layer.tags.map((tag, j) => (
                  <span className="tag" key={j}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head">
          <h2>Experience</h2>
          <span className="section-index mono">03 / timeline</span>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((job, i) => (
            <div className="tl-entry" key={i}>
              <div className="tl-dates">{job.dates}</div>
              <div>
                <div className="tl-role">{job.role}</div>
                <div className="tl-org">{job.org}</div>
                <div className="tl-loc">{job.location}</div>
                <ul className="tl-bullets">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <h2>Featured projects</h2>
          <span className="section-index mono">04 / case studies</span>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div className="project-card" key={i}>
              <div>
                <span className="org mono">{p.org}</span>
                <h3>{p.name}</h3>
              </div>
              <div className="project-row"><span className="k mono">problem</span><span className="v">{p.problem}</span></div>
              <div className="project-row"><span className="k mono">approach</span><span className="v">{p.approach}</span></div>
              <div className="project-impact">→ {p.impact}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-head">
          <h2>Highlights</h2>
          <span className="section-index mono">05 / achievements</span>
        </div>
        <div className="achieve-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div className="achieve-cell" key={i}>
              <span className="num">{a.num}</span>
              <span className="desc">{a.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-head">
          <h2>Education</h2>
          <span className="section-index mono">06 / background</span>
        </div>
        <div className="edu-row">
          <div>
            <div className="degree">{EDUCATION.degree}</div>
            <div className="school">{EDUCATION.school}</div>
            <div className="coursework">{EDUCATION.coursework}</div>
            <ul className="honours">
              {EDUCATION.honours.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div>
            <h2>Let's talk.</h2>
            <p>
              I'm currently open to junior/mid Java Software Development Engineer roles.
              Reach out directly — I usually reply within a day.
            </p>
          </div>
          <div className="contact-list">
            <a className="contact-item" href={`mailto:${PROFILE.email}`}>
              <span className="k mono">email</span>{PROFILE.email}
            </a>
            <a className="contact-item" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
              <span className="k mono">phone</span>{PROFILE.phone}
            </a>
            <span className="contact-item">
              <span className="k mono">based</span>{PROFILE.location}
            </span>
            {PROFILE.linkedin && (
              <a className="contact-item" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <span className="k mono">linkedin</span>{PROFILE.linkedin.replace("https://", "")}
              </a>
            )}
            {PROFILE.github && (
              <a className="contact-item" href={PROFILE.github} target="_blank" rel="noreferrer">
                <span className="k mono">github</span>{PROFILE.github.replace("https://", "")}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-row">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>built with react · auto-deployed via github actions</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
