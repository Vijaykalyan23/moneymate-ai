
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  CircleDollarSign, 
  TrendingDown, 
  TrendingUp, 
  IndianRupee 
} from "lucide-react";

interface ExpenseSummaryProps {
  totalBudget: number;
  totalSpent: number;
  totalIncome: number;
}

export function ExpenseSummary({ totalBudget, totalSpent, totalIncome }: ExpenseSummaryProps) {
  const percentageSpent = (totalSpent / totalBudget) * 100;
  const remaining = totalBudget - totalSpent;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
          <IndianRupee className="h-4 w-4 text-money-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold rupee">{totalBudget.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">For this month</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          <TrendingDown className="h-4 w-4 text-money-expense" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold rupee">{totalSpent.toLocaleString()}</div>
          <div className="mt-1">
            <Progress value={percentageSpent} className="h-2" />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {percentageSpent.toFixed(0)}% of budget used
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Income</CardTitle>
          <TrendingUp className="h-4 w-4 text-money-income" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold rupee">{totalIncome.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">This month</p>
        </CardContent>
      </Card>
    </div>
  );
}
