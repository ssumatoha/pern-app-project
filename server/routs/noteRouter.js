const Router = require('express')
const noteController = require('../controllers/noteController')
const router = new Router()

    router.post('/', noteController.create)
    router.get('/', noteController.get)

module.exports = router