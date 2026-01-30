import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    text: {
      // A1
    },
    done: {
      // A2
    }
  },
  { timestamps: true }
);

// Nice-to-have indexing for sorting/filtering
todoSchema.index({ done: 1, createdAt: -1 });

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
