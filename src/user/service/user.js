'use strict'

const user_service = require('../repository/user.js')

exports.findOne = (req, res) => {
    user_service.findOne(req.params.email, (user) => {
        if (user.length == 0) res.send('error : user not found')

        const response = {
            result : user,
            id : req.params.email
        }

        res.json(response)
    })

}