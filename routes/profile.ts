import express from "express";
import profileController from '../controllers/profile-controller';

const router = express.Router();

// Agregamos ambos métodos para soportar GET y POST
router.get('/', profileController);
router.post('/', profileController);

export default router;