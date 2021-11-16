const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./database.config');
const mongoose = require('mongoose');
const cors = require('cors');
//for sql
//app.use(cors())
//const port = process.env.PORT || 5000
///
// Connecting to the database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// create express app
const app = express();

//set cors
var corsOptions = {
    origin: '*', //from where the calling coming
    methods: "*", //post, get, put,delete
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Contacts application. Take contacts quickly. Organize and keep track of all your contacts."});
});

//add routes (contact controller routes ), listen for requests
require('./contact.routes')(app);
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

//angular js x.html (view/model/logic)
//angualr x.html = view , x.ts = logic , Interface/class =Model

//M -Model Interface /Class
//V - no view (using angular)
//C -  Controller -Logic , i'm getting all the calls from the routing (contact.routes.js)
