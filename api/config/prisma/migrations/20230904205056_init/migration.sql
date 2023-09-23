-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_userId_fkey";

-- AlterTable
ALTER TABLE "Unit" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
