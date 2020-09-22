// ===== DEPENDENCIES ===== //
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const path = require('path');

// ===== CONFIGURATION ===== //
const app = express();
const db = mongoose.connection;
require('dotenv').config();

// ===== PORT ===== //
const PORT = process.env.PORT || 3003;

// ===== DATABSE ===== //
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, autoIndex: false});

// ===== MIDDLEWARE ===== //
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const applicationController = require('./controllers/application.js');
app.use('/application', applicationController);

app.get('/products/:id', (req,res,next) => {
  res.json({msg: 'This is CORS-enabled for all origins!'});
})

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('app_store/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'app_store', 'build', 'index.html'));
  })
}

// ===== ERROR / SUCCESS ===== //
db.on('error', (err) => {
  console.log(`${err.message} is Mongod not running?`);
})
db.on('connected', () => {
  console.log(`mongo connected: `, MONGODB_URI);
})
db.on('disconnected', () => {
  console.log(`mongo disconnected`);
})

// ===== LISTENER ===== //
app.listen(PORT, () => {
  console.log('listening on port ', PORT);
})

// app.listen(80, () => {
//   console.log('CORS-enabled web server listening on port 80');
// })
