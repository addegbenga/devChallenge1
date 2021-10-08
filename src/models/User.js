const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userModel = new mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String,
      select: false
    },
    bio: String,
    phone: String,
    avatarUrl: String,
    avatarId: String

  },
  {
    timestamps: true
  }
)

// Encrypt password using bcrypt
userModel.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
// { document: true, query: false }).

// match user enterd user password

userModel.methods.matchPassword = async function (enteredPass) {
  return await bcrypt.compare(enteredPass, this.password)
}

userModel.methods.getSignedJwtToken = function () {
  return jwt.sign(
    {
      _id: this._id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '2days'
    }
  )
}

module.exports = mongoose.model('User', userModel)
