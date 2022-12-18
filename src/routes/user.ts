import { Router } from "express";
import {
  getWithQuestions,
  createUser,
  getAllUsers,
  updateUser,
  deleteAllUsers,
  deleteUser,
} from "../controller/userController";

const userRouter = Router();

userRouter
  .get("/all", getAllUsers)
  .post("/create", createUser)
  .post("/update", updateUser)
  .post("/withQuestions", getWithQuestions)
  .delete("/:id", deleteUser)
  .delete("/all", deleteAllUsers);

export default userRouter;
