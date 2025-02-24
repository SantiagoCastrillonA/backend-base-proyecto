import { Request, Response } from "express";
import User from '../Dto/UserDto';
import UserService from '../services/UserServices';

let update = async (req: Request, res: Response) => {  
  try {
    const {
      email,
      password,
      name,
      lastName,
      phoneNumber
    } = req.body;

    const updatedUser = await UserService.update(new User(email, name, lastName, phoneNumber, password));
    
    return res.status(200).json(
      { status: 'update ok' }
    );
  } catch (error: any) {    
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage });
    } else {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default update;
