import React, { useState } from 'react';
import './SoftwareTraining.css'; // Assuming you want to style this page
import ModalForm from '../../component/ModalForm'

import { useNavigate } from "react-router-dom";

const courses = [
  { 
    id: 1,
    title: "HTML/CSS", 
    image: `${process.env.PUBLIC_URL}/assets/images/html.jpg`, 
    description: "Master the building blocks of web development with HTML and CSS. Learn how to create visually stunning and responsive websites from scratch."
  },
  { 
    id: 2,
    title: "JavaScript", 
    image: `${process.env.PUBLIC_URL}/assets/images/js.jpg`, 
    description: "Dive into the world of JavaScript, the language of the web. Gain proficiency in building dynamic, interactive web applications and understand the core concepts of modern JavaScript."
  },
  { 
    id: 3,
    title: "Python", 
    image: `${process.env.PUBLIC_URL}/assets/images/python.png`, 
    description: "Learn Python, the versatile programming language that powers everything from web applications to data science and machine learning. Get hands-on experience with real-world projects."
  },
  { 
    id: 4,
    title: "C++", 
    image: `${process.env.PUBLIC_URL}/assets/images/c++.jpg`, 
    description: "Unlock the power of C++, a high-performance programming language widely used in software development, game development, and systems programming. Build a strong foundation in object-oriented programming."
  },
  { 
    id: 5,
    title: "Java", 
    image: `${process.env.PUBLIC_URL}/assets/images/java.jpg`, 
    description: "Explore the world of Java, a robust and versatile programming language. Learn to build scalable, cross-platform applications with a focus on object-oriented programming and real-world problem-solving."
  },
  { 
    id: 6,
    title: "PHP", 
    image: `${process.env.PUBLIC_URL}/assets/images/php.jpg`, 
    description: "Become proficient in PHP, the scripting language that powers the web. Learn to develop dynamic websites and web applications, and integrate with databases seamlessly."
  },
  { 
    id: 7,
    title: "SQL", 
    image: `${process.env.PUBLIC_URL}/assets/images/sql.png`, 
    description: "Master SQL, the standard language for managing and manipulating databases. Learn how to create, read, update, and delete data, and gain insights into optimizing database performance."
  },
  { 
    id: 8,
    title: "Flutter", 
    image: `${process.env.PUBLIC_URL}/assets/images/flutter.png`, 
    description: "Learn to build cross-platform mobile applications using Flutter. Gain expertise in Dart programming, Flutter widgets, and app design principles to create beautiful and functional mobile apps for both Android and iOS."
  }
];

const programs = [
  { 
    id: 1,
    title: "Website Development", 
    image: `${process.env.PUBLIC_URL}/assets/images/we.jpg`, 
    description: "Master the art of creating responsive and visually stunning websites. Learn HTML, CSS, JavaScript, and popular frameworks to build dynamic websites from scratch."
  },
  { 
    id: 2,
    title: "Data Analysis", 
    image: `${process.env.PUBLIC_URL}/assets/images/da.jpg`, 
    description: "Dive into the world of data analysis. Learn how to collect, process, and analyze data using Python, Excel, SQL, and visualization tools to derive meaningful insights."
  },
  { 
    id: 3,
    title: "Mobile App Development", 
    image: `${process.env.PUBLIC_URL}/assets/images/mob.jpg`, 
    description: "Learn to build cross-platform mobile applications using Flutter. Gain expertise in Dart programming, Flutter widgets, and app design principles to create beautiful and functional mobile apps for both Android and iOS."
  }
];

const SoftwareTraining = () => {
  const navigate = useNavigate();
  const navigateToContactUsPage = () => {
    navigate("/contact");
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleShowModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      
      if (response.status === 400) {
        // Return error message if registration fails
        return { status: 400, message: result.message };
      }
      
      // Success
      return { status: 201, message: 'Enrollment successful!' };
    } catch (error) {
      console.error('Error during form submission:', error);
      return { status: 500, message: 'An internal server error occurred.' };
    }
  };

  return (
    <div>
      <div className="hero-container">
        <div className="text-content">
          <h1>Grow your software development skills</h1>
          <p>
            Our company, Csolve Tech+, is built with dedicated software expert peers and focuses on software development while providing up-to-date technical skills in today's market. We pride ourselves on delivering expert-level training, ensuring our clients and students stay ahead in the ever-evolving tech industry.
          </p>
          <button className="cta-button" onClick={navigateToContactUsPage}>Start Connect With Us</button>
        </div>
        <div className="image-content">
          <img src={`${process.env.PUBLIC_URL}/assets/images/traning1.webp`} alt="Training" />
        </div>
      </div>
      <div className="benefits-container">
        <div className="benefit-item">
          <img src={`${process.env.PUBLIC_URL}/assets/images/timeline-icon.svg`} alt="Timeline" className="benefit-icon" />
          <p>Learn on your own timeline</p>
        </div>
        <div className="benefit-item">
          <img src={`${process.env.PUBLIC_URL}/assets/images/master-craft-icon.svg`} alt="Master Your Craft" className="benefit-icon" />
          <p>Master your craft</p>
        </div>
        <div className="benefit-item">
          <img src={`${process.env.PUBLIC_URL}/assets/images/emerging-trends-icon.svg`} alt="Emerging Trends" className="benefit-icon" />
          <p>Keep up with emerging trends</p>
        </div>
      </div>
      <div className="courses-container">
        <h2 className='h2'>Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-card-inner">
                <div className="course-card-front">
                  <h3>{course.title}</h3>
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="course-card-back">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <button onClick={() => handleShowModal(course)} className="enroll-button">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Modal Form for Enrollment */}
        {selectedCourse && (
          <ModalForm
            show={showModal}
            handleClose={handleCloseModal}
            selectedCourse={selectedCourse}
            handleSubmit={handleFormSubmit}
          />
        )}
      </div>
      <div className="programs-container">
        <h2 className='h2'>Best Programs We Offer</h2>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div className="program-card" key={index}>
              <img src={program.image} alt={program.title} />
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <button className="blob-btn" onClick={() => handleShowModal(program)}>
                Enroll Now
                <span className="blob-btn__inner">
                  <span className="blob-btn__blobs">
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
            </div>
          ))}
        </div>
          {/* Modal Form for Enrollment */}
          {selectedCourse && (
            <ModalForm
              show={showModal}
              handleClose={handleCloseModal}
              selectedCourse={selectedCourse}
              handleSubmit={handleFormSubmit}
            />
          )}
      </div>
    </div>
  );
};

export default SoftwareTraining;
