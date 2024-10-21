const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },

        email: {
            type: String,
            require: true
        },

        password: {
            type: String,
            require: true
        }
    },

    {
        timestamps: true
    }
);

const users = mongoose.model('userSchema', userSchema);
module.exports = users;