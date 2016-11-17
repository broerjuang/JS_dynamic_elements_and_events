const express = require('express')
const router = express.Router()
const controller = require('../controllers/todo.controller')

// GET all todos
router.get('/todos', controller.list)

// POST a todo
router.post('/todos', controller.build)

// GET to do by its id
router.get('/todos/:todo_id', controller.find)

// PUT todo by its id
router.put('/todos/:todo_id', controller.update)

// delete todo by its id
router.delete('/todos/:todo_id', controller.destroy)

module.exports = router;
