import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  //imposing condition
  title: String,
  desc: String,
  isDone: Boolean,
  days: Number,
});

export const Todo = mongoose.model("Todo", TodoSchema);
