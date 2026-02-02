import React, { useState } from "react";
import "./services.css";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">

  <div className="services__content">
  <div>
    <i className="uil uil-robot services__icon"></i>
    <h3 className="services__title">
      AI/ML <br /> Developer
    </h3>
  </div>
  <span
    className="services__button"
    onClick={() => {
      toggleTab(1);
    }}
  >
    View More
    <i className="uil uil-arrow-right services__button-icon"></i>
  </span>

  <div
    className={
      toggleState === 1
        ? "services__modal active-modal"
        : "services__modal"
    }
  >
    <div className="services__modal-content">
      <i
        onClick={() => toggleTab(0)}
        className="uil uil-times services__modal-close"
      ></i>

      <h3 className="services__modal-title">AI/ML Developer</h3>
      <p className="services__modal-description">
        Designing intelligent systems that turn data into actionable insights, with a strong focus on real-world applicability, performance, and scalability. I continuously learn and apply modern AI techniques to build reliable, impactful solutions.
      </p>

      <ul className="services__modal-services grid">
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Machine Learning Model Development & Evaluation</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Data Preprocessing & Feature Engineering</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Deep Learning & Predictive Analytics</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Model Deployment & Integration into Applications</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Performance Optimization & Continuous Improvement</p>
        </li>
      </ul>
    </div>
  </div>
</div>

<div className="services__content">
  <div>
    <i className="uil uil-browser services__icon"></i>
    <h3 className="services__title">
      Full Stack <br /> Developer
    </h3>
  </div>
  <span
    className="services__button"
    onClick={() => {
      toggleTab(2);
    }}
  >
    View More
    <i className="uil uil-arrow-right services__button-icon"></i>
  </span>

  <div
    className={
      toggleState === 2
        ? "services__modal active-modal"
        : "services__modal"
    }
  >
    <div className="services__modal-content">
      <i
        onClick={() => toggleTab(0)}
        className="uil uil-times services__modal-close"
      ></i>

      <h3 className="services__modal-title">Full Stack Developer</h3>
      <p className="services__modal-description">
        Building scalable, end-to-end web applications with a strong emphasis on clean architecture, performance, and user-centric design. I enjoy bridging frontend and backend systems to deliver reliable, production-ready solutions.
      </p>

      <ul className="services__modal-services grid">
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Modern Frontend Development (React / Next.js)</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Backend Development with Node.js & Express</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">REST API Design & Integration</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Authentication, Authorization & Security</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Database Design, Optimization & Maintenance</p>
        </li>
      </ul>
    </div>
  </div>
</div>

<div className="services__content">
  <div>
    <i className="uil uil-mobile-android services__icon"></i>
    <h3 className="services__title">
      App <br /> Developer
    </h3>
  </div>
  <span
    className="services__button"
    onClick={() => {
      toggleTab(3);
    }}
  >
    View More
    <i className="uil uil-arrow-right services__button-icon"></i>
  </span>

  <div
    className={
      toggleState === 3
        ? "services__modal active-modal"
        : "services__modal"
    }
  >
    <div className="services__modal-content">
      <i
        onClick={() => toggleTab(0)}
        className="uil uil-times services__modal-close"
      ></i>

      <h3 className="services__modal-title">App Developer</h3>
      <p className="services__modal-description">
        Building performant mobile apps using Flutter with a focus on clean UI,
        smooth UX, and scalable architecture. I adapt quickly, constantly learn,
        and integrate best practices in every app I develop.
      </p>

      <ul className="services__modal-services grid">
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Cross-Platform App Development (Flutter)</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Beautiful UI & Responsive UX Design</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Firebase Authentication & Realtime DB</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">REST API Integration with Backend</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">App Optimization & Maintenance</p>
        </li>
      </ul>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Services;