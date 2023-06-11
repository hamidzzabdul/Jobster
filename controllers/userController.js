const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require('./handerFactory')
const User = require('../models/userModel')

exports.getAllUsers = factory.getAll(User)
exports.getUser = factory.getOne(User)
exports.updateUser = factory.updateOne(User)
exports.deleteAllUser = factory.deleteAll(User)
exports.createUser = catchAsync(async (req,res,next) => {
    const doc = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        role: req.body.role
    })
    this.password = undefined
    if(!doc){
        return next("Please provide fill in all the options", 404)
    }

    res.status(200).json({
        status: 'Success',
        data:{
            doc
        }
    })
})