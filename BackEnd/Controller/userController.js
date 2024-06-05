import {test} from "../respositories/index.js";
const login = (req,res)=>{
    const {id,Name}=req.body;
    res.status(400).json(
        {
            message: "Login successfully",
            id: id
        }
    )
}

const pushTest = async (req,res)=>{
    const {name}=req.body;
    try {
        let testP=await test.testPush({name});
        if(testP)
        {
            res.status(400).json({
                message: "Push được",
                data: testP
            })
        }
        else
        {
            console.log("Chưa thành công");
        }
    } catch (error) {
        console.log("test thất bại")
    }
}

export default {
    login,
    pushTest
}