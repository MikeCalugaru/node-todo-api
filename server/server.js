var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400);
    res.send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400);
    res.send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    res.status(400);
    return res.send({});
  };

  Todo.findById(id).then((todo) => {
    if(!todo) {
      res.status(404);
      return res.send({});
    } 
      res.send({todo});
  }).catch((e) => {
    res.status(400);
    res.send(e);
  });
});

app.delete('/todos/:id', (req, res) => {
  // get the id
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    res.status(400);
    return res.send();
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo) {
      res.setatus(404);
      return res.send({});
    }
    res.status(200).send({todo});
  }).catch((e) => {
    res.status(404);
    res.send(e);
  });
  //validate the id -> not valid? return 404
  //remove todo by id
    //success
      //if no doc, send 404
      //if doc, send doc back with a 200
    //error - send 400 with empty body
});


app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};