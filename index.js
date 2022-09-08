const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const morgan = require('morgan');
var cors = require('cors');
const app = express();
app.use(morgan('combined'));
app.use(cors());
app.options('*', cors());

const port = process.env.PORT;
const userRoute = require('./api/routes/authentication/userRoute');
const roleRoute = require('./api/routes/authentication/roleRoute');
const actionRoute = require('./api/routes/authentication/actionRoute');
const roleActionRoute = require('./api/routes/authentication/roleActionRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//import routes
app.use('/api/user', userRoute);
app.use('/api/role', roleRoute);
app.use('/api/action', actionRoute);
app.use('/api/roleaction', roleActionRoute);

app.listen(port, (req, res) => {
    console.log('server listening on port ' + port);
});