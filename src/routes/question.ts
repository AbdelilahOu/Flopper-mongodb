import { Router } from "express";
import {
  getCurrentQuestions,
  deleteAllQuestion,
  getQuestionVotes,
  createQuestion,
  deleteQuestion,
  getAllQuestion,
  updateQuestion,
} from "../controller/questionController";

const questionRouter = Router();

questionRouter
  .get("/all", getAllQuestion)
  .post("/create", createQuestion)
  .post("/current", getCurrentQuestions)
  .post("/update", updateQuestion)
  .post("/:id", getQuestionVotes)
  .delete("/all", deleteAllQuestion)
  .delete("/:id", deleteQuestion);

export default questionRouter;
