import React, { useState } from 'react';
import './SoftwareTraining.css'; // Assuming you want to style this page

const courses = [
  { 
    title: "HTML/CSS", 
    image: "https://www.seoclerk.com/pics/523331-1e2qQI1490977998.jpg", 
    description: "Master the building blocks of web development with HTML and CSS. Learn how to create visually stunning and responsive websites from scratch."
  },
  { 
    title: "JavaScript", 
    image: "https://img.freepik.com/premium-photo/javascript-programming-text_272306-138.jpg", 
    description: "Dive into the world of JavaScript, the language of the web. Gain proficiency in building dynamic, interactive web applications and understand the core concepts of modern JavaScript."
  },
  { 
    title: "Python", 
    image: "https://clipart-library.com/new_gallery/289-2896071_python-logo-png-165709.png", 
    description: "Learn Python, the versatile programming language that powers everything from web applications to data science and machine learning. Get hands-on experience with real-world projects."
  },
  { 
    title: "C++", 
    image: "https://tse2.mm.bing.net/th?id=OIP.Np-tPcxCeW3GN0s-Ud28PgHaE8&pid=Api", 
    description: "Unlock the power of C++, a high-performance programming language widely used in software development, game development, and systems programming. Build a strong foundation in object-oriented programming."
  },
  { 
    title: "Java", 
    image: "http://ceit.upng.ac.pg/images/course_jp.jpg", 
    description: "Explore the world of Java, a robust and versatile programming language. Learn to build scalable, cross-platform applications with a focus on object-oriented programming and real-world problem-solving."
  },
  { 
    title: "PHP", 
    image: "https://friconix.com/jpg/fi-cnsuxx-php-logo.jpg", 
    description: "Become proficient in PHP, the scripting language that powers the web. Learn to develop dynamic websites and web applications, and integrate with databases seamlessly."
  },
  { 
    title: "SQL", 
    image: "https://comdy.vn/wp-content/uploads/2023/11/Kieu-du-lieu-nvarchar-la-gi.png", 
    description: "Master SQL, the standard language for managing and manipulating databases. Learn how to create, read, update, and delete data, and gain insights into optimizing database performance."
  },
  { 
    title: "Flutter", 
    image: "https://www.daily.co/blog/content/images/2023/07/Flutter-feature.png", 
    description: "Learn to build cross-platform mobile applications using Flutter. Gain expertise in Dart programming, Flutter widgets, and app design principles to create beautiful and functional mobile apps for both Android and iOS."
  }
];

const programs = [
  { 
    title: "Website Development", 
    image: "https://api.reliasoftware.com/uploads/web_development_is_important_176fa0618e.jpg", 
    description: "Master the art of creating responsive and visually stunning websites. Learn HTML, CSS, JavaScript, and popular frameworks to build dynamic websites from scratch."
  },
  { 
    title: "Data Analysis", 
    image: "https://codoid.com/wp-content/uploads/2018/12/data_science.jpg", 
    description: "Dive into the world of data analysis. Learn how to collect, process, and analyze data using Python, Excel, SQL, and visualization tools to derive meaningful insights."
  },
  { 
    title: "Mobile App Development", 
    image: "https://geekwatchnow.com/wp-content/uploads/2022/01/Mobile-App-Development-Services-in-Chicago-800x445.jpg", 
    description: "Learn to build cross-platform mobile applications using Flutter. Gain expertise in Dart programming, Flutter widgets, and app design principles to create beautiful and functional mobile apps for both Android and iOS."
  }
];

const SoftwareTraining = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="text-content">
          <h1>Grow your software development skills</h1>
          <p>
            Our company, Csolve Tech+, is built with dedicated software expert peers and focuses on software development while providing up-to-date technical skills in today's market. We pride ourselves on delivering expert-level training, ensuring our clients and students stay ahead in the ever-evolving tech industry.
          </p>
          <button className="cta-button">Start Here</button>
        </div>
        <div className="image-content">
          <img src={`https://i.morioh.com/210512/340220e6.webp`} alt="Training" />
        </div>
      </div>

      <div className="benefits-container">
        <div className="benefit-item">
          <img src={`https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/browse/pink-icons/timeline-icon.svg`} alt="Timeline" className="benefit-icon" />
          <p>Learn on your own timeline</p>
        </div>
        <div className="benefit-item">
          <img src={`https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/browse/pink-icons/master-craft-icon.svg`} alt="Master Your Craft" className="benefit-icon" />
          <p>Master your craft</p>
        </div>
        <div className="benefit-item">
          <img src={`https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/browse/pink-icons/emerging-trends-icon.svg `} alt="Emerging Trends" className="benefit-icon" />
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
                  <button className="enroll-button">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="programs-container">
        <h2 className='h2'>Best Programs We Offer</h2>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div className="program-card" key={index}>
              <img src={program.image} alt={program.title} />
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <button className="blob-btn">
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
      </div>
    </div>
  );
};

export default SoftwareTraining;
