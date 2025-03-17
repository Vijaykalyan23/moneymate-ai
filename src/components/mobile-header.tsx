
import { ThemeSwitcher } from "@/components/theme-switcher";

export function MobileHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 border-b bg-background md:hidden rounded-sm py-[7px]">
      <h2 className="text-xl font-bold text-primary">MoneyMate</h2>
      <ThemeSwitcher />
    </div>
  );
}
