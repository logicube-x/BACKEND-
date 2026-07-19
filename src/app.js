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

app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:"fetched the note successfully",
        note:notes
    })
})

module.exports=app;