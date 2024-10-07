import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Faq.css';

function FAQ(){
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: 'What services do we offer?', answer: 'We offer a wide range of software development services including web development, mobile app development, and custom software solutions.' },
        { question: 'What technologies do we specialize in?', answer: 'We specialize in various technologies such as React, Node.js, Python, Java, and cloud services like AWS and Azure.' },
        { question: 'How do we ensure the quality of our software?', answer: 'We follow industry best practices including automated testing, code reviews, and continuous integration/continuous deployment (CI/CD).' },
        { question: 'Can we help with legacy system modernization?', answer: 'Yes, we have experience in modernizing legacy systems to improve performance, security, and maintainability.' },
        { question: 'Do we provide ongoing support and maintenance?', answer: 'Yes, we offer ongoing support and maintenance services to ensure your software remains up-to-date and functions smoothly.' },
        { question: 'How do we handle project management?', answer: 'We use agile methodologies and tools like Jira and Trello to manage projects and ensure timely delivery.' },
        { question: 'Can we integrate with our existing systems?', answer: 'Yes, we can integrate with a variety of existing systems and APIs to ensure seamless operation and data flow.' },
        { question: 'Do we offer training for our team?', answer: 'Yes, we provide training and knowledge transfer sessions to help your team get up to speed with new technologies and processes.' },
        { question: 'What is our pricing model?', answer: 'Our pricing model is flexible and can be tailored to meet your specific needs, including fixed-price and time-and-materials contracts.' },
        { question: 'How can we get started with your services?', answer: 'You can get started by contacting us through our website or email to discuss your project requirements and get a quote.' }
    ];

    function toggleFAQ(index) {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                        {faq.question}
                        <span className="icon">
                            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </div>
                    {activeIndex === index && (
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
