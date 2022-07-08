require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const userRoute = require('./routes/userRoute');
const {notFound, errorHandler} = require('./middlewares/errorMiddleware');


const PORT = process.env.PORT || 3000

const app = express()

//creates a path and imports in client build. 
app.use(express.static(path.resolve(__dirname, './bank-client/build')))
app.get('*', function(request, response){
  response.sendFile(path.resolve(__dirname, './bank-client/build', 'index.html'))
})

app.use(cors())

app.use(express.json())

app.use(logger('dev'));

app.get("/", (req, res) => {
  res.send('API is working!');
})


app.use('/api/users', userRoute);

app.get('/api/hello', (req, res) => {
  res.json({msg: "Hello from the backend!"})
} )



//add these from errorMiddleware for the error messages
app.use(notFound)
app.use(errorHandler)


app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
 });