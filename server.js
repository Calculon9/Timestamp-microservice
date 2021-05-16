const express = require('express');
const controller = require('./controllers/dataController');

const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server listening on port " + port + "..."));

// Post middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static homepage
app.use(express.static('public'));

// Current date
app.get('/api/', controller.getDefault);

// Date query
app.get('/api/:date?', controller.get);

// Post
app.post('/api/date', controller.post);
