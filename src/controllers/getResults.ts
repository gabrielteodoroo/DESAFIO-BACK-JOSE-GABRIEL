import { Request, Response } from "express";
import { db } from "../services/dbConnection";

export const getResults = async (req: Request, res: Response) => {
  try {
    const findResults = await db.resultado.findMany();

    return res.status(200).json(findResults);
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
