/*
  Warnings:

  - You are about to drop the column `coverImageUrl` on the `College` table. All the data in the column will be lost.
  - You are about to drop the column `logoUrl` on the `College` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "College" DROP COLUMN "coverImageUrl",
DROP COLUMN "logoUrl",
ADD COLUMN     "coverImgFileId" TEXT,
ADD COLUMN     "logoFileId" TEXT;
