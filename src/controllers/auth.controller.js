const User = require('../models/User')
const { sendTokenResponse } = require('../middlewares/utils')
const bcrypt = require('bcryptjs')

exports.registerUser = async (req, res) => {
  try {
    const { ...args } = req.body
    const email = await User.findOne({ email: args.email })
    if (email) {
      return res.status(400).json('User with that email already exist')
    }
    await User.create(args)
    return res.json({ msg: 'account succesfully created' })
  } catch (error) {
    console.log(error)
    return res.status(500).json('Something went wrong')
  }
}

// login user locally
exports.loginUser = async (req, res) => {
  const { ...args } = req.body
  try {
    const user = await User.findOne({ email: args.email }).select('+password')
    if (!user) {
      return res.status(400).json('No user with this account found')
    }
    // check if password matches
    const isMatch = await user.matchPassword(args.password)

    if (!isMatch) {
      return res.status(400).json('invalid credentials')
    }
    sendTokenResponse(user, 200, res)
  } catch (err) {
    console.error(err.message)
    res.status(500).send(err + ' Server error')
  }
}

exports.getAuthUser = async (req, res) => {
  try {
    return res.json(req.user)
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
}

exports.editUser = async (req, res) => {
  const { ...args } = req.body

  const salt = await bcrypt.genSalt(10)
  const newpassword = await bcrypt.hash(args.password, salt)

  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $set: {
          name: args.name,
          password: newpassword,
          phone: args.phone,
          bio: args.bio,
          avatarUrl: args.avatarUrl,
          avatarId: args.avatarId
        }
      },
      { new: true }
    )

    return res.json({
      msg: 'Profile updated',
      data: user
    })
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
}
