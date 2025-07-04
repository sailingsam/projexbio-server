/*
  Warnings:

  - Made the column `updatedAt` on table `CollegeEmailDomain` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `UserCollege` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CollegeEmailDomain" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "UserCollege" ALTER COLUMN "updatedAt" SET NOT NULL;
