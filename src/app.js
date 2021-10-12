const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const app = express()
const CONNECTDB = require('./config/db')

// Load Config
dotenv.config()

CONNECTDB()

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.use('/v1', require('./routes/v1'))
const PORT = 5000 || process.env.PORT
app.listen(PORT, () => console.log('connected to Localhost'))
