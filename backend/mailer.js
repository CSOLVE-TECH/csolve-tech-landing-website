// mailer.js

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// POST /send - Handle email sending
router.post('/send', [
    // Validation and Sanitization
    body('firstName').trim().notEmpty().withMessage('First name is required.'),
    body('lastName').trim().notEmpty().withMessage('Last name is required.'),
    body('email').isEmail().withMessage('Valid email is required.'),
    body('phone').optional().trim(),
    body('message').trim().notEmpty().withMessage('Message is required.')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Send back validation errors
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, phone, message } = req.body;

    // Create transporter
    let transporter;
    try {
        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    } catch (err) {
        console.error('Failed to create transporter:', err);
        return res.status(500).send('Internal server error.');
    }

    const mailOptions = {
        from: process.env.EMAIL_USER, 
        to: process.env.EMAIL_USER, 
        replyTo: email,
        subject: 'New Contact Form Submission',
        text: `Dear Team,

You have received a new contact form submission. Please find the details below:

----------------------------------------
Message:
${message}

----------------------------------------
Contact Details:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Best regards,
CSolve`,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        res.send('Your message has been sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('There was an error sending your message. Please try again later.');
    }
});

module.exports = router;
