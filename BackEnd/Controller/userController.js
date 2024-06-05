import {userRespositories} from '../respositories/index.js';
import statusCode from '../exceptions/HttpStatusCode.js';
const login = async (req,res)=>{
    try {
        const {username,password}= req.body;
        const user=await userRespositories.login({username,password});
        res.json({
            message: "Login successfully",
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
        res.status(statusCode.INSERT_OK).json({
            message: "Đăng ký người dùng",
            data: newUser
        })
    } catch (exceptions) {
        res.status(statusCode.BAD_REQUEST).json({
            message: exceptions.toString()
        })
    }
}


export default {
    login,
    resgiter
}