/*
  Warnings:

  - The `horarios` column on the `horariosprestador` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "horariosprestador" DROP COLUMN "horarios",
ADD COLUMN     "horarios" JSONB[];
