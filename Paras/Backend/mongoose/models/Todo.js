import mongoose from "mongoose";

const TodoShema = new mongoose.Schema({
    title:String,
    desc:String,
    isDone:Boolean,
    age:Number
});

export const Todo = mongoose.model('todos',TodoShema)