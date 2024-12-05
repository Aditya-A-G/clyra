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
        <div className="bg-white rounded-[32px] p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Counselling Scheduled</h2>
          <div className="flex justify-center items-center gap-40">
            <div className="flex gap-4 items-center text-lg font-bold">
              <p>Monday 26 January 2025</p>
              <p>11:30 AM - 12:30 PM GST</p>
            </div>
            <div>
              <span className="text-xl">Admission Support</span>
            </div>
          </div>
        </div>
        <Schedule />
      </div>
    </div>
  );
}
