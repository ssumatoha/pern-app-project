const {Note} = require('../models/models')
const ApiError = require('../error/apiError')

class NoteController {
    async create(req, res) {
        const {text} = req.body
        const note = await Note.create({text})
        return res.json(note)
    }

    async get(req, res) {
        const notes = await Note.findAll()
        return res.json(notes)
    }
}

module.exports = new NoteController()