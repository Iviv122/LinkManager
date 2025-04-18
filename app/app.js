const express = require("express")
const app = express()
const path = require('path')
const port = process.env.HTTPPORT || 3000

const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/LinkManager');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/',(req , res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/items', async (req,res)=>{

    try{
        const items = await db.collection("links").find({}).toArray();
        res.json(items);
    }catch(error){
        console.error("Error fetching data");
        res.status(500).json({error: "Internal Server Errror"});
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})