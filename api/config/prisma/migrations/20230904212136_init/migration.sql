/*
  Warnings:

  - The `location` column on the `Unit` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Location" AS ENUM ('New Brunswick', 'Ontario', 'Alberta', 'British Columbia', 'Quebec');

-- AlterTable
ALTER TABLE "Unit" DROP COLUMN "location",
ADD COLUMN     "location" "Location" NOT NULL DEFAULT 'New Brunswick';
