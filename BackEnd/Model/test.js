import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

export default mongoose.model("Test", new Schema({
    id: {type: ObjectId},
    name: {type: String, require: true}
}))