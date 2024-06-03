// Import required modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Create Express application
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create MySQL connection
const db = mysql.createConnection({
  host: '178.16.136.150',
  user: 'u591256487_abhishek',
  password: 'Medical@123', 
  database: 'u591256487_contact'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});



// Tutor Signup/Signin//

// Register tutor
app.post('/register-tutor', (req, res) => {
  const tutor = req.body;
  const sql = 'INSERT INTO Teachers SET ?';
  db.query(sql, tutor, (err, result) => {
    if (err) throw err;
    res.send('Tutor registered...');
  });
});

// Signin Route/

app.post('/signin',(req,res)=>{
  let email = req.body.email
  let password = req.body.password
  let sql = 'select * from Teachers where email = ? and password = ?'

  db.query(sql,[email,password],(err,result)=>{
      if(err) throw err
      else{
          if(result.length>0){
              res.send(true)
          }
          else{
              res.send(false)
          }
      }
  })
})
  
// Student enquiry///

// API endpoint to handle student enquiry form submission

app.post('/enquiries', (req, res) => {
  const { name, email, mobile, class: studentClass, subject, location, modeOfLearning } = req.body;

  const query = `
    INSERT INTO enquiry (name, email, mobile, class, subject, location, modeOfLearning)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [name, email, mobile, studentClass, subject, location, modeOfLearning], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
    } else {
      res.status(200).send('Form data submitted successfully');
    }
  });
});

// API endpoint to fetch  all student enquiries
app.get('/enquiries', (req, res) => {
  const query = 'SELECT * FROM enquiry';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
    } else {
      res.status(200).json(results);
    }
  });
});
  

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
