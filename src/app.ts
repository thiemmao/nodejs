require('dotenv').config()
import wedRouter from './routes/wed'
const express = require('express')
const app = express()
const port = process.env.PORT ||3000

//view engine setup
app.set('view engine' , 'ejs')
app.set('views', './src/views')
app.use(express.static('public'))
//configure body parser
wedRouter(app);
//configure static files
app.use(express.static('public'))
//middleware
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})