const mongoose = require('mongoose')
const URL_CONNECT = 'mongodb+srv://juanptorresa:buPew2ux50MKLrBQ@datosquindio.imb6lqg.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URL_CONNECT,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB conectada')).catch(err => console.log(err))