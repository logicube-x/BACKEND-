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

app.delete("/notes/:index",(req,res)=>{
    const index=req.params.index;

    delete notes[index];

    res.status(200).json({
        message:"note deleted successfully"
    })
})


app.patch("/notes/:index",(req,res)=>{

const index=req.params.index;
const name=req.body.name;

notes[index].name=name;

res.status(200).json({
    message:"note updated successfully"
})

})

module.exports=app;