const router = require('express').Router()
const userControler = require('../controllers/UserController')

router.post('/user', userControler.create)
router.delete('/user/:id', userControler.delete)
router.put('/user/:id', userControler.update)
router.get('/user/:id', userControler.listById)
router.get('/user', userControler.listUsers)

module.exports = router

