import { Request, Response } from "express";
import prisma from "../utils/prisma";

export const createVote = async (req: Request, res: Response) => {
  const { choice, voterName, questionId } = req.body;
  try {
    const vote = await prisma.vote.create({
      data: {
        choice,
        User: {
          connect: {
            name: voterName,
          },
        },
        Question: {
          connect: {
            id: questionId,
          },
        },
      },
    });
    res.json({
      vote,
    });
  } catch (error) {
    console.log(error);
    res.send({
      err: error?.message,
    });
  }
};

export const getAllVotes = async (req: Request, res: Response) => {
  try {
    const votes = await prisma.vote.findMany({});
    res.json({ votes });
  } catch (error) {
    res.send({
      err: error?.message,
    });
  }
};

export const updateVote = async (req: Request, res: Response) => {
  const { choice } = req.body;
  const { id } = req.params;
  try {
    const votes = await prisma.vote.update({
      where: {
        id: Number(id),
      },
      data: {
        choice,
      },
    });
    res.json({ votes });
  } catch (error) {
    res.send({
      err: error?.message,
    });
  }
};

export const deleteVote = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const vote = await prisma.vote.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({ vote });
  } catch (error) {
    res.send({
      err: error?.message,
    });
  }
};

export const getVoteStats = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const votes = await prisma.vote.groupBy({
      by: ["choice"],
      _count: {
        _all: true,
      },
      where: {
        questionId: Number(id),
      },
    });
    const votesCount = votes.reduce((acc, vote) => acc + vote._count._all, 0);
    votes.map((vote) => {
      vote["percent"] = Math.floor((vote._count._all / votesCount) * 100);
      delete vote._count;
    });
    res.json({ votes });
  } catch (error) {
    res.send({
      err: error?.message,
    });
  }
};
