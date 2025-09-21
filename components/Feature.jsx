import {
  Activity,
  BarChart2,
  Droplet,
  Feather,
  FlaskConical,
  Smile,
  Stethoscope,
  Thermometer,
  Zap,
} from "lucide-react";

const Feature = ({
  heading = "Conditions Treated",
  subheading = "Care for every condition",
  features = [
    {
      title: "Pigmentary Diseases",
      description: "Restore natural skin tone and reduce discoloration safely.",
      icon: <Droplet className="size-4 md:size-6" />,
    },
    {
      title: "Liver Disorders",
      description:
        "Gentle remedies to improve liver function and detox naturally.",
      icon: <FlaskConical className="size-4 md:size-6" />,
    },
    {
      title: "Depression",
      description:
        "Holistic support for emotional balance and mental wellness.",
      icon: <Smile className="size-4 md:size-6" />,
    },
    {
      title: "Migraine",
      description:
        "Long-term relief from recurring headaches without side effects.",
      icon: <Zap className="size-4 md:size-6" />,
    },
    {
      title: "Thyroid Disorders",
      description: "Natural regulation of thyroid function and energy balance.",
      icon: <Activity className="size-4 md:size-6" />,
    },
    {
      title: "Allergy",
      description:
        "Strengthen immunity and reduce allergic reactions effectively.",
      icon: <Feather className="size-4 md:size-6" />,
    },
    {
      title: "Diabetes",
      description:
        "Support sugar control and improve overall vitality with safe care.",
      icon: <BarChart2 className="size-4 md:size-6" />,
    },
    {
      title: "Fever",
      description:
        "Boost body’s natural defense for quick recovery from recurring fevers.",
      icon: <Thermometer className="size-4 md:size-6" />,
    },
    {
      title: "Kidney Stones",
      description: " Non-surgical, painless removal of stones within 72 hours.",
      icon: <Stethoscope className="size-4 md:size-6" />,
    },
  ],
}) => {
  return (
    <section id="treatment" className="pb-24">
      <div className="container mx-auto border-t border-b border-dashed">
        <div className="relative flex w-full max-w-7xl flex-col items-center justify-center border border-t-0 border-b-0 border-dashed px-5 py-12 md:px-10 lg:mx-auto lg:px-15">
          <div className="relative mx-auto mt-3 text-center text-3xl font-medium tracking-tight md:text-4xl">
            <h2>{heading}</h2>
            <p className="text-muted-foreground mt-3 text-center text-sm md:text-base">
              {subheading}
            </p>
          </div>
          <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
                <span className="bg-primary text-primary-foreground mb-8 flex size-10 shrink-0 items-center justify-center rounded-lg md:size-12">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="font-medium md:mb-2 md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature };
