const mongoose = require('mongoose');

localdbURI = 'mongodb://localhost:27017/TodoMongoose';

mongoose.Promise = global.Promise;
mongoose.connect( process.env.MONGODB_URI || localdbURI );

module.exports = { mongoose };

// heroku config:set MONGODB_URI=mongodb://admin:admin001@ds045137.mlab.com:45137/node-todoapp