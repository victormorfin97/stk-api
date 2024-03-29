'use strict'

let express = require('express')
let ClienteController = require('../controllers/client')
let api = express.Router()

api.post('/save-client', ClienteController.saveClient)
api.get('/get-client/:id', ClienteController.getClientById)
api.get('/get-clients', ClienteController.getClients)
api.put('/update-client/:id', ClienteController.editClient)
api.delete('/delete-client/:id', ClienteController.deleteClient)
api.post('/create-db', ClienteController.createDatabase)

module.exports = api