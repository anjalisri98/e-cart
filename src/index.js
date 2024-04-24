const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose  = require('mongoose');
const app = express();
const multer = require("multer")
app.use(bodyParser.json());


//use your own db connection string
mongoose.connect("mongodb+srv://AnjaliSrivastava:e5YgmiAmxGsiLRwp@cluster0.i6luj.mongodb.net/group26Database?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(multer().any())
app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});