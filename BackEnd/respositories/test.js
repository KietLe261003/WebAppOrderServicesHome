import mongoose from "mongoose";
import test from "../Model/test.js";
const testPush = async ({name})=>{
    try {
        //debugger;
        let newName = await test.create({
            name: name
        })
        debugger;
        return {
            ...newName._doc
        };
    } catch (error) {
        console.log("Lỗi đẩy tài liệu");
    }
}

export default {
    testPush
}