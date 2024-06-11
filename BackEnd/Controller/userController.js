import {userRespositories} from '../respositories/index.js';
import statusCode from '../exceptions/HttpStatusCode.js';
const login = async (req,res)=>{
    try {
        debugger;
        const {username,password}= req.body;
        const user=await userRespositories.login({username,password});
        let message="Login successfully";
        if(!user)
            message="Login fail";
        res.json({
            message,
            data: user
        })
    } catch (exceptions) {
        res.status(statusCode.BAD_REQUEST).json({
            message: exceptions.toString()
        })
    }
}
const resgiter = async (req,res)=>{
    try {
        const {username, password, fullname, phonenumber, email, address}=req.body;
        let newUser= await userRespositories.resgiter({username, password, fullname, phonenumber, email, address});
        if(!newUser)
            newUser="Thêm người dùng thất bại";
        res.status(statusCode.INSERT_OK).json({
            message: "Đăng ký người dùng Thành công",
            data: newUser
        })
    } catch (exceptions) {
        res.status(statusCode.BAD_REQUEST).json({
            message: exceptions.toString()
        })
    }
}
const getUser= async(req,res)=>{
    let allUser= await userRespositories.getAllUser();
    res.json({
        message: "All User",
        data: allUser
    })
}

export default {
    login,
    resgiter,
    getUser
}