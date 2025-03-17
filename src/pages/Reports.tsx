
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Reports() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Reports & Analytics</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Monthly Spending Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-md">
            <p className="text-muted-foreground">
              Charts and detailed reports will be available here.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
