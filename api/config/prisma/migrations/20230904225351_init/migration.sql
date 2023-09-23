/*
  Warnings:

  - You are about to drop the column `location` on the `Unit` table. All the data in the column will be lost.
  - The `unitType` column on the `Unit` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Unit" DROP COLUMN "location",
ADD COLUMN     "locationId" INTEGER,
DROP COLUMN "unitType",
ADD COLUMN     "unitType" TEXT NOT NULL DEFAULT 'Apartment';

-- DropEnum
DROP TYPE "Location";

-- DropEnum
DROP TYPE "UnitType";

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "province" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_abbreviation_key" ON "Location"("abbreviation");

-- CreateIndex
CREATE UNIQUE INDEX "Location_province_key" ON "Location"("province");

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
