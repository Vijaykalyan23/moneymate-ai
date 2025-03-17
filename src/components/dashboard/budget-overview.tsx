
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Budget {
  id: string;
  category: string;
  allocated: number;
  spent: number;
}

interface BudgetOverviewProps {
  budgets: Budget[];
}

export function BudgetOverview({ budgets }: BudgetOverviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {budgets.length === 0 ? (
            <p className="text-center text-muted-foreground">No budgets set</p>
          ) : (
            budgets.map((budget) => {
              const percentUsed = (budget.spent / budget.allocated) * 100;
              const isOverBudget = percentUsed > 100;
              
              return (
                <div key={budget.id} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{budget.category}</span>
                    <span className="text-sm">
                      <span className="rupee">{budget.spent.toLocaleString()}</span> / 
                      <span className="rupee">{budget.allocated.toLocaleString()}</span>
                    </span>
                  </div>
                  <Progress 
                    value={Math.min(percentUsed, 100)} 
                    className={`h-2 ${isOverBudget ? "bg-red-200 dark:bg-red-900/50" : ""}`} 
                  />
                  {isOverBudget && (
                    <p className="text-xs text-money-expense">
                      Over budget by <span className="rupee">{(budget.spent - budget.allocated).toLocaleString()}</span>
                    </p>
                  )}
                </div>
              );
            })
          )}
        </div>
      </CardContent>
    </Card>
  );
}
