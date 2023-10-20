const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const app = express();
const port = process.env.PORT || 5000;
const db = require('./config/db');
const routes = require('./routes');

  
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));

app.use(bodyParser.json());
app.use(cookieParser());



db.connect();

routes(app);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
