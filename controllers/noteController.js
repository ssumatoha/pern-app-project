const {Note} = require('../models/models')
const ApiError = require('../error/apiError')

class NoteController {
    async create(req, res) {
        const {text} = req.body
        const note = await Note.create({text})
        return res.json(note)
    }

    async get(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        const notes = await Note.findAndCountAll({limit, offset})
        return res.json(notes)
    }
}

module.exports = new NoteController()