import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    desc: { type: String, required: true },
    date: { type: String, required: true },
    color: {
      type: String,
    },
    completed: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("todo", TodoSchema);
