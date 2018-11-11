const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser'); -> no need anymore

const items = require('./routes/api/items');

const app = express();


//Middleware express
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db,{ useNewUrlParser : true,})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//use Routes
app.use('/api/items',items);

    const port = process.env.PORT || 3000;

app.listen(port,() => console.log(`Server started on port ${port}`))

