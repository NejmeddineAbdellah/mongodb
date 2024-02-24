import mongoose,{ Schema } from "mongoose";

const todoSchema = new Schema (
  {
    title : String,

  },{
    timeseries:true,
  }
);

const Todo = mongoose.model.Todo || mongoose.model("Todo",todoSchema);


export default Todo;