const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/depquindio",{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB conectada')).catch(err => console.log(err))