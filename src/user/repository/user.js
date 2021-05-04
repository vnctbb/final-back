'use strict';

const MongoClient = require('mongodb').MongoClient;

exports.findOne = (email, callback) => {
    MongoClient.connect(process.env.DB_URL,{ useUnifiedTopology: true}, (err,client) => {

        if (err) return err;

        const collection = client.db(process.env.DB_NAME).collection('users');

        collection.find({email_address : email}).toArray((err,data)=> {
            client.close();
            callback(data)
        });

    });
}

