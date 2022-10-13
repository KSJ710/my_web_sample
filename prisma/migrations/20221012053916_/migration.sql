/*
  Warnings:

  - Changed the type of `author_id` on the `posts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_author_id_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "author_id",
ADD COLUMN     "author_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "members"("id") ON DELETE CASCADE ON UPDATE CASCADE;
