const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    
    
})

app.use(require("./routes/api"));
app.use(require("./routes/views"));
app.listen(PORT, () => {console.log("Listening on http://localhost${PORT}")});




