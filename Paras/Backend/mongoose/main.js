import mongoose from "mongoose";
import express from "express";
import {Todo} from "./models/Todo.js"

let a = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/',(req,res)=>{
    const todo = new Todo({title:1,desc: "Description of this todo",isDone:false,age:32})
    todo.save()
    res.send('Successfully Saved')
})
app.get("/list",async (req,res)=>{
    const todo = await Todo.find({title:"1"});
    res.send(todo)
})

app.listen(port,()=>{
    console.log('Server Chal gya')
})