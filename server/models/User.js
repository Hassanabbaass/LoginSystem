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
            type: String
        },
        password: {
            type: String
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        isActive: {
            type: Boolean,
            default: true
        }
    }
)

module.exports = mongoose.model("user", userSchema);