const express = require("express")
const app = express()
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser')
const CVAuth = require('./routes/route.auth')
const CVUser = require('./routes/route.user')

const mongoose = require('mongoose')

// const dotenv = require("dotenv")
// dotenv.config()

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', express.static(path.join(__dirname, 'docs')));


app.use(bodyParser.json())


app.use("/api/v1/auth", CVAuth)
app.use("/api/v1/user", CVUser)


mongoose.set("strictQuery", true);
// mongoose.connect("mongodb+srv://young:young@podcast.u2a41sc.mongodb.net/")
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database Connected")
    })
    .catch((err) => console.log(err));

const port = process.env.PORT || 3008;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
})
