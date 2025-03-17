
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Budgets() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Budget Planning</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Set and Manage Budgets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-md">
            <p className="text-muted-foreground">
              Budget management tools will be available here.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
