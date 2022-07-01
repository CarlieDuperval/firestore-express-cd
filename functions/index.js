const functions = require("firebase-functions");
const express = require('express');


//This is an API point
const app = express();   // the dark blue app is refer to express
app.get('/test' , (req, res) =>{
    res.send('This is actually working')
})


// This is an API point
app.get('/' , (req, res) => {
    res.send('This is Home')
})


// these are ny functions
//create cloud function   // export.app is our cloud app 
exports.app = functions.https.onRequest(app) // this function replace the app.listen(PORT)






// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
