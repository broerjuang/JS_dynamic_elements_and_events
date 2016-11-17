
'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const expect = chai.expect

const URL = 'http://localhost:3000/api'
chai.use(chaiHttp);

// requiring model
const Todo = require('../models/todo.model')

describe('creating a new todo', () => {
  let newContent = faker.lorem.sentence()
  it('expect to get a new todo content', () => {
    chai.request(URL)
      .post('/todos')
      .send({
        content: newContent
      })
      .end((req, res) => {
        expect(res.body.content).to.be.equal(content)
        expect(res).to.have.status(200)
        expect(res.body.content).to.be.a('string')
        done()
      })
  })
})

describe('Get a todo', () => {
  it('expect to get a todo', () => {
    chai.request(URL)
      .get('/todos/16')
      .end((req, res) => {
        expect(res).to.have.status(200)
        expect(res.body.content).to.be.a('string')
        done()
      })
  })
})

describe('update todo', () => {
  let updateContent = faker.lorem.sentence()
  it('expect todo to be updated', () => {
    chai.request(URL)
      .put('/todos/16')
      .send({
        content: updateContent
      })
      .end((req, rs) => {
        expect(res.body.content).to.be.equal(updateContent)
        done()
      })
  })
})

describe('get all available todo', () => {
  it('expect to get all todos', () => {
    chai.request(URL)
      .get('/todos')
      .end((req, res) => {
        expect(res.body).to.be.equal('object')
        expect(res).to.have.status(200)
        done()
      })
  })
})


describe('delete a single todo', () => {
  let newContent = faker.lorem.sentence()
  it('expect to get all todos', () => {
    chai.request(URL)
      .delete('/todos/16')
      .end((req, res) => {
        expect(res.body.message).to.be.equal('it has been removed')
        expect(res).to.have.status(200)
        done()
      })
  })
})
