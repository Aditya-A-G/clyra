import { Sidebar } from "@/components/ui/dashboard/sidebar";
import { Header } from "@/components/ui/dashboard/header";
import { About } from "@/components/ui/dashboard/about";
import { Schedule } from "@/components/ui/dashboard/schedule";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] flex">
      <Sidebar />
      <div className="flex-1 py-8 px-12">
        <Header />
        <About />
        <Schedule />
      </div>
    </div>
  );
}
