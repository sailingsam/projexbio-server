-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "resume" TEXT,
ADD COLUMN     "tagline" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "UserSocialLink" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "UserSocialLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillTag" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "SkillTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSkillTag" (
    "userId" UUID NOT NULL,
    "skillTagId" UUID NOT NULL,

    CONSTRAINT "UserSkillTag_pkey" PRIMARY KEY ("userId","skillTagId")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSocialLink_userId_platform_key" ON "UserSocialLink"("userId", "platform");

-- CreateIndex
CREATE UNIQUE INDEX "SkillTag_name_key" ON "SkillTag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SkillTag_slug_key" ON "SkillTag"("slug");

-- AddForeignKey
ALTER TABLE "UserSocialLink" ADD CONSTRAINT "UserSocialLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkillTag" ADD CONSTRAINT "UserSkillTag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkillTag" ADD CONSTRAINT "UserSkillTag_skillTagId_fkey" FOREIGN KEY ("skillTagId") REFERENCES "SkillTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
