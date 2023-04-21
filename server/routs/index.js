const Router = require('express')
const userRouter = require('./userRouter')
const noteRouter = require('./noteRouter')

const router = new Router()

router.use('/user', userRouter,)
router.use('/note', noteRouter,)

module.exports = router