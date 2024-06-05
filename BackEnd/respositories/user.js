import user from "../Model/user.js";
import Exceptions from "../exceptions/Exceptions.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const login = async ({username,password})=>{
    try {
        debugger;
        let checkUser= await user.findOne({username}).exec();
        if(checkUser)
        {
            const checkPassWord=await bcrypt.compare(password,checkUser.password);
            if(checkPassWord)
            {
                let token = jwt.sign(
                    {
                        checkUser
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '10 day'
                    }
                )
                return {
                    ...checkUser.toObject(),
                    password: "Not Show",
                    token: token
                }
            }
        }
        else
        {
            throw new Exceptions(Exceptions.Not_Find_User);
        }
    } catch (error) {
        throw new Exceptions(Exceptions.Wrong_UserName_or_Pasword);
    }
}

const resgiter = async ({username,password,fullname,phonenumber,email,address})=>{
    try {
        let checkUserName = user.findOne({username}).exec();
        let checkEmail = user.findOne({email});
        if(checkUserName!==null && checkEmail!==null)
        {
            let brPassword = await bcrypt.hash(password,parseInt(process.env.BRCRYPT_PASSWORD));
            let newUser = await user.create({
                username,
                password: brPassword,
                fullname,
                phonenumber,
                email,
                address
            })
            return {
                ...newUser._doc,
                password: "Not show",
            }
        }
        else
        {
            
            throw new Exceptions(Exceptions.Wrong_UserNameorEmail);
        }
    } catch (error) {
        throw new Exceptions(Exceptions.Wrong_Push_User);
    }
}
export default {
    login,
    resgiter
}