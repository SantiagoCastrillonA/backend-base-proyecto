import express from "express";
import updateController from '../controllers/update-controller';

const router = express.Router();


router.post('/', updateController);


export default router;