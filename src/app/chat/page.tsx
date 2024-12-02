import { Sidebar } from "@/components/ui/dashboard/sidebar";
import { Button } from "@/components/ui/button";
import { Bell, ThumbsUp, ThumbsDown } from "lucide-react";

export default function Chat() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] grid grid-cols-12">
      <div className="col-span-3">
        <Sidebar className="h-full" />
      </div>

      <div className="col-span-7 flex flex-col p-6">
        <header className="flex justify-between items-center mb-8">
          <div>
            <div className="text-[#00813d] text-sm">Brainstorming on</div>
            <h1 className="text-2xl font-semibold">
              College admission for cardiology
            </h1>
            <div className="text-sm text-gray-500">15 seconds ago</div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
        </header>

        <div className="flex-1 overflow-y-auto space-y-6">
          <div className="bg-[#F3F3F3] rounded-[24px] p-6 ml-auto max-w-xl">
            help me with the best under graduate programs in cardiology in US
            and UK with differences
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-[20px] font-normal mb-4">Key differences:</h2>
              <ul className="list-disc pl-8 space-y-2">
                <li className="text-[18px] leading-relaxed">
                  Timeline: UK pathway is typically faster, starting medical
                  training immediately
                </li>
                <li className="text-[18px] leading-relaxed">
                  Structure: US requires separate undergraduate degree before
                  medical school
                </li>
                <li className="text-[18px] leading-relaxed">
                  Cost: UK programs generally less expensive but harder for
                  international students to enter
                </li>
                <li className="text-[18px] leading-relaxed">
                  Clinical exposure: UK programs integrate clinical experience
                  earlier
                </li>
                <li className="text-[18px] leading-relaxed">
                  Research opportunities: Both systems offer excellent research
                  but with different approaches
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[18px] leading-relaxed mb-2">
                In the US: There is no specific &quot;cardiology&quot;
                undergraduate degree. Instead, students typically:
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ThumbsDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="bg-white rounded-[32px] border shadow-sm flex items-center p-2">
            <Button className="rounded-full bg-[#00813d] text-white h-12 w-12 flex-shrink-0 hover:bg-[#00813d]">
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  fill="currentColor"
                  d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"
                />
                <path
                  fill="currentColor"
                  d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"
                />
              </svg>
            </Button>
            <input
              type="text"
              placeholder="How can Clyra assist you today?"
              className="flex-1 px-6 py-3 bg-transparent outline-none text-[16px]"
            />
            <Button
              variant="ghost"
              size="icon"
              className="flex-shrink-0 hover:bg-transparent"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  d="M12 3L20 11L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="col-span-2"></div> */}
    </div>
  );
}
