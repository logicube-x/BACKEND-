const express=require('express');

const app=express();

app.use(express.json())
// task-notes

const notes=[];

app.post("/notes",(req,res)=>{
notes.push(req.body);

res.status(201).json({
    message:"note created successfully"
})

})


module.exports=app;