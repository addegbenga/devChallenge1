const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const path = require('path')
const app = express()
const CONNECTDB = require('./src/config/db')

// Load Config
dotenv.config()

CONNECTDB()

app.use(express.json())
app.use(cors('*'))
app.use(morgan('tiny'))

app.use('/v1', require('./src/routes/v1'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = 5000 || process.env.PORT
app.listen(PORT, () => console.log('connected to Localhost'))
