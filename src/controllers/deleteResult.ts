import { Request, Response } from "express";
import { db } from "../services/dbConnection";

export const deleteResult = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "O id precisa ser informado" });
    }

    const findResult = await db.resultado.findFirst({ where: { id } });

    if (!findResult) {
      return res
        .status(404)
        .json({ message: "Não existe resultado com o id informado" });
    }

    await db.resultado.delete({ where: { id } });

    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
