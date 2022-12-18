import { Router } from "express";
import {
  getAllVotes,
  createVote,
  deleteVote,
  updateVote,
} from "../controller/voteController";

const voteRouter = Router();

voteRouter
  .get("/all", getAllVotes)
  .post("/create", createVote)
  .post("/update", updateVote)
  .delete("/:id", deleteVote);

export default voteRouter;
