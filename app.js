const express = require('express')
const app = express()
const bodyParser = require('body-parser'); 

// Parse JSON bodies
app.use(bodyParser.json());

const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/nourdb" ;

const commentRouter = require('./routes/comment');
const userRouter = require('./routes/user');


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
app.use('/api/comments', commentRouter);
app.use('/api/users', userRouter);


// Connect to MongoDB
var configDB = require('./database/mongodb.json');

// mongoose.connect(configDB.mongo.uri);
mongoose.connect(uri)
.then(() => console.log('Mongodb Connected!'));
module.exports = app;