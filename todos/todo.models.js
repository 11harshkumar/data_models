import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default : false
    },
    cretedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"  
    },
    subTodos: [ // this shows the sub todos data type is array of objects
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "SubTodo"
        }
    ] // Array of Sub TODOs
}, {timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)
