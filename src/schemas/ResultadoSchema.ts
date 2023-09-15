import { z } from "zod";

export const ResultadoSchema = z.object({
  bimestre: z
    .string({
      required_error: "Bimestre é um campo obrigatório",
      invalid_type_error: "O campo Bimestre precisa ser do tipo texto",
    })
    .refine(
      (bimestre) =>
        bimestre !== "PRIMEIRO" &&
        bimestre !== "SEGUNDO" &&
        bimestre !== "TERCEIRO" &&
        bimestre !== "QUARTO",
      {
        message: "Informe um bimestre válido",
      }
    ),

  disciplina: z
    .string({
      required_error: "Disciplina é um campo obrigatório",
      invalid_type_error: "O campo Disciplina precisa ser do tipo texto",
    })
    .refine(
      (disciplina) =>
        disciplina !== "BIOLOGIA" &&
        disciplina !== "ARTES" &&
        disciplina !== "GEOGRAFIA" &&
        disciplina !== "SOCIOLOGIA",
      {
        message: "Informe uma disciplina válida",
      }
    ),

  nota: z.number({
    required_error: "Nota é um campo obrigatório",
    invalid_type_error: "O campo nota precisa ser do tipo numérico",
  }),
});
