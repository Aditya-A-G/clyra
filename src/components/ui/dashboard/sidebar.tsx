import { Brain, Building2, Calendar, FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../../../public/logo.png";

export const Sidebar = ({className}: {className?: string}) => {
  return (
    <div className={`w-24 flex flex-col items-center py-8 h-svh ${className}`}>
      <div className="w-16 h-16 rounded-full flex items-center justify-center relative mb-12">
        <Image src={logo} alt="logo" />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-[#00813d] text-white w-14 h-14"
        >
          <Brain className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-[#e9e3d7] w-14 h-14"
        >
          <FileText className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-[#e9e3d7] w-14 h-14"
        >
          <Building2 className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-[#e9e3d7] w-14 h-14"
        >
          <Calendar className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-[#e9e3d7] w-14 h-14"
        >
          <FileText className="h-8 w-8" />
        </Button>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-[#e9e3d7] mt-auto w-14 h-14"
      >
        <User className="h-8 w-8" />
      </Button>
    </div>
  );
};
