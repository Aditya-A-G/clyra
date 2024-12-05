"use client";

import { Sidebar } from "@/components/ui/dashboard/sidebar";
import { Button } from "@/components/ui/button";
import { Bell, ThumbsUp, ThumbsDown } from "lucide-react";
import Image from "next/image";
import counsellorImage from "../../../public/counsellor.png";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

type Tab = "transcript" | "summary" | "tasks";

export default function Meeting() {
  const [activeTab, setActiveTab] = useState<Tab>("transcript");

  const tabs = [
    { id: "transcript", label: "Meeting Transcript" },
    { id: "summary", label: "Summary" },
    { id: "tasks", label: "Tasks" },
  ];

  const tasks = [
    {
      task: "Tutoring and additional help for Math",
      category: "Academic support",
    },
    {
      task: "Shadow Cardiologist - 2 weekends",
      category: "Extra curricular",
    },
    {
      task: "Participate in school chess competition",
      category: "Hobby",
    },
    {
      task: "Visit terminal illness centre study",
      category: "Extra curricular",
    },
    {
      task: "Participate in RedCross activity",
      category: "Extra curricular",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e8] grid grid-cols-12">
      <div className="col-span-1">
        <Sidebar />
      </div>

      <div className="col-span-11 flex-1 p-6">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="w-28 h-28 relative rounded-3xl overflow-hidden">
              <Image
                src={counsellorImage}
                alt="Ayushi Khanna"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div>
              <h2 className="text-[#00813d] text-lg font-semibold">
                Ayushi Khanna
              </h2>
              <p className="text-2xl font-medium">Monday 26, Jan 2025</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
        </header>

        <div>
          <div className="flex gap-4 mb-6">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                variant={activeTab === tab.id ? "default" : "secondary"}
                size="lg"
                className={`rounded-full text-accent text-lg font-semibold w-60 ${
                  activeTab === tab.id
                    ? "bg-[#00813d] hover:bg-[#00813d]/90 text-white"
                    : "bg-[#D9D9D9] hover:bg-[#D9D9D9]/90 text-black"
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {activeTab === "transcript" && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-[#E3E3E3FC] rounded-[24px] text-lg p-6 ml-auto max-w-[75%] border border-[#B4B8B2FC]">
                based on national association for college admission counseling
                explain me and give me frame work for student evaluation and
                study abroad plan data collection document
              </div>

              <div>
                <div className="max-w-[75%] text-lg">
                  <p className="mb-3">
                    based on national association for college admission
                    counseling explain me and give me frame work for student
                    evaluation and study adborad plan data collection document
                  </p>{" "}
                  <p className="mb-3">
                    based on national association for college admission
                    counseling explain me and give me frame work for student
                    evaluation and study adborad plan data collection document
                  </p>{" "}
                  <p>
                    based on national association for college admission
                    counseling explain me and give me frame work for student
                    evaluation and study adborad plan data collection document
                  </p>
                </div>

                <div className="flex gap-1">
                  <Button variant="ghost" size="icon">
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
          {activeTab === "tasks" && (
            <div className="mt-20 bg-white rounded-[32px] p-8 w-[90%]  mx-auto">
              <h2 className="text-2xl font-semibold mb-6 pb-4 border-b">
                Discussed
              </h2>
              <div className="space-y-6">
                {tasks.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-4 pb-4 border-b last:border-b-0"
                  >
                    <div className="flex items-center gap-4 col-span-6 ">
                      <Checkbox className="rounded-full" />
                      <div>
                        <p className="font-medium">{item.task}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-8 col-span-6 ">
                      <div className="col-span-8 flex items-center">
                        <span className="text-gray-600">{item.category}</span>
                      </div>
                      <div className="flex gap-2 col-span-4 justify-end items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-transparent"
                        >
                          <ThumbsUp className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-transparent"
                        >
                          <ThumbsDown className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
