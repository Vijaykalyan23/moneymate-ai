
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, ShoppingCart, Coffee, Utensils, Zap, Home, Car } from "lucide-react";

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: "expense" | "income";
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

// Map of category to icon
const categoryIcons = {
  "Shopping": ShoppingCart,
  "Food": Utensils,
  "Coffee": Coffee,
  "Utilities": Zap,
  "Rent": Home,
  "Transportation": Car,
  // Add more categories as needed
};

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.length === 0 ? (
            <p className="text-center text-muted-foreground">No recent transactions</p>
          ) : (
            transactions.map((transaction) => {
              const Icon = categoryIcons[transaction.category as keyof typeof categoryIcons] || IndianRupee;
              
              return (
                <div 
                  key={transaction.id} 
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${
                      transaction.type === "expense" 
                        ? "bg-red-100 text-money-expense dark:bg-red-900/20" 
                        : "bg-green-100 text-money-income dark:bg-green-900/20"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`font-medium ${
                      transaction.type === "expense" ? "text-money-expense" : "text-money-income"
                    } rupee`}>
                      {transaction.type === "expense" ? "-" : "+"}{transaction.amount.toLocaleString()}
                    </span>
                    <Badge variant="outline">{transaction.category}</Badge>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </CardContent>
    </Card>
  );
}
