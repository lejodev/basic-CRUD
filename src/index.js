const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings 
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/bikes', require('./routes/bikes'))

app.listen(8007, () => {
    console.log("Listenong on port 8007");
});