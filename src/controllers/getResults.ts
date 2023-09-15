import { Request, Response } from "express";
import { db } from "../services/dbConnection";
import { Bimestre, Disciplina } from "@prisma/client";

export const getResults = async (req: Request, res: Response) => {
  try {
    const { bimestre } = req.body;

    if (!bimestre) {
      return res.status(400).json({ message: "Informe o bimestre" });
    }

    if (!Object.values(Bimestre).includes(bimestre)) {
      return res.status(400).json({ message: "Bimestre inválido" });
    }

    const findResults = await db.resultado.findMany({
      where: { bimestre },
    });

    return res.status(200).json(findResults);
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};





