const express = require('express')
require('dotenv').config()
const config = require('config')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routs/index')
const errorHandler = require('./middleware/errorHendlingMiddleware')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

// обработка ошибок
app.use(errorHandler)

const PORT = config.get('port') || 5000

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'it`s a live!!!'})
// })

async function start() {
    try {
        await sequelize.authenticate() // подключает базу данных
        await sequelize.sync() // сверяет бд со схемой бд
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
    } catch(e) {
        console.log('Server error ',e.message)
        process.exit(1)
    }
}

start()