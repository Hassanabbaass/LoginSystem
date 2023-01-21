const router = require("express").Router();

const quoteSchema = require("../models/Quote");
const { route } = require("./Auth");

router.get("/getQuotes", async (req,res) => {
    try{
        const allQuotes = await quoteSchema.find();
        res.status(200).json(allQuotes)
    } catch (err) {
        console.log("Error getting qoutes")
        res.status(500).json(err)
    }
})

router.post("/addQuote", async (req,res) => {
    try{
        const quoteInfo = req.body;
        const newQuote = new quoteSchema({
            quote: quoteInfo.quote
        })
        await newQuote.save()
        res.status(200).json("Quote Added Successfully")
    } catch (err) {
        console.log("Error adding qoute")
        res.status(500).json(err)
    }
})

router.put("/editQuote/:id", async (req,res) => {
    try{
        const quoteInfo = req.body
        await quoteSchema.findByIdAndUpdate(req.params.id, 
            {$set: {quote: quoteInfo.quote}},
            {new: true}
        )
        res.status(200).json("Quote updated succesfully")
    }
    catch (err){
        console.log("Error updating qoute")
        res.status(500).json(err)
    }
})

router.delete("/deleteQuote/:id", async (req,res) => {
    try{
        await quoteSchema.findByIdAndDelete(req.params.id)
        res.status(200).json("Quote has been deleted")
    } catch(err) {
        console.log("error deleting quote")
        res.status(500).json(err)
    }
})

module.exports = router;