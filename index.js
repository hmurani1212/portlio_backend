const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require("cors");
const nodemailerRoutes = require("./Nodemailer/mailer"); 
const verifyOrigin = require("./middleware/allowedOrigin");

const app = express();
const port = 5040;
  
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  console.log("Hello World!")
  res.send('Hello World!');
});
app.use(verifyOrigin)



app.use('/api', nodemailerRoutes);
// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
