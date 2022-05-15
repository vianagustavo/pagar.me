-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "charge_amount" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "payment_method" TEXT NOT NULL,
    "card_number" TEXT NOT NULL,
    "card_holder_name" TEXT NOT NULL,
    "valid_thru" TEXT NOT NULL,
    "cvv" TEXT NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payables" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "balance" INTEGER NOT NULL,

    CONSTRAINT "payables_pkey" PRIMARY KEY ("id")
);
