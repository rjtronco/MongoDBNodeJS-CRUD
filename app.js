const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//user body parser
app.use(bodyParser.json);

//import routes
const postsRoute = require('./routes/posts.js');

//middlewares
app.use("/posts", postsRoute);
app.use("/", () => {
    console.log('awited');
})



//connect to DB
mongoose.connect(process.env.DB_Connection, () => console.log('CONNECTED!'));


//listen
app.listen(3000);