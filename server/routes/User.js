const router = require("express").Router();

const quoteSchema = require("../models/Quote");

const {validateUser} = require("../middleware/Auth")

router.get("/getQuotes", validateUser, async (req,res) => {
    try{
        const allQuotes = await quoteSchema.find();
        res.status(200).json(allQuotes)
    } catch (err) {
        console.log("Error getting qoutes")
        res.status(500).json(err)
    }
})

module.exports = router;