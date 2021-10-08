const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async (req, res, next) => {
  // get token from cookies
//   const token = req.cookies.refreshToken
  const jwttoken = req.headers.authorization
  //   console.log(req.headers)
  const TokenArray = jwttoken.split(' ')

  // Check if not token
  if (!TokenArray) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }

  // Verify token
  try {
    const decoded = jwt.verify(TokenArray[1], process.env.JWT_SECRET)
    req.user = await User.findById(decoded._id)
    if (!req.user) {
      return res.json('user doest not exist')
    }
    next()
  } catch (err) {
    console.log(err + ' token is not valid || something wrong with token')
    res.status(500).json({ msg: 'Server Error' })
  }
}

module.exports = { auth }
