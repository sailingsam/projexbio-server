/*
  Warnings:

  - A unique constraint covering the columns `[collegeEmail]` on the table `UserCollege` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `collegeEmail` to the `UserCollege` table without a default value. This is not possible if the table is not empty.
  - Made the column `leftAt` on table `UserCollege` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UserCollege" ADD COLUMN     "collegeEmail" TEXT NOT NULL,
ADD COLUMN     "designation" TEXT,
ALTER COLUMN "leftAt" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserCollege_collegeEmail_key" ON "UserCollege"("collegeEmail");
