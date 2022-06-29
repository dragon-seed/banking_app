require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const {notFound, errorHandler} = require('./middlewares/errorMiddleware');

const PORT = process.env.PORT

const app = express()

app.use(cors())

app.use(express.json())

app.use(logger('dev'));

app.get('/', (req, res)=>{
    res.send('Hello world');
  });

app.use('/api/users', userRoute);

//add these from errorMiddleware for the error messages
app.use(notFound)
app.use(errorHandler)


app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
 });