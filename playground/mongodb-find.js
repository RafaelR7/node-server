var MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log(`unable to connect to Mongo Server ${err}`);
    }
    console.log('Connect to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Users').find({
    //    name: "Rafael"
    // }).toArray().then((docs) => {
    //     console.log(docs);
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(`unable to insert ${err}`);
    //     }
    //     console.log(result.ops);

    // });

    db.collection('Users').find().count().then((count) => {
        console.log(`Count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch', err);
    });

    client.close();

});