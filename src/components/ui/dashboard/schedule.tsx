import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export const Schedule = () => {
  return (
    <section>
      <Card className="rounded-3xl p-8">
        <div className="border-b border-gray-300 pb-4 mb-6">
          <h2 className="text-xl font-bold">Schedule 2025</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              task: "Tutoring and additional help for Math",
              category: "Academic support",
              status: "Started",
            },
            {
              task: "Shadow Cardiologist - 2 weekends",
              category: "Extra curricular",
              status: "Planned Oct 24",
            },
            {
              task: "Participate in school chess competition",
              category: "Hobby",
              status: "Planned Nov 24",
            },
            {
              task: "Visit terminal illness centre study",
              category: "Extra curricular",
              status: "Planned Dec 24",
            },
            {
              task: "Participate in RedCross activity",
              category: "Extra curricular",
              status: "Planning Pending",
            },
          ].map((item) => (
            <div
              key={item.task}
              className="flex items-center gap-4 py-2 border-b border-gray-200"
            >
              <Checkbox />
              <div className="flex-1 grid grid-cols-3 gap-4">
                <span className="font-medium">{item.task}</span>
                <span className="text-muted-foreground">{item.category}</span>
                <span className="text-right">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};
