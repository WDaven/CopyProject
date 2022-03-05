const express = require('express');
const functions = require('firebase-functions');
const dorms = require('./routes/dorms');

const app = express();

// Define specific routes here (e.g. /dorms, /users, etc.)
app.use('/dorms', dorms);

app.get('/', (req, res) => {
    res.status(200).json({'text': 'Hello!'})
});

exports.app = functions.https.onRequest(app);