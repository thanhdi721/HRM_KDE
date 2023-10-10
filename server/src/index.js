const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/HRM_KDE', { useNewUrlParser: true });

app.get('/', (req, res) => {
    res.send('HELLO WORD!!')
})

// Định nghĩa các routes và controllers ở đây

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
