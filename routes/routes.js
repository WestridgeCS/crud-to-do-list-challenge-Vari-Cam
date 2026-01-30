import express from 'express';
import Todo from '../models/Todo.js';

const router = express.Router();

// Read All ToDos


// Create a ToDo


// Toggle Done
router.post('/:id/toggle', async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) return res.redirect('/');

    todo.done = !todo.done;
    await todo.save();

    res.redirect('/');
  } catch (err) {
    next(err)
  }
});

// Edit


// Delete

export default router;