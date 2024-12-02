import { Mic2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-6">About you</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Academic Achievements", date: "22nd June 2024" },
          { title: "Extracurricular Activities", date: "10 Aug 2024" },
          { title: "Study Abroad Preferences", date: "15 Sep 2024" },
          { title: "Hobby and additional info", date: "18 Sep 2024" },
        ].map((item) => (
          <Card key={item.title} className="p-6 rounded-3xl">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  last updated {item.date}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-[#00813d] text-white"
              >
                <Mic2 className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
