var MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log(`unable to connect to Mongo Server ${err}`);
    }
    console.log('Connect to MongoDB server');

    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5bed61305a4d59a72ac6ce29")
    },{ 
        $set: {
            age: "10"
        }
    },{
        returnOriginal: false
    }).then((result) => { 
        console.log(result);
    });

   

    client.close();

});