import { Request, Response } from "express";
import prisma from "../utils/prisma";

export const getAllQuestion = async (req: Request, res: Response) => {
  try {
    const questions = await prisma.question.findMany();
    res.json({
      questions,
    });
  } catch (error) {
    console.log(error);
    res.send({
      err: error?.message,
    });
  }
};

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const { title, options, userId, endsAt } = req.body;
    const question = await prisma.question.create({
      data: {
        title,
        options,
        endsAt,
        User: {
          connect: {
            id: Number(userId),
          },
        },
      },
    });
    res.json({
      question,
    });
  } catch (error) {
    res.send({
      err: error?.message,
    });
  }
};

export const deleteAllQuestion = async (req: Request, res: Response) => {
  try {
    const question = await prisma.question.deleteMany({});
    res.json({
      question,
    });
  } catch (error) {
    res.send({
      err: error?.message,
    });
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteQuestion = await prisma.question.deleteMany({
      where: {
        id: Number(id),
      },
    });
    res.json({
      deleteQuestion,
    });
  } catch (error) {
    res.send({
      err: error?.message,
    });
  }
};

export const getQuestionVotes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const questionVotes = await prisma.question.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        Vote: true,
      },
    });
    res.json({
      questionVotes,
    });
  } catch (error) {
    res.send({
      err: error?.message,
    });
  }
};

export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const question = await prisma.question.update({
      where: {
        id: Number(id),
      },
      data: {
        ...req.body,
      },
    });
    res.json({
      question,
    });
  } catch (error) {
    res.send({
      err: error?.message,
    });
  }
};

export const getCurrentQuestions = async (req: Request, res: Response) => {
  try {
    const currentDate = new Date();
    const question = await prisma.question.findMany({
      where: {
        createdAt: {
          lt: currentDate,
        },
        endsAt: {
          gt: currentDate,
        },
      },
    });
    res.json({
      question,
    });
  } catch (error) {
    res.send({
      err: error?.message,
    });
  }
};
