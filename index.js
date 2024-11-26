const express = require('express');
const mysql = require('mysql2');
const app = express();

// Parse your database URL
const connection = mysql.createConnection({
  host: 'muowdopceqgxjn2b3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com', // Hostname
  user: 'wrtwpgia1ude3l2t',                                         // Username
  password: 'vixop0dvr8ag84st',                                     // Password
  database: 'vcln56dp7hw75pdk',                                     // Database name
  port: 3306                                                        // Port number
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
  } else {
    console.log('Connected to the database');
  }
});

// Sample API endpoint to fetch data
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM example_table'; // Replace with your actual table name
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Database query failed');
      return;
    }
    res.json(results); // Send data as JSON
  });
});

// Start the server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

