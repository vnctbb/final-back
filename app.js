'use strict'

const express = require('express');
const app = express();

const user = require('./src/user/http/user.js')

const PORT = 80;

app.use('/user', user)

app.use((req, res, next) => {
    res.send('Wrong routes')
})

app.listen(PORT, (err) => {
    if (err) return err
    console.log(`Server running on PORT ${PORT}`)
});