const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require('../models')

const login = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({email: req.body.email}).select("+password")
        if(foundUser) {
            console.log(foundUser)
            const isMatch = await bcrypt.compare(req.body.password, foundUser.password)
            console.log(isMatch, "is match")
            if(isMatch) {
                const token = jwt.sign({_id: foundUser._id}, process.env.TOKEN_SECRET, {
                    expiresIn: "7h"
                })
                return success(res,'Login success', token, 200)
            }else {return failure(res,'Email or password is incorrect', 400)}
        } else {return failure(res, 'Email or password is incorrect', 400)}
    }
    catch (err) {
        return failure(res, err, 500)
    }
}

const register = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({email: req.body.email})
        if(foundUser) {
            return failure(res, 'Email already in use.', 200)
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt)

        const {firstName, lastName, username, email} = req.body
        const user = {
            password: hash, 
            firstName, 
            lastName, 
            email, 
            username
        }

        const createdUser = await db.User.create(user)
        if(createdUser){
           return success(res, "User successfully registered", createdUser, 200)
        }
        else {return failure(res, 'Failed to register user', 400)}

    }
    catch(err) {
        return failure(res, err, 500)
    }
}

// Handle a success response
const success = (res, msg, returnedData, status) => {
    res.status(status).json({
        message: msg,
        data: returnedData
    })
}

// Handle a failed response
const failure = (res, msg, status) => {
    res.status(status).json({
        message: msg
    })
}

module.exports = {
    login, 
    register
}
