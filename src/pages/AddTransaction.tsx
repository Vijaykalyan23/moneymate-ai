
import { TransactionForm } from "@/components/transaction-form";

export default function AddTransaction() {
  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Add Transaction</h1>
      <TransactionForm />
    </div>
  );
}
