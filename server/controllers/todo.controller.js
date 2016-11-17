'use strict'
const Todo = require('../models/todo.model')

module.exports = {
  // Listing all todo based on the data inside the database
  list(req, res) {
    Todo
      .find({})
      .then((todos) => res.json(todos))
      .catch((err) => res.json(err))
  },

  // creating todo data based on model
  build(req, res) {
    console.log(req.body);
    // I don't put any id because mongoose will generate it
    let todoData = {
      content : req.body.content
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
      .findOne({todo_id : req.params.todo_id})
      .then((todo) => res.json(todo))
      .catch((err) => res.json(err))
  },

  // This will update todo based on its id
  update(req, res) {
    Todo
      .findOneAndUpdate({todo_id: req.params.todo_id}, { content : req.body.content}, {new: true})
      .then((todo) => res.json(todo))
      .catch((err) => res.json(err))
  },

  destroy(req, res) {
    console.log(req.params.todo_id);
    Todo
      .findOneAndRemove({todo_id: req.params.todo_id})
      .then((data) => res.json(data))
      .catch((err) => res.json(err))
  }

}
