/*
  Warnings:

  - Changed the type of `horarios` on the `horariosprestador` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "horariosprestador" DROP COLUMN "horarios",
ADD COLUMN     "horarios" JSONB NOT NULL;
