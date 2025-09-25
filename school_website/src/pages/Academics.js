import React, { useState } from "react";
import "./Academics.css";

const SUBJECTS = {
  primary: [
    "Mathematics",
    "English",
    "Kiswahili",
    "Environmental Activities",
    "CRE/IRE/HRE",
    "Music & Art",
    "Physical Education",
    "ICT Literacy",
  ],
  junior: [
    "Mathematics",
    "English",
    "Kiswahili",
    "Integrated Science",
    "Pre-Technical Studies",
    "Social Studies",
    "Business Studies",
    "Agriculture",
    "Visual & Performing Arts",
    "Life Skills & PE",
    "Computer Science",
  ],
  senior: [
    "Mathematics",
    "English",
    "Kiswahili",
    "Physics",
    "Chemistry",
    "Biology",
    "Geography",
    "History & Government",
    "CRE/IRE/HRE",
    "Business/Accounting",
    "Computer Studies",
  ],
};

const DEPARTMENTS = [
  {
    title: "Sciences",
    blurb:
      "Hands-on practicals, STEM clubs, and project-based learning to nurture curiosity and problem-solving.",
    items: ["Physics", "Chemistry", "Biology", "Integrated Science", "Agriculture"],
  },
  {
    title: "Mathematics",
    blurb:
      "Strong numeracy foundation with contests, math circles, and remediation clinics for all learners.",
    items: ["Math Clinics", "Math Club", "Contest Prep", "Peer Tutoring"],
  },
  {
    title: "Languages",
    blurb:
      "Communication skills across English and Kiswahili with debate clubs, reading labs, and writing workshops.",
    items: ["English", "Kiswahili", "Debate", "Journalism Club"],
  },
  {
    title: "Humanities",
    blurb:
      "Critical thinking through social sciences, history, geography and civic engagement.",
    items: ["History", "Geography", "Religious Education", "Social Studies"],
  },
  {
    title: "ICT & Business",
    blurb:
      "Digital literacy, coding, entrepreneurship and financial literacy for modern careers.",
    items: ["Computer Science", "Computer Studies", "Business Studies"],
  },
  {
    title: "Arts & Sports",
    blurb:
      "Holistic growth through music, fine arts, theatre, and competitive sports programs.",
    items: ["Music", "Visual Arts", "Drama", "Athletics & Games"],
  },
];

const FAQS = [
  {
    q: "Which curriculum do you follow?",
    a: "We align with the Kenyan CBC pathways across Primary, Junior Secondary, and Senior Secondary levels.",
  },
  {
    q: "How are students assessed?",
    a: "We use continuous assessment (quizzes, projects, practicals) plus term exams. Feedback is timely and actionable.",
  },
  {
    q: "Do you offer remedial classes?",
    a: "Yes. Targeted remediation and enrichment clinics run weekly, guided by data from our assessments.",
  },
  {
    q: "Are there co-curricular activities?",
    a: "Plenty! Clubs include STEM, Debate, Journalism, Drama, Music, Coding, and various sports teams.",
  },
];

function Academics() {
  const [level, setLevel] = useState("junior");
  const [openFaq, setOpenFaq] = useState(null);

  const handleToggle = (idx) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="academics-page">
      {/* Hero */}
      <section className="academics-hero">
        <div className="hero-text slide-left">
          <h1>Academics</h1>
          <p>
            We deliver a rigorous, supportive, and modern learning experience —
            blending strong fundamentals with creativity, technology, and
            character development.
          </p>
          <div className="level-switch">
            <button
              className={`level-btn ${level === "primary" ? "active" : ""}`}
              onClick={() => setLevel("primary")}
              aria-pressed={level === "primary"}
            >
              Primary
            </button>
            <button
              className={`level-btn ${level === "junior" ? "active" : ""}`}
              onClick={() => setLevel("junior")}
              aria-pressed={level === "junior"}
            >
              Junior Secondary
            </button>
            <button
              className={`level-btn ${level === "senior" ? "active" : ""}`}
              onClick={() => setLevel("senior")}
              aria-pressed={level === "senior"}
            >
              Senior Secondary
            </button>
          </div>
        </div>

        <div className="hero-image slide-right">
          <img src="/images/bg3.jpg" alt="Students learning" />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="academics-stats fade-in">
        <div className="stat">
          <span className="stat-number">25+</span>
          <span className="stat-label">Subjects</span>
        </div>
        <div className="stat">
          <span className="stat-number">40+</span>
          <span className="stat-label">Qualified Teachers</span>
        </div>
        <div className="stat">
          <span className="stat-number">95%</span>
          <span className="stat-label">Pass Rate</span>
        </div>
        <div className="stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">CBC Aligned</span>
        </div>
      </section>

      {/* Subjects by Level */}
      <section className="subjects-section fade-in">
        <h2>{level === "primary" ? "Primary" : level === "junior" ? "Junior Secondary" : "Senior Secondary"} Subjects</h2>
        <div className="subjects-grid">
          {SUBJECTS[level].map((subj) => (
            <div className="subject-card" key={subj}>
              {subj}
            </div>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="departments-section fade-in ">
        <h2>Departments</h2>
        <div className="departments-grid">
          {DEPARTMENTS.map((dept) => (
            <div className="dept-card" key={dept.title}>
              <h3>{dept.title}</h3>
              <p className="dept-blurb">{dept.blurb}</p>
              <ul className="dept-list">
                {dept.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Assessment & Grading */}
      <section className="assessment-section fade-in ">
        <h2>Assessment & Grading</h2>
        <div className="assessment-grid">
          <div className="assessment-card fade-in ">
            <h4>Continuous Assessment</h4>
            <p>
              Weekly quizzes, lab practicals, projects, and classwork contribute
              to term grades. Students receive detailed feedback to guide growth.
            </p>
          </div>
          <div className="assessment-card fade-in ">
            <h4>Term Exams</h4>
            <p>
              Mid-term and end-term exams benchmark progress and inform
              remediation, enrichment, and progression decisions.
            </p>
          </div>
          <div className="assessment-card fade-in ">
            <h4>Reporting</h4>
            <p>
              Parents/Guardians receive report cards and attend conferences.
              Performance dashboards help track strengths and gaps.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="resources-section fade-in ">
        <h2>Academic Resources</h2>
        <div className="resource-actions">
          <a href="/files/Term_Timetable.pdf" className="pill-btn" download>
            Download Term Timetable
          </a>
          <a href="/files/Subject_Syllabus.pdf" className="pill-btn" download>
            Download Subject Syllabus
          </a>
          <a href="/admissions" className="cta-btn">
            Apply for Admission
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section fade-in">
        <h2>FAQs</h2>
        <div className="faq-list">
          {FAQS.map((f, idx) => (
            <div className={`faq-item ${openFaq === idx ? "open" : ""}`} key={f.q}>
              <button
                className="faq-question"
                onClick={() => handleToggle(idx)}
                aria-expanded={openFaq === idx}
              >
                {f.q}
                <span className="faq-toggle">{openFaq === idx ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Academics;
