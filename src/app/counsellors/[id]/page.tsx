"use client";

import { Sidebar } from "@/components/ui/dashboard/sidebar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Bell } from "lucide-react";
import Image from "next/image";
import counsellorImage from "../../../../public/counsellor.png";
import { useState } from "react";

export default function Schedule() {
  const [selectedSlot, setSelectedSlot] = useState<{
    date: string;
    time: string;
  } | null>(null);

  const startDate = new Date(2025, 0, 26);
  const numberOfDays = 3;
  const timeSlots = [
    "9:00 AM GST",
    "10:00 AM GST",
    "11:00 AM GST",
    "9:00 AM GST",
    "10:00 AM GST",
    "11:00 AM GST",
  ];

  const schedules = Array.from({ length: numberOfDays }).map((_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    return {
      day: date.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };
  });

  return (
    <div className="min-h-screen bg-[#f5f0e8] grid grid-cols-12">
      <div className="col-span-1">
        <Sidebar />
      </div>

      <div className="col-span-11 flex-1 p-6">
        <header className="flex justify-between items-center mb-8">
          <div>
            <div className="text-[#00813d] text-xl font-bold">Schedule</div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
        </header>

        <div className="mb-8 flex gap-6 items-center">
          <div className="w-60 h-40 relative rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src={counsellorImage}
              alt="Ayushi Khanna"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>

          <div className="flex-1 grid grid-cols-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-1">Ayushi Khanna</h2>
              <p className="text-lg font-semibold mb-1">15+ years experience</p>
              <p className="text-[#FF6B6B] font-medium">$50 / Per hour</p>
            </div>

            <div className="flex gap-16 col-span-2">
              <div>
                <h3 className="text-gray-600 font-bold mb-2">Expertise</h3>
                <div>
                  <p>US Admission Process</p>
                  <p>ILTES</p>
                </div>
              </div>

              <div>
                <h3 className="text-gray-600 font-bold mb-2">Languages</h3>
                <p>English Hindi Tamil</p>
              </div>
            </div>
          </div>
        </div>
        {selectedSlot ? (
          <div className="border border-black rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-2">{selectedSlot.date}</h3>
            <p className="text-lg mb-4">
              {selectedSlot.time} - {getEndTime(selectedSlot.time)} GST
            </p>

            <p className="text-gray-600 mb-4">
              Meeting will be scheduled via Google Meet and link will be share
              after scheduling
            </p>

            <div className="space-y-6">
              <div>
                <Textarea
                  placeholder="Add specific question you have, so counsellor can be ready with answer to better guide you"
                  className="min-h-[350px] bg-white"
                />
              </div>

              <div className="flex items-center justify-between ">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I here by approve Clyra Labs to share the profile and
                    academic details with counsellor to provide better guidance
                  </label>
                </div>
                <div className="flex justify-end">
                  <Button
                    className="bg-[#00813d] hover:bg-[#00813d]/90 text-white px-8 font-semibold"
                    onClick={() => setSelectedSlot(null)}
                  >
                    Pay $50 & Schedule
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-10 p-4">
            {schedules.map((schedule, index) => (
              <div key={index} className="bg-[#f0ebe3] rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6">{schedule.day}</h3>

                <div className="grid grid-cols-3 gap-4">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      className="bg-[#F3F3F3] text-center py-3 px-6 rounded-2xl hover:bg-gray-200 transition-colors"
                      onClick={() =>
                        setSelectedSlot({ date: schedule.day, time })
                      }
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
function getEndTime(startTime: string): string {
  const [time, period] = startTime.split(" ");
  const [hours, minutes] = time.split(":");
  let hour = parseInt(hours);

  if (period === "PM" && hour !== 12) {
    hour += 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }

  hour = (hour + 1) % 24;

  if (hour === 0) {
    return `12:${minutes} AM`;
  } else if (hour < 12) {
    return `${hour}:${minutes} AM`;
  } else if (hour === 12) {
    return `12:${minutes} PM`;
  } else {
    return `${hour - 12}:${minutes} PM`;
  }
}
