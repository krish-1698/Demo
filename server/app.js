const express = require('express')
var cors = require('cors')
const jwt = require('jsonwebtoken')
const fs = require('fs');

// Initialize Express app
const app = express()


const jwtSecretKey = 'dsfdsfsdfdsvcsvdfgefg'

// Set up CORS and JSON middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


  function getUsers() {
    const data = fs.readFileSync('creds.json');
    return JSON.parse(data);
  }

app.post('/auth', (req, res) => {
    const { email, password } = req.body
  
    const users = getUsers();
  
    const user = users.find((user) => user.email === email);
        if (!user) {
          return res.status(404).json({ message: 'User not found' })
        } else {
            if(password != user.password){
                return res.status(401).json({ message: 'Invalid password' })
            }

          let loginData = {
            email,
            signInTime: Date.now(),
          }
          const token = jwt.sign(loginData, jwtSecretKey, { expiresIn: '1h' });
        //   const token = jwt.sign(loginData, jwtSecretKey)
          res.status(200).json({ message: 'success', token })
        }
  });

  app.listen(3080)