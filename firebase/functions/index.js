const express = require('express');
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const dorms = require('./routes/dorms');

admin.initializeApp();
dorms.initFirestoreDb(admin);

const app = express();

app.use('/dorms', dorms.router);

exports.app = functions.https.onRequest(app);