require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));
console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL ,{
    useNewUrlParser: true,
    useFindAndModify: false,
    
    
})

const routAPI = require("./routes/api")
app.use(routAPI);

const routView = require("./routes/views")
app.use(routView);
app.listen(PORT, () => {console.log(`Listening on http://localhost${PORT}`)});




