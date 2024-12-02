import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center mb-12">
      <h1 className="text-4xl font-bold">Welcome Steve</h1>
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-[#ff8a8a]"
        >
          <Bell className="h-6 w-6 text-white" />
        </Button>
        <span className="absolute -top-1 -right-1 bg-white text-[#ff8a8a] w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
          2
        </span>
      </div>
    </header>
  );
};
