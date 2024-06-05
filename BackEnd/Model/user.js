import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

export default mongoose.model("Users",new Schema({
    id: {type: ObjectId, require: true},
    username: {
        type: String,
        require: true,
        validate: {
            validator: (value)=>value.length>3,
            message: "Tên đăng nhập phải lớn hơn 3 ký tự"
        }
    },
    password: {
        type: String,
        require: true,
    },
    fullname: {
        type: String,
        require: true,
    },
    phonenumber: {
        type: String,
        require: false,
    },
    email: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: false,
    }

}))