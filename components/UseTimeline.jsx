import {
  BriefcaseMedicalIcon,
  ClockPlus,
  HeartHandshake,
  PillBottle,
} from "lucide-react";

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

const items = [
  {
    id: 1,
    date: "step 1",
    title: "Consultation & Diagnosis",
    description:
      "Share your medical history, symptoms, and lifestyle with Dr. Ramesh for a detailed evaluation.",
    icon: BriefcaseMedicalIcon,
  },
  {
    id: 2,
    date: "step 2",
    title: "Personalized Homeopathic Plan",
    description:
      "Receive a customized treatment that targets root causes, not just symptoms.",
    icon: PillBottle,
  },
  {
    id: 3,
    date: "step 3",
    title: "Gentle & Lasting Relief",
    description:
      "Experience safe, natural, and side-effect-free healing tailored to your condition.",
    icon: ClockPlus,
  },
  {
    id: 4,
    date: "step 4",
    title: "Long-Term Care & Prevention",
    description:
      "Guidance on diet, lifestyle, and long-term wellness to avoid relapse.",
    icon: HeartHandshake,
  },
];

export default function Component() {
  return (
    <section id="howitworks" className="w-screen overflow-hidden pb-24">
      <div className="container mx-auto border-t border-b border-dashed">
        <div className="relative flex w-full max-w-7xl flex-col items-center justify-center border border-t-0 border-b-0 border-dashed px-5 py-12 md:px-10 lg:mx-auto lg:px-15">
          <div className="relative mx-auto mt-3 mb-12 text-center text-3xl font-medium tracking-tight md:text-4xl">
            <h2> How It Works</h2>
            <p className="text-muted-foreground mt-3 text-center text-sm md:text-base">
              Your health, step by step
            </p>
          </div>
          <div>
            <Timeline defaultValue={4}>
              {items.map((item) => (
                <TimelineItem
                  key={item.id}
                  step={item.id}
                  className="group-data-[orientation=vertical]/timeline:ms-10"
                >
                  <TimelineHeader>
                    <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
                    <TimelineDate className="mt-1 mb-2 font-medium uppercase underline underline-offset-2">
                      {item.date}
                    </TimelineDate>
                    <TimelineTitle className="mt-0.5 text-base">
                      {item.title}
                    </TimelineTitle>
                    <TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
                      <item.icon size={14} />
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="text-sm">
                    {item.description}
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
}
