import { Router } from "express";
import { createVote, getAllVotes } from "../controller/voteController";

const voteRouter = Router();

voteRouter
  .get("/all", getAllVotes)
  .post("/create", createVote)
  .post("/update")
  .post("/withQuestions");

export default voteRouter;
