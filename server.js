const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);


app.use(express.json());

//cors
const corsOptions = {
    origin : 'http://localhost:3000',
    credentials : true
}
app.use(cors(corsOptions));


// Port
const port = process.env.PORT || 5000;

const { atlasURI } = require('./config/keys');
mongoose.connect(atlasURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => http.listen(port))
    .then(() => console.log(`DB connect and running server on port ${ port }`))
    .catch((err) => console.log(err));


app.use(eventRoutes);
