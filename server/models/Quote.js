const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
    {
        quote: {
            type: String
        }
    }
)

module.exports = mongoose.model("quote", quoteSchema);