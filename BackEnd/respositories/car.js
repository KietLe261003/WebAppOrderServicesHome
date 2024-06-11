import { OutputType, print } from "../Helper/print.js";
import car from "../Model/car.js";
import Exception from "../exceptions/Exceptions.js";
async function createNewCar({name,authcar,price,img,description,highlight,address,rate,times}) {
    try {
        const newCar= await car.create({name,authcar,price,img,description,highlight,address,rate,times});
        return {
            ...newCar._doc
        }
    } catch (error) {
        throw new Exception(Exception.Create_NewCar_Fail);
    }
}
async function getAllCar(){
    try {
        const allCar= await car.find({}).exec();
        return allCar;
    } catch (error) {
        print("Lỗi mẹ rồi",OutputType.ERROR);
    }
}
export default {
    createNewCar,
    getAllCar
}