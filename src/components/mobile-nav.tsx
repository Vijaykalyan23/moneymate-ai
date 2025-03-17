
import { Home, PlusCircle, BarChart3, Wallet, CalendarClock } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, title: "Dashboard", path: "/" },
    { icon: PlusCircle, title: "Add", path: "/add-transaction" },
    { icon: BarChart3, title: "Reports", path: "/reports" },
    { icon: Wallet, title: "Budgets", path: "/budgets" },
    { icon: CalendarClock, title: "Bills", path: "/bill-reminders" }
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t md:hidden">
      <div className="grid h-full grid-cols-5">
        {menuItems.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => navigate(item.path)}
            className={cn(
              "inline-flex flex-col items-center justify-center px-1 hover:bg-muted/50 transition-colors",
              location.pathname === item.path && "text-primary"
            )}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
