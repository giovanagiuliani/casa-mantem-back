/*
  Warnings:

  - You are about to drop the column `observacao` on the `servicos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "servicos" DROP COLUMN "observacao";

-- AlterTable
ALTER TABLE "servicosprestadores" ADD COLUMN     "observacao" VARCHAR(160);
