/*
  Warnings:

  - You are about to drop the column `foodName` on the `Menus` table. All the data in the column will be lost.
  - You are about to drop the column `shopId` on the `Menus` table. All the data in the column will be lost.
  - You are about to drop the column `confirmaAt` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `orderAt` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `shopId` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Shops` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Shops` table. All the data in the column will be lost.
  - Added the required column `food_name` to the `Menus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shop_id` to the `Menus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_at` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shop_id` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `Shops` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Shops` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Menus` DROP FOREIGN KEY `Menus_shopId_fkey`;

-- DropForeignKey
ALTER TABLE `Orders` DROP FOREIGN KEY `Orders_shopId_fkey`;

-- DropIndex
DROP INDEX `idx_food` ON `Menus`;

-- AlterTable
ALTER TABLE `Menus` DROP COLUMN `foodName`,
    DROP COLUMN `shopId`,
    ADD COLUMN `food_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `shop_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Orders` DROP COLUMN `confirmaAt`,
    DROP COLUMN `orderAt`,
    DROP COLUMN `shopId`,
    ADD COLUMN `confirma_at` INTEGER NULL,
    ADD COLUMN `order_at` INTEGER NOT NULL,
    ADD COLUMN `shop_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Shops` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` INTEGER NOT NULL,
    ADD COLUMN `updated_at` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `idx_food_name` ON `Menus`(`food_name`);

-- AddForeignKey
ALTER TABLE `Menus` ADD CONSTRAINT `Menus_shop_id_fkey` FOREIGN KEY (`shop_id`) REFERENCES `Shops`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_shop_id_fkey` FOREIGN KEY (`shop_id`) REFERENCES `Shops`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
