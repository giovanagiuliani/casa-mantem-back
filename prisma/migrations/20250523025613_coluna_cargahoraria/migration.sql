/*
  Warnings:

  - You are about to drop the column `tipocargahoraria` on the `servicos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "servicos" DROP COLUMN "tipocargahoraria";

-- AlterTable
ALTER TABLE "servicosprestadores" ADD COLUMN     "tipocargahoraria" INTEGER NOT NULL DEFAULT 1;
