import { Bimestre, Disciplina } from "@prisma/client";
import { Request, Response } from "express";
import { db } from "../services/dbConnection";

export const createResult = async (req: Request, res: Response) => {
  try {
    const { bimestre, disciplina, nota } = req.body;

    if (isNaN(parseFloat(nota)) || nota < 0 || nota > 10) {
      return res.status(400).json({ message: "Informe uma nota válida" });
    }

    if (!Object.values(Bimestre).includes(bimestre)) {
      return res.status(400).json({ message: "Bimestre inválido" });
    }

    if (!Object.values(Disciplina).includes(disciplina)) {
      return res.status(400).json({ message: "Disciplina inválida" });
    }

    const findResult = await db.resultado.findFirst({
      where: { bimestre, disciplina },
    });

    if (findResult) {
      return res.status(400).json({ message: "Essa nota já foi lançada" });
    }

    const newResult = await db.resultado.create({
      data: {
        bimestre,
        disciplina,
        nota,
      },
    });

    return res.status(201).json(newResult);
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
