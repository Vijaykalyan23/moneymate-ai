
import { 
  Home, 
  PlusCircle, 
  BarChart3, 
  Wallet, 
  CalendarClock, 
  Settings, 
  Menu 
} from "lucide-react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarTrigger, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton 
} from "@/components/ui/sidebar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, title: "Dashboard", path: "/" },
    { icon: PlusCircle, title: "Add Transaction", path: "/add-transaction" },
    { icon: BarChart3, title: "Reports", path: "/reports" },
    { icon: Wallet, title: "Budgets", path: "/budgets" },
    { icon: CalendarClock, title: "Bill Reminders", path: "/bill-reminders" }
  ];

  return (
    <Sidebar className="hidden md:flex">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-money-primary">MoneyMate</h2>
          <SidebarTrigger>
            <Menu className="h-6 w-6" />
          </SidebarTrigger>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild onClick={() => navigate(item.path)}>
                    <div className="flex items-center gap-3 cursor-pointer">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/settings")}
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </div>
          <ThemeSwitcher />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
