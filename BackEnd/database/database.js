import mongoose from "mongoose";
mongoose.set('strictQuery',true);
const connect = async ()=>{
    try {
        let connection= await mongoose.connect(process.env.MONGOURL);
        console.log("Kết nối thành công");
        return connection;
    } catch (error) {
        console.log("Lỗi kết nối");
    }
}

export default connect;