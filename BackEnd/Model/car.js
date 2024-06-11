import { Int32, ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

export default mongoose.model("car",new Schema({
    id: {type: ObjectId, require: true},
    name: {type: String, require: true},
    authcar: {type: String, require: true},
    price: {type: Number, require: true},
    img: {type: String, require: true},
    description: {type: String, require: false},
    highlight: {type: String, require: false},
    address: {type: String, require: true},
    rate: {type: Number, require: true},
    times: {type: Number, require: true},    
}))