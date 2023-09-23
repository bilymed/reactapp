/*
  Warnings:

  - The values [APPARTMENT,HOUSE,CONDO,ROOM] on the enum `UnitType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UnitType_new" AS ENUM ('Apartment', 'House', 'Condo', 'Room');
ALTER TABLE "Unit" ALTER COLUMN "unitType" DROP DEFAULT;
ALTER TABLE "Unit" ALTER COLUMN "unitType" TYPE "UnitType_new" USING ("unitType"::text::"UnitType_new");
ALTER TYPE "UnitType" RENAME TO "UnitType_old";
ALTER TYPE "UnitType_new" RENAME TO "UnitType";
DROP TYPE "UnitType_old";
ALTER TABLE "Unit" ALTER COLUMN "unitType" SET DEFAULT 'Apartment';
COMMIT;

-- AlterTable
ALTER TABLE "Unit" ALTER COLUMN "unitType" SET DEFAULT 'Apartment';
