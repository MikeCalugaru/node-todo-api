
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
  
  //deleteMany
//  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//    console.log(result);
//  });
  
//  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//    console.log(result);
//  });
  
  //findOneAndDelete
//  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//    console.log(result);
//  });
//  
  
//  db.collection('Users').deleteMany({name: 'Mike Calugaru'}).then((result) => {
//    console.log(result);
//    console.log('Deleted users');
//  });
 
 db.collection('Users').findOneAndDelete({_id: new ObjectID("5ad65e5cffd8242a283f9643")}).then((result) => {
   console.log(result);
 });


  
//  client.close();
});