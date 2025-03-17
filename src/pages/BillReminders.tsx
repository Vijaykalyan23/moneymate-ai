
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BillReminders() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bill Reminders</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Bills & Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-md">
            <p className="text-muted-foreground">
              Bill tracking and reminders will be available here.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
