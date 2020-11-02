const express = require('express')
const app = express()
require('./config/config')
const mongoose = require('mongoose');
app.use(require('./routes/usuario'));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// Using Node.js `require()`


mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        throw err;

    }
    console.log('Base de Datos online');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', 3000);
});