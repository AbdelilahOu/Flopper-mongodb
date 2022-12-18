import { Router } from "express";
import {
  createQuestion,
  deleteAllQuestion,
  deleteQuestion,
  getAllQuestion,
} from "../controller/questionController";

const questionRouter = Router();

questionRouter
  .get("/all", getAllQuestion)
  .post("/create", createQuestion)
  .post("/update")
  .post("/withQuestions")
  .delete("/all", deleteAllQuestion)
  .delete("/:id", deleteQuestion);

export default questionRouter;
