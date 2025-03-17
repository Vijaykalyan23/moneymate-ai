
import { ExpenseSummary } from "@/components/dashboard/expense-summary";
import { BudgetOverview } from "@/components/dashboard/budget-overview";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { AIInsights } from "@/components/dashboard/ai-insights";

export default function Dashboard() {
  // Mock data for demonstration purposes
  const summaryData = {
    totalBudget: 35000,
    totalSpent: 23560,
    totalIncome: 45000
  };
  
  const recentTransactions = [
    {
      id: "1",
      date: "2023-09-15",
      description: "Grocery Shopping",
      amount: 2500,
      category: "Shopping",
      type: "expense" as const
    },
    {
      id: "2",
      date: "2023-09-13",
      description: "Restaurant Dinner",
      amount: 1800,
      category: "Food",
      type: "expense" as const
    },
    {
      id: "3",
      date: "2023-09-10",
      description: "Monthly Salary",
      amount: 45000,
      category: "Salary",
      type: "income" as const
    },
    {
      id: "4",
      date: "2023-09-05",
      description: "Electricity Bill",
      amount: 1200,
      category: "Utilities",
      type: "expense" as const
    }
  ];
  
  const budgets = [
    {
      id: "1",
      category: "Food",
      allocated: 8000,
      spent: 5800
    },
    {
      id: "2",
      category: "Shopping",
      allocated: 5000,
      spent: 6200
    },
    {
      id: "3",
      category: "Entertainment",
      allocated: 3000,
      spent: 1500
    },
    {
      id: "4",
      category: "Transportation",
      allocated: 2000,
      spent: 1800
    }
  ];
  
  const insights = [
    {
      id: "1",
      text: "You've spent 20% more on Shopping this month compared to last month.",
      type: "warning" as const
    },
    {
      id: "2",
      text: "Great job! You've stayed under your Entertainment budget by ₹1,500.",
      type: "success" as const
    },
    {
      id: "3",
      text: "You have 3 upcoming bill payments this week. Make sure to keep enough balance.",
      type: "info" as const
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <ExpenseSummary {...summaryData} />
      
      <div className="grid gap-6 md:grid-cols-3">
        <RecentTransactions transactions={recentTransactions} />
        <div className="space-y-6">
          <BudgetOverview budgets={budgets} />
          <AIInsights insights={insights} />
        </div>
      </div>
    </div>
  );
}
