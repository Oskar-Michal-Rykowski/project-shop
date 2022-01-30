const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const helmet = require('helmet');

//import routes
const productsRoutes = require('./routes/products.routes');

const app = express();

//sharowanie zasobów między domenami (front na 3000, server 8000)
app.use(cors());
//%20
app.use(express.urlencoded({ extended: false }));
//body w json (body wysyłam na server) json body jest parsowany na obiekt
app.use(express.json());

//odpalam server
const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});

//routes
app.use('/api', productsRoutes);
// app.use('/api', seatsRoutes);
// app.use('/api', concertsRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

//show our react app in every link the server didn't match with any endpoint
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

//other
app.use(helmet());
app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
});

// connects our backend code with the database

const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';

if (NODE_ENV === 'production')
  dbUri = `mongodb+srv://${process.env.UserDB}:${process.env.PasswordDB}@cluster0.n6j0j.mongodb.net/e-shop?retryWrites=true&w=majority`;
else if (NODE_ENV === 'test') dbUri = 'mongodb://localhost:27017/e-shop';
else dbUri = 'mongodb://localhost:27017/e-shop';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = server;
