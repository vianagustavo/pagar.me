/*
  Warnings:

  - You are about to alter the column `balance` on the `payables` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `charge_amount` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - Added the required column `created_at` to the `payables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `payment_method` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CREDIT', 'DEBIT');

-- AlterTable
ALTER TABLE "payables" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "balance" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
DROP COLUMN "payment_method",
ADD COLUMN     "payment_method" "PaymentMethod" NOT NULL,
ALTER COLUMN "charge_amount" SET DATA TYPE DECIMAL(65,30);
