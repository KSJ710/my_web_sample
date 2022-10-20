/*
  Warnings:

  - Added the required column `category_id` to the `m_tags` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "m_tags" ADD COLUMN     "category_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "m_tag_categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "m_tag_categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "m_tags" ADD CONSTRAINT "m_tags_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "m_tag_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
