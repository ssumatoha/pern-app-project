const ApiError = require("../error/apiError")
const bcript = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Note } = require('../models/models')
require('dotenv').config()

const genJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        )
}

class UserController {
    async registration(req, res) {
        const { email, password, role } = req.body
        if(!email || !password) {
            return next(ApiError.badReqest('email или пароль не верны'))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate) {
            return next(ApiError.badReqest('данный юзер уже зарегистрирован'))
        }
        const hashPassword = await bcript.hash(password, 5)
        const user = await User.create({email, password: hashPassword, role})
        const token = genJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res) {

    }

    async auth(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badReqest('не задан id'))
        }
        res.json(id)
    }
}

module.exports = new UserController()