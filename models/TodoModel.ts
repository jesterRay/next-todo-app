import {model,models, Schema} from "mongoose";


const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    complete_date: {
        type: String
    },
    actual_complete_date: {
        type: String
    },
    status: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

// const TodoModel = models.Todo || model('Todo', TodoSchema);

export {
    TodoSchema
};
