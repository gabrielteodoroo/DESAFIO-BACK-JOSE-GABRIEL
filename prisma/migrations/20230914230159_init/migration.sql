-- CreateEnum
CREATE TYPE "Bimestre" AS ENUM ('PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO');

-- CreateEnum
CREATE TYPE "Disciplina" AS ENUM ('BIOLOGIA', 'ARTES', 'GEOGRAFIA', 'SOCIOLOGIA');

-- CreateTable
CREATE TABLE "resultado" (
    "id" TEXT NOT NULL,
    "bimestre" "Bimestre" NOT NULL,
    "disciplina" "Disciplina" NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "resultado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "resultado_bimestre_disciplina_key" ON "resultado"("bimestre", "disciplina");
