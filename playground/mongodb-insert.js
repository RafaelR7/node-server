var MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID;


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log(`unable to connect to Mongo Server ${err}`);
    }
    console.log('Connect to MongoDB server');

    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'go to the gym',
        completed: true,
        date: new Date ()
    }, (err, result) => {
        if (err) {
            return console.log(`unable to insert ${err}`);
        }
        console.log(result.ops);
        
    });

    // db.collection('Users').insertOne({
    //     name: 'Rafael',
    //     age: '33',
    //     location: 'Indaiatuba'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(`unable to insert ${err}`);
    //     }
    //     console.log(result.ops);

    // });

    client.close();
    
});