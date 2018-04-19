
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/Users', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  const db = client.db('TodoApp');
  
//  db.collection('Todos').findOneAndUpdate({
//    _id: new ObjectID("5ad8dc35600ba13c7521f011")
//  }, {
//    $set: {
//      completed: true
//    }
//  }, {returnOriginal: false}).then((result) => {
//    console.log(result);
//  });
  
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5ad8df3d600ba13c7521f122")
  }, {
    $set: {
      name: "Ion Calugaru"
    },
    $inc: {
      age: 1
    }
  }, {returnOriginal: false}).then((result) => {
    console.log(result);
  });
  
//  client.close();
});
