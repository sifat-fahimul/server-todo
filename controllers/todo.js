// import Todo from "../models/Todo";

import Todo from "../models/Todo.js";

// create toto function
export const createTodo = async (req, res, next) => {
  const newTodo = new Todo(req.body);
  try {
    const saveTodo = await newTodo.save();
    res.status(200).json(saveTodo);
  } catch (error) {
    next(error);
  }
};

// get toto function
export const getAllTodo = async (req, res, next) => {
  try {
    const allTodo = await Todo.find({});
    res.status(200).json(allTodo);
  } catch (error) {
    next(error);
  }
};

// get single todo function
export const getSingleTodo = async (req, res, next) => {
  try {
    const singleTodo = await Todo.findById(req.params.id);
    res.status(200).json(singleTodo);
  } catch (error) {
    next(error);
  }
};

// update todo function
export const updateTodo = async (req, res, next) => {
  try {
    const updateTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateTodo);
  } catch (error) {
    next(error);
  }
};

//   delete todo function
export const deleteTodo = async (req, res, next) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json("Todo has been deleted!");
  } catch (error) {
    next(error);
  }
};
