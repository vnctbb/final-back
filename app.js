'use strict'

const express = require('express');
const app = express();

const hello = require('./src/hello/hello.js')

const PORT = 80;

app.use('/hello', hello)

app.use((req, res, next) => {
    res.send('Wrong routes')
})

app.listen(PORT, (err) => {
    if (err) return err
    console.log(`Server running on PORT ${PORT}`)
});