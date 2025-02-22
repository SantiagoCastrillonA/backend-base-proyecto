import { Request, Response } from "express";
import UserService from '../services/UserServices';

let deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await UserService.delete(id);
    
    return res.status(200).json({ status: 'delete ok' });
  } catch (error: any) {
    return res.status(500).json({ errorInfo: error.message });
  }
}

export default deleteUser;