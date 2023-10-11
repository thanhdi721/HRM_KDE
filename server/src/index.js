const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./config/db');
const routes = require('./routes');


app.use(cors());
app.use(bodyParser.json());

db.connect();

routes(app);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
