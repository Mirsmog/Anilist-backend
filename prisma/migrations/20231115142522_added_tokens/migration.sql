/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `Bookmark` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Bookmark_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_name_userId_key" ON "Bookmark"("name", "userId");
