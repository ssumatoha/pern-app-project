const ApiError = require("../error/apiError")

class UserController {
    async registration(req, res) {
        
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