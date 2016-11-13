'use strict'
const Todo = require('../models/todo.model')

module.exports = {
  // Listing all todo based on the data inside the database
  list(req, res) {
    Todo
      .find()
      .then((todos) => res.json(todos))
      .catch((err) => res.json(err))
  },

  // creating todo data based on model
  build(req, res) {
    // I don't put any id because mongoose will generate it
    let todoData = {
      title : req.body.title,
      content : req.body.content,
      status : req.body.status
    }
    // generating todo based on todo model using promise
    Todo
      .create(todoData)
      .then((todo) => res.json(todo))
      .catch((err) => res.json(err))
  },

  // This will find the todo based on its id
  find(req, res) {
    Todo
      .find({todo_id : req.params.todo_id})
      .then((todo) => res.json(todo))
      .catch((err) => res.json(err))
  },

  // This will update todo based on its id
  update(req, res) {
    Todo
      .findOneAndUpdate({todo_id: req.params.todo_id}, req.body, {new: true})
      .then((todo) => res.json(todo))
      .catch((err) => res.json(err))
  },

  destroy(req, res) {
    Todo
      .findOneAndRemove({todo_id: req.params.todo_id})
      .then(() => {message: 'it has been removed'})
      .catch((err) => res.json(err))
  }

}
