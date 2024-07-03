const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// import routes
const postRoute = require('./routes/posts');
const connectDB = require('./database/db');
const app = express();
const port = 3000;


// middleware
app.use(cors());
app.use(bodyParser.json());


app.use('/posts', postRoute);


// Routes
app.get('/', (req, res) => {
    res.send('we are on home');
});

// connect to DB
connectDB();


// connect to DB
// mongoose.connect(
//     process.env.DB_CONNECTION,
//     { useNewUrlParser : true },
//     () => console.log('connected to DB')
// );


// listen to the server
app.listen(port, () => {
    console.log(`server started to run at ${port}`);
});