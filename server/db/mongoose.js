const mongoose = require('mongoose');

localdbURI = 'mongodb://localhost:27017/TodoMongoose';

let db = {
    localhost: 'mongodb://localhost:27017/TodoMongoose',
    mlab = 'admin:admin001@ds045137.mlab.com:45137/node-todoapp',
  };

mongoose.Promise = global.Promise;
mongoose.connect(db.localhost || db.mlab), { useNewUrlParser: true };

module.exports = { mongoose };