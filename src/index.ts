import express, { Application } from "express";
import questionRouter from "./routes/question";
import voteRouter from "./routes/vote";
import userRouter from "./routes/user";
import bodyParser from "body-parser";

const app: Application = express();

app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/vote", voteRouter);
app.use("/question", questionRouter);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
