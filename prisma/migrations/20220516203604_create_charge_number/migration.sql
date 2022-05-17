/*
  Warnings:

  - Changed the type of `charge_amount` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "payables" ALTER COLUMN "balance" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "charge_amount",
ADD COLUMN     "charge_amount" DOUBLE PRECISION NOT NULL;
