## Setup

Before starting the server please make sure you have following modules installed in your computer:
- NodeJs
- Nodemon

After all those stuff are available in your computer, you can `npm install` on your terminal. Then, you can start using `> npm start` in this directory.


## Dependencies
```js
body-parser
chai
chai-http
cookie-parser
debug
express
faker
jade
mocha
mongoose
mongoose-sequence
morgan
serve-favicon
```


## API Routing

| Method    | Routes                 | Description           |
| --------- |:----------------------:| ---------------------:|
| GET       | /api/todos             | Get all todos         |
| POST      | /api/todos             | Create a todo         |
| GET       | /api/todos/:todo_id    | Get todo by its id    |
| PUT       | /api/todos/:todo_id    | Update todo by its id |
| DELETE    | /api/todos/:todo_id    | Delete todo by its id |

## Copyright

Created with :heart: [broerjuang](https://github.com/broerjuang)
