const express = require('express');
const app = express();


require('dotenv').config()
let port = process.env.PORT


//console.log(process.env)
app.get('/students/:std1/:std2',(req,res)=>{
     console.log(req.params.std1)
     const std1 = req.params.std1;
     const std2 = req.params.std2;
    res.json({
       std1,std2
    })
})

app.listen(port,()=>{
    console.log(`this server is running ${port}`)
})