import { Router } from "express";
import {
  getAllVotes,
  createVote,
  deleteVote,
  updateVote,
  getVoteStats,
} from "../controller/voteController";

const voteRouter = Router();

voteRouter
  .get("/all", getAllVotes)
  .post("/create", createVote)
  .post("/update/:id", updateVote)
  .post("/stats/:id", getVoteStats)
  .delete("/:id", deleteVote);

export default voteRouter;
