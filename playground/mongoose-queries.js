const ObjectID = require('mongodb').ObjectID;

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5bed74dbcaba9d8cd4369ea2';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find ID');
    }
    console.log('User by id', user);
}).catch((e) => console.log(e));

