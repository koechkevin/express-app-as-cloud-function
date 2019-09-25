const functions = require('firebase-functions');
const app = require('./dist/index');

exports.app = functions.https.onRequest(app);
