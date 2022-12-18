import { Request, Response } from "express";
import prisma from "../utils/prisma";

export const getAllQuestion = async (req: Request, res: Response) => {
  try {
    const questions = await prisma.questions.findMany({});
    res.json({
      questions,
    });
  } catch (error) {
    res.send({
      err: error?.message,
    });
  }
};

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const { title, options, userId, endsAt } = req.body;
    const question = await prisma.questions.create({
      data: {
        title,
        options,
        endsAt,
        user: {
          connect: {
            id: userId,
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
    const question = await prisma.questions.deleteMany({});
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
    const deleteQuestion = await prisma.questions.deleteMany({
      where: {
        id,
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