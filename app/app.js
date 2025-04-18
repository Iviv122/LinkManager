const express = require("express")
const app = express()
const path = require('path')
const port = 3000

const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017',{useNewUrlParser: true,useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/',(req , res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/items',(req,res)=>{
    res.json({message: "Get all items"});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})