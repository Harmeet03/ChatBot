const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
);

const users = mongoose.model('userSchema', userSchema);
module.exports = users;