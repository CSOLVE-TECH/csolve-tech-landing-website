import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import './modalform.css';

const ModalForm = ({ show, handleClose, selectedCourse, handleSubmit }) => {
  const [errorMessage, setErrorMessage] = useState('');   // State to hold error message
  const [successMessage, setSuccessMessage] = useState(''); // State to hold success message

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    programType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await handleSubmit({ ...formData, courseId: selectedCourse.id, courseTitle: selectedCourse.title });
      if (response.status === 400 && response.message) {
        setErrorMessage(response.message);  // Set error message if received from backend
        setSuccessMessage('');  // Clear any previous success message

        setTimeout(() => {
          setErrorMessage('');  // Clear the success message
        }, 4000);
      } else {
        setErrorMessage('');  // Clear error message on successful registration
        setSuccessMessage(`You have successfully registered for the course ${selectedCourse.title}. We will email you with the details. Thanks!`);

        // Automatically close the modal after 30 seconds
        setTimeout(() => {
          setSuccessMessage('');  // Clear the success message
          handleClose();          // Close the modal
        }, 7000);  // Close modal and clear message after 30 seconds
      }
    } catch (error) {
      setErrorMessage('An error occurred during registration. Please try again.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className='model'>
      <Modal.Header closeButton>
        <Modal.Title>Enroll in {selectedCourse.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Display error message if it exists */}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        {/* Display success message if it exists */}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}

        <Form onSubmit={submitForm}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Program Type</Form.Label>
            <Form.Control as="select" name="programType" value={formData.programType} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="onsite">Onsite</option>
              <option value="virtual">Virtual</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" style={{marginTop:'10px'}} type="submit" disabled={!!successMessage}>
            Enroll Now
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
