var MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log(`unable to connect to Mongo Server ${err}`);
    }
    console.log('Connect to MongoDB server');

    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     // _id: new ObjectID('5bed5f729e7d5d6a94cd81f2')
    //     completed: 'true'
    // }).then((result) => { 
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({
    //     // _id: new ObjectID('5bed5f729e7d5d6a94cd81f2')
    //     completed: 'true'
    // }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({
        _id: new ObjectID('5bed66ca1f86c17629516a71')
    }).then((result) => {
        console.log(result);
    });

    client.close();

});