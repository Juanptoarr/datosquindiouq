const mongoose = require('mongoose')
require('dotenv').config()

const URL_CONNECT = process.env.URL_CONNECT
mongoose.connect(URL_CONNECT,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('DB conectada')).catch(err => console.log(err))
