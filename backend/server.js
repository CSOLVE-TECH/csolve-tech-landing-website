const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors'); // CORS for frontend requests

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'enrollments_db',
  password: '1234',
  port: '8000',
});

// Function to create the enrollments table if it doesn't exist
const createEnrollmentsTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS enrollments (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(50),
      last_name VARCHAR(50),
      email VARCHAR(100),
      phone VARCHAR(20),
      gender VARCHAR(10),
      address VARCHAR(200),
      program_type VARCHAR(50),
      course_id INTEGER,
      course_title VARCHAR(50),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log('Enrollments table is ready.');
  } catch (error) {
    console.error('Error creating enrollments table:', error);
  }
};

// Call the function to create the table when the server starts
createEnrollmentsTable();

// Route to handle form submissions
app.post('/api/enroll', async (req, res) => {
    const { firstName, lastName, email, phone, gender, address, programType, courseId, courseTitle } = req.body;
  
    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !programType || !courseId || !courseTitle ) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
      // Check if the user has already registered for this course
      const checkQuery = `
        SELECT * FROM enrollments
        WHERE email = $1 AND course_id = $2;
      `;
      const checkValues = [email, courseId];
      const checkResult = await pool.query(checkQuery, checkValues);
  
      if (checkResult.rows.length > 0) {
        // User already registered for this course
        return res.status(400).json({ message: "You can't register multiple times for one course." });
      }
  
      // If no existing registration, insert the new enrollment
      const insertQuery = `
        INSERT INTO enrollments (first_name, last_name, email, phone, gender, address, program_type, course_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;
      `;
      const values = [firstName, lastName, email, phone, gender, address, programType, courseId];
      const result = await pool.query(insertQuery, values);
  
      res.status(201).json({ message: 'Enrollment successful!', enrollment: result.rows[0] });
    } catch (error) {
      console.error('Error during enrollment:', error);
      res.status(500).json({ message: 'An error occurred during enrollment.' });
    }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
