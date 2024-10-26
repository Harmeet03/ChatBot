const mongoose = require('mongoose');
const messageSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
);

const messages = mongoose.model('messageSchema', messageSchema);
module.exports = messages;