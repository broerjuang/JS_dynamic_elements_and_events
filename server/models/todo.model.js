'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Increment = require('mongoose-sequence')

const todoSchema = new Schema({
  todo_id : {type: number, unique: true},
  title: {type: String, required: true},
  content : {type: String},
  status: {type: String}
})

todoSchema.plugin(Increment, { inc_field: 'todo_id' })

module.exports = mongoose.model('Card', todoSchema)
