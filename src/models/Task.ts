import { Schema, model } from "mongoose";

// url https://www.youtube.com/watch?v=EerPAh7pKIo
// 55:04
const TaskSchema = new Schema({
  title: {
    type: String,
    require: true,
    lowercase: true,
  },
  description: {
    type: String,
    require: true,
    lowercase: true,
  },
});

export default model("Task", TaskSchema);
