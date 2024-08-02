import { Schema, model, models } from 'mongoose';

const todoSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'Medium',
    },
    completed: {
        type: Boolean,
        default: false
    },
});

const Todo = models.Todo || model("Todo", todoSchema);

export default Todo;