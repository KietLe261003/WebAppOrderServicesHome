import express from 'express';
const router = express.Router();

//Controller
import { userController } from '../Controller/index.js';

router.post("/Login",userController.login);
router.post("/resgiter",userController.resgiter);

export default router;
