import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Rajesh Kapparada</h1>
        <p>
          8935 160th Ave NE, Redmond, Washington, 98052 | 
          <a href="tel:+12062096088">206-209-6088</a> | 
          <a href="mailto:kapparadarajesh@gmail.com">kapparadarajesh@gmail.com</a>
        </p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, Seattle, USA | December 2025</p>
          <p>GPA: 3.9/4.0</p>
          <h3>Bachelor of Arts</h3>
          <p>Dr. B.R. Ambedkar University, Nizamabad, India | May 2022</p>
          <p>GPA: 3.5/4.0</p>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Real-Time Social Media Sentiment Analysis</h3>
          <p>
            Developed a real-time sentiment analysis tool leveraging Twitter data, utilizing Python libraries like Tweepy and TextBlob. Applied natural language processing techniques to gauge public opinion on current events.
          </p>

          <h3>Web-Based Task Management System</h3>
          <p>
            Built a full-stack task management application using Flask and React. Implemented JWT-based authentication and integrated PostgreSQL for robust data storage.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Programming Skills</h2>
        <div className="skills">
          <h3>Python</h3>
          <p>
            Experienced in building data-driven applications using Python for web development, data analysis, and automation.
          </p>
          <ul>
            <li>Web frameworks: Django, Flask</li>
            <li>Data manipulation and analysis: Pandas, NumPy</li>
            <li>Machine learning libraries: scikit-learn, TensorFlow</li>
            <li>Scripting and automation</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
