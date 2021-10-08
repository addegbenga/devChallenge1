const express = require('express')

const router = express.Router()
const { registerUser, loginUser, getAuthUser, editUser } = require('../../controllers/auth.controller')
const { auth } = require('../../middlewares/verify')

router.post('/register', registerUser)
router.post('/login', loginUser)

router.get('/me', auth, getAuthUser)

router.post('/edit', auth, editUser)

module.exports = router
