const express = require('express');
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const _ = require('lodash');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

var app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

//INSERT TODO
app.post('/todos', (req, res) => {
   var todo = new Todo({
      text: req.body.text
   });
   
   todo.save().then((doc) => {
      res.send(doc);
   }, (e) => {
      res.status(400).send(e);
   });
});

//GET ALL
app.get('/todos', (req, res) => {
   Todo.find().then((todos) => {
      res.send({todos});
   }, (e) => {
      res.status(400).send(e);
   });
});

//GET BY ID
app.get('/todos/:id', (req, res) => {
   var id = req.params.id;
   if (!ObjectID.isValid(id)) {
      res.status(404).send();
   }
   Todo.findById(id).then((todo) => {
      if (!todo) {
         return res.status(404).send();
      }
      res.send({todo})
   }).catch((e) => {
      res.status(404).send();
   });
});

//DELETE BY ID
app.delete('/todos/:id', (req, res) => {
   var id = req.params.id;
   if (!ObjectID.isValid(id)) {
      res.status(404).send();
   }
   Todo.findByIdAndRemove(id).then((todo) => {
      if (!todo) {
         return res.status(404).send();
      }
      res.send({todo});
   }).catch((e) => {
      res.status(404).send();
   });
});

//UPDATE BY ID
app.patch('/todos/:id', (req, res) => {
   var id = req.params.id;
   var body = _.pick(req.body, ['text', 'completed']);
   
   if (!ObjectID.isValid(id)) {
      res.status(404).send();
   }
   
   if (_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
   } else {
      body.completed = false;
      body.completed = null;
   }
   
   Todo.findByIdAndUpdate( id, { $set:body }, { new: true}).then((todo) => {
      if (!todo) {
         res.status(404).send();
      }
      res.send({todo});
   }).catch((e) => {
      res.status(404).send();
   });
});


// POST /users
app.post('/users', (req, res) => {
   var body = _.pick(req.body, ['email', 'password']);
   var user = new User(body);
 
   user.save().then(() => {
     return user.generateAuthToken();
   }).then((token) => {
     res.header('x-auth', token).send(user);
   }).catch((e) => {
     res.status(400).send(e);
   })
 });

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});