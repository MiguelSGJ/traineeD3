import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  verifyUser
} from "../controller/authController.js";

const userRouter = express.Router();

// Rotas básicas do CRUD
// Criar
userRouter.post("/", createUser);

// Verificar Email
userRouter.post("/verify", verifyUser)

// Ler
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

// Atualizar
userRouter.put("/:id", updateUser);

// Deletar
userRouter.delete("/:id", deleteUser);

export default userRouter;
