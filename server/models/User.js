const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String
        },
        email: {
            type: String
        },
        image: {
            type: Buffer
        },
        password: {
            type: String
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    }
)

module.exports = mongoose.model("user", userSchema);