import { Router } from "express";
import {carController} from "../Controller/index.js";
const route=Router();

route.post("/creatnewcar",carController.createNewCar);
route.get("/allcar",carController.getAllCar);

export default route;