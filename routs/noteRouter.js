const Router = require('express')
const noteController = require('../controllers/noteController')
const router = new Router()

    router.post('/', noteController.post)
    router.get('/', noteController.get)

module.exports = router