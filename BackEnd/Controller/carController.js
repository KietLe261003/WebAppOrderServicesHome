import { carRespositories } from "../respositories/index.js";
import statusCode from "../exceptions/HttpStatusCode.js";
async function createNewCar(req,res) {
    try {
        const {name,authcar,price,img,description,highlight,address,rate,times} = req.body;
        const newCar= await carRespositories.createNewCar({name,authcar,price,img,description,highlight,address,rate,times});
        let message="Create new car successfully";
        if(!newCar)
        {
            message="Create new car fail"
        }
        res.status(statusCode.INSERT_OK).json({
            message,
            data: newCar
        });
    } catch (exceptions) {
        res.status(statusCode.BAD_REQUEST).json({
            message: exceptions.toString()
        })
    }
}
const getAllCar= async (req,res)=>{
    const allCar=await carRespositories.getAllCar();
    res.status(statusCode.OK).json({
        data: allCar
    })
}
export default {
    createNewCar,
    getAllCar
}