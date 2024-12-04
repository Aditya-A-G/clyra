import { Sidebar } from "@/components/ui/dashboard/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";
import Image from "next/image";
import counsellorImage from "../../../public/counsellor.png";

type Counsellor = {
  name: string;
  experience: string;
  expertise: string[];
  languages: string[];
  pricePerHour: number;
};

export default function Counsellors() {
  const counsellors: Counsellor[] = Array(4).fill({
    name: "Ayushi Khanna",
    experience: "15+ years experience",
    expertise: ["US Admission Process", "ILTES"],
    languages: ["English", "Hindi", "Tamil"],
    pricePerHour: 50,
  });

  return (
    <div className="min-h-screen bg-[#f5f0e8] grid grid-cols-12">
      <div className="col-span-1">
        <Sidebar />
      </div>

      <div className="col-span-11 flex-1 p-6 h-screen overflow-y-scroll">
        <header className="flex justify-between items-center mb-8">
          <div>
            <div className="text-[#00813d] text-xl font-bold">Counsellors</div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
        </header>

        <div className="mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {counsellors.map((counsellor, index) => (
            <Card
              key={index}
              className="rounded-[24px] overflow-hidden bg-[#F3F3F3] border-0"
            >
              <div className="aspect-[3/2] relative">
                <Image
                  src={counsellorImage}
                  alt={counsellor.name}
                  quality={100}
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-[#00813d] text-2xl font-semibold  mb-0.5">
                  {counsellor.name}
                </h2>
                <p className="text-lg font-bold mb-2">
                  {counsellor.experience}
                </p>

                <div className="space-y-2 text-sm">
                  <div>
                    <h3 className="text-gray-600 text-base font-semibold mb-0.5">
                      Expertise
                    </h3>
                    <div className="space-y-1 pl-2 font-semibold">
                      {counsellor.expertise.map((item, i) => (
                        <p key={i} className="text-gray-700 ">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-gray-600 text-base font-semibold mb-0.5">
                      Languages
                    </h3>
                    <div className="flex gap-2 pl-2 font-semibold">
                      {counsellor.languages.map((language, i) => (
                        <span key={i} className="text-gray-700">
                          {language}
                          {i < counsellor.languages.length - 1 && " "}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <p className="text-[#FF6B6B]  text-base font-semibold">
                      ${counsellor.pricePerHour} / Per hour
                    </p>
                    <Button className="bg-[#333333] text-white hover:bg-[#444444] rounded-full px-6 py-2 text-base font-semibold">
                      Schedule
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
