/*
  Warnings:

  - You are about to drop the column `appwriteid` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `githubUsername` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[appwriteId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `appwriteId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_appwriteid_key";

-- AlterTable
ALTER TABLE "User" RENAME COLUMN "appwriteid" TO "appwriteId";
ALTER TABLE "User" DROP COLUMN "githubUsername";

-- CreateIndex
CREATE UNIQUE INDEX "User_appwriteId_key" ON "User"("appwriteId");
