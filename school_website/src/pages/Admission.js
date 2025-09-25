import React from "react";
import "./Admission.css";

const Admission = () => {
  return (
    <div className="admission-page">
      {/* Hero Section */}
      <section className="admission-hero">
        <h1>Admissions</h1>
        <p>
          We welcome students who are eager to learn, grow, and be part of our
          school community. Our admission process is simple and transparent.
        </p>
      </section>

      {/* Admission Steps */}
      <section className="admission-steps">
        <div className="step-card">
          <h2>Step 1: Application</h2>
          <p>Fill out the admission form with accurate details and submit.</p>
        </div>

        <div className="step-card">
          <h2>Step 2: Interview</h2>
          <p>Selected applicants will be invited for an interview and assessment.</p>
        </div>

        <div className="step-card">
          <h2>Step 3: Admission Offer</h2>
          <p>Successful applicants will receive an admission letter.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="admission-cta">
        <h2>Apply Now</h2>
        <p>Start your journey with us today by applying for admission.</p>
        <a href="/application-form" className="apply-button">
          Apply Online
        </a>
      </section>
    </div>
  );
};

export default Admission;
