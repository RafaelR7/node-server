const mongoose = require('mongoose');

localdbURI = 'mongodb://localhost:27017/TodoMongoose';

mongoose.Promise = global.Promise;
mongoose.connect( process.env.MONGODB_URI);

module.exports = { mongoose };

