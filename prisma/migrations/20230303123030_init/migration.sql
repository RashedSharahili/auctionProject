/*
  Warnings:

  - You are about to drop the column `createdat` on the `movie` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `movie` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `movie` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `movie` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `movie` DROP COLUMN `createdat`,
    DROP COLUMN `duration`,
    DROP COLUMN `genre`,
    DROP COLUMN `rating`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Movie_email_key` ON `Movie`(`email`);
