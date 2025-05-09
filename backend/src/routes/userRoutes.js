import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controller/userController.js";

const userRouter = express.Router();

// Rotas básicas do CRUD
// Criar
userRouter.post("/", createUser);

// Ler
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

// Atualizar
userRouter.put("/:id", updateUser);

// Deletar
userRouter.delete("/:id", deleteUser);

export default userRouter;
