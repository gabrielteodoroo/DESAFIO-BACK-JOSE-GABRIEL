import { Request, Response } from "express";
import { db } from "../services/dbConnection";
import { Disciplina } from "@prisma/client";

export const updateResult = async (req: Request, res: Response) => {
  try {
    const { bimestre, disciplina, nota } = req.body;

    if (!bimestre) {
      return res.status(400).json({ message: "Informe o id" });
    }

    const findResult = await db.resultado.findFirst({
      where: { bimestre, disciplina },
    });

    if (!findResult) {
      return res.status(400).json({ message: "resultado não encontrado" });
    }

    if (isNaN(parseFloat(nota)) || nota < 0 || nota > 10) {
      return res.status(400).json({ message: "Informe uma nota válida" });
    }

    if (!Object.values(Disciplina).includes(disciplina)) {
      return res.status(400).json({ message: "Disciplina inválida" });
    }

    const findDisciplina = await db.resultado.findFirst({
      where: { disciplina, bimestre },
    });

    if (findDisciplina?.disciplina !== findResult.disciplina) {
      return res.status(400).json({
        message: "Já existe um resultado para a disciplina informada",
      });
    }

    const resultUpdated = await db.resultado.update({
      where: { id: findDisciplina.id },
      data: {
        disciplina,
        nota,
      },
    });

    return res.status(200).json(resultUpdated);
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
