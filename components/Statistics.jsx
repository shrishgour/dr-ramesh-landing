export const Statistics = () => {
  const stats = [
    {
      quantity: "5+ Yrs",
      description: "@ Kothari Hospital",
    },
    {
      quantity: "11+ Yrs",
      description: "Practice",
    },
    {
      quantity: "1+ Yrs",
      description: "Naturopathy",
    },
    {
      quantity: "2014",
      description: "BHMS",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map(({ quantity, description }) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">{quantity}</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
