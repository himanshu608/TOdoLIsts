import mongoose, {Schema} from "mongoose";

const toDoSchema = new Schema({
    userId: String,
    title: String,
    description: String
})

const ToDo = mongoose.models.ToDo || mongoose.model("ToDo",toDoSchema);

export default ToDo;