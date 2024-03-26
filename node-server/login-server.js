const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const cors = require('cors');

// Function to generate a random token
const generateRandomToken = (length) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(length, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        // Convert the buffer to a hexadecimal string
        const token = buffer.toString('hex');
        resolve(token);
      }
    });
  });
};

const isValidTelephoneNumber = (telephoneNumber) => {
    const pattern = /^\d{3}-\d{3}-\d{3}$/;
    return pattern.test(telephoneNumber);
};

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello World! This is my Express server.');
});

// Define the port the server will listen on
const port = 80;

// Start the server and have it listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.post('/login',(req,res)=>{

    const returnObj = {status:false};

    const { email, password } = req.body;
    if(email=="iuri" && password == "1234"){
        returnObj.status=true;
        returnObj.email = email;
        returnObj.randomToken = generateRandomToken(16);
        res.cookie('user', returnObj.email, { maxAge: 3600000, httpOnly: true });
        res.cookie('token', returnObj.randomToken, { maxAge: 3600000, httpOnly: true });
    }
    res.json(returnObj);

});

app.post('/register', (req, res) => {

    const returnObj = {status: false};
    const { email, password, name, surname, number } = req.body;
  
    // Assuming you want to perform some validation on the payload
    if (!email || !password || !name || !surname || !number || !isValidTelephoneNumber(number)) {
      returnObj.message = "One or more fields are missing!";
    }else{
        returnObj.status = true;
        returnObj.message = "Success Registering the User";  
    }
  
    res.json(returnObj);

  });

