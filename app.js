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

// enable cors
app.use(cors())
app.options('*', cors())
app.use(morgan('tiny'))

app.use('/v1', require('./src/routes/v1'))

app.use(express.static(path.join(__dirname, 'build')))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('connected to Localhost'))
