require('./database')
const app = require('./app');
const port = app.get('port');
app.listen(port);
console.log('listening on port '+port);
