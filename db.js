const {Sequelize} = require('sequelize')
const config = require('config')

module.exports = new Sequelize(
    config.get('dbName'), // название бд
    config.get('dbUser'), // имя юзнра
    config.get('dbPassword'), // пароль бд
    {
        dialect: 'postgres',
        host: config.get('dbHost'),
        port: config.get('dbPort')
    }
)