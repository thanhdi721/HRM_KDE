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

const corsOptions = {
    origin: 'http://localhost:3000', // Địa chỉ của máy chủ React của bạn
    credentials: true, // Bật chế độ credentials (bao gồm cookie) trong yêu cầu CORS
};
  
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(cookieParser());



db.connect();

routes(app);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
