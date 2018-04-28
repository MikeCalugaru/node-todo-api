const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) - remove all records

//Todo.remove({}).then((result) => {
//  console.log(result);
//});

//Todo.findOneAndRemove();
//Todo.findByIdAndRemove

//Todo.findByIdAndRemove('5ae4585d74ffdb8f5cb1e98a').then((todo) => {
//  console.log(todo);
//});

Todo.findOneAndRemove({_id: '5ae4585d74ffdb8f5cb1e98a'}).then((todo) => {
  
});