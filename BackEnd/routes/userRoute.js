import express from 'express';
const router = express.Router();

//Controller
import { userController } from '../Controller/index.js';

router.post("/Login",userController.login);

router.post("/test",userController.pushTest);

export default router;
