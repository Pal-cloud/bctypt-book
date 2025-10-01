import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import { tokenSign } from "../utils/handleJWT.js";

//Registro de Usuarios
export const registerController = async (req, res) => {
  try {
    const userData = req.body;
    const newPassword = userData.password;
    const hashPassword = await bcrypt.hash(newPassword, 10);
    userData.password = hashPassword;
    const newUser = await UserModel.create(userData);
    res.status(201).json("Usuario registrado exitosamente");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Login de Usuarios
export const loginController = async (req, res) => {
  try {
    const userData = req.body;
    const loginPassword = userData.password;
    const user = await UserModel.findOne({ where: {email: userData.email }});
    const hashedPassword = user.password;
    const checkPassword = await bcrypt.compare(loginPassword, hashedPassword);

    if (!checkPassword) {
      res.status(401).json("contraseña incorrecta");
    }
   const userForSessionData = {
      role: user.role,
      name: user.name,

    }
    const sessionData = {
      token: await tokenSign(user),
      user: userForSessionData
    }
  
    res.status(200).json(sessionData);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
