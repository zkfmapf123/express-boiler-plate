/*
  Warnings:

  - You are about to drop the `Menu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderFood` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shop` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Menu` DROP FOREIGN KEY `Menu_shopId_fkey`;

-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_shopId_fkey`;

-- DropForeignKey
ALTER TABLE `OrderFood` DROP FOREIGN KEY `OrderFood_menuId_fkey`;

-- DropForeignKey
ALTER TABLE `OrderFood` DROP FOREIGN KEY `OrderFood_orderId_fkey`;

-- DropTable
DROP TABLE `Menu`;

-- DropTable
DROP TABLE `Order`;

-- DropTable
DROP TABLE `OrderFood`;

-- DropTable
DROP TABLE `Shop`;

-- CreateTable
CREATE TABLE `Shops` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `createdAt` INTEGER NOT NULL,
    `updatedAt` INTEGER NOT NULL,

    UNIQUE INDEX `Shops_name_key`(`name`),
    INDEX `idx_name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Menus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foodName` VARCHAR(191) NOT NULL,
    `shopId` INTEGER NOT NULL,

    INDEX `idx_food`(`foodName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `shopId` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `orderAt` INTEGER NOT NULL,
    `confirmaAt` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderFoods` (
    `id` INTEGER NOT NULL,
    `orderId` INTEGER NOT NULL,
    `menuId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Menus` ADD CONSTRAINT `Menus_shopId_fkey` FOREIGN KEY (`shopId`) REFERENCES `Shops`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_shopId_fkey` FOREIGN KEY (`shopId`) REFERENCES `Shops`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderFoods` ADD CONSTRAINT `OrderFoods_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderFoods` ADD CONSTRAINT `OrderFoods_menuId_fkey` FOREIGN KEY (`menuId`) REFERENCES `Menus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
