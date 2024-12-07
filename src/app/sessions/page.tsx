import { Sidebar } from "@/components/ui/dashboard/sidebar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import counsellorImage from "../../../public/counsellor.png";

type Session = {
  counselor: string;
  date: string;
  time: string;
  status: "scheduled" | "attended";
};

export default function Sessions() {
  const sessions: Session[] = [
    {
      counselor: "Ayushi Khanna",
      date: "Monday, 26 Jan 2025",
      time: "11:30 AM - 12:30 PM GST",
      status: "scheduled",
    },
    {
      counselor: "Ayushi Khanna",
      date: "Monday, 26 Jan 2025",
      time: "11:30 AM - 12:30 PM GST",
      status: "attended",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e8] grid grid-cols-12">
      <div className="col-span-1">
        <Sidebar />
      </div>

      <div className="col-span-11 flex-1 p-6">
        <header className="flex justify-between items-center mb-8">
          <div>
            <div className="text-[#00813d] text-xl font-bold">
              Consulting Sessions
            </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
        </header>

        <div className="mt-20 space-y-4 w-full">
          {sessions.map((session, index) => (
            <div
              key={index}
              className={`bg-[#f0ebe3] rounded-[32px] p-8 border ${
                session.status === "scheduled"
                  ? " border-[#FF6B6B]"
                  : "border-[#777070]"
              }`}
            >
              <div className="grid grid-cols-12 gap-6 ">
                <div className="col-span-2 relative flex flex-col items-center">
                  <div className="w-60 h-40 relative rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={counsellorImage}
                      alt={session.counselor}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                  <h3 className="text-[#00813d] text-lg font-semibold mt-2">
                    {session.counselor}
                  </h3>
                </div>

                <div className=" col-span-10 grid grid-cols-12 content-center pt-1 ">
                  <div className="space-y-1 col-span-6 flex flex-col justify-center items-center">
                    <h4 className="text-xl font-semibold">{session.date}</h4>
                    <p className="text-gray-600 font-semibold">
                      {session.time}
                    </p>
                  </div>

                  <div className="col-span-6 flex flex-col items-center gap-8">
                    <span
                      className={`text-2xl font-bold ${
                        session.status === "scheduled"
                          ? "text-[#FF6B6B]"
                          : "text-[#00813d]"
                      }`}
                    >
                      {session.status === "scheduled"
                        ? "Scheduled"
                        : "Attended"}
                    </span>
                    {session.status === "attended" && (
                      <Link href="/meeting-notes">
                        <Button className="bg-[#00813d] hover:bg-[#00813d]/90 text-white rounded-lg px-8 py-6  text-xl font-semibold">
                          View Meeting Notes
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
