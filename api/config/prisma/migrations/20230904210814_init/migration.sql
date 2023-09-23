/*
  Warnings:

  - Added the required column `location` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Unit" ADD COLUMN     "location" VARCHAR(50) NOT NULL;
