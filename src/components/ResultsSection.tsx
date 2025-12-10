interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => (
  <div className="border-l-2 border-accent pl-4">
    <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
      {number}
    </div>
    <div className="text-muted-foreground text-sm leading-tight">{label}</div>
  </div>
);

const ResultsSection = () => {
  const stats = [
    { number: "+18", label: "Point Rise in eNPS" },
    { number: "60%", label: "Boost in Happiness" },
    { number: "20%", label: "Increase in Mystery Shopper Scores" },
    { number: "37", label: "Locations Scaled (across 5 countries)" },
  ];

  return (
    <section id="results" className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-width grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-accent font-bold tracking-wider mb-4 uppercase text-sm">
            Case Study
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Real ROI. No Fluff.</h2>
          <p className="text-primary-foreground/70 text-lg mb-12 leading-relaxed">
            We applied this framework at <strong className="text-primary-foreground">Pizza 4P's</strong> as
            they scaled across Southeast Asia. We didn't just "talk" about culture;
            we engineered it into the operations.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="relative bg-primary/50 border border-primary-foreground/20 p-8 rounded-3xl shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 bg-primary-foreground rounded-full flex items-center justify-center font-bold text-primary text-sm">
                4P's
              </div>
              <div>
                <div className="font-bold">Pizza 4P's</div>
                <div className="text-sm text-primary-foreground/60">Culture-Driven Scale</div>
              </div>
            </div>

            {/* Graph Representation */}
            <div className="h-64 flex items-end justify-between gap-2 px-4 border-b border-primary-foreground/20 pb-4">
              <div className="w-full bg-primary-foreground/20 rounded-t-lg h-[30%] relative group">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Before
                </span>
              </div>
              <div className="w-full bg-primary-foreground/30 rounded-t-lg h-[45%]"></div>
              <div className="w-full bg-accent/80 rounded-t-lg h-[70%] animate-pulse"></div>
              <div className="w-full bg-accent rounded-t-lg h-[85%] shadow-glow relative group">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-accent">
                  Now
                </span>
              </div>
            </div>
            <p className="mt-6 text-center text-lg italic font-medium text-primary-foreground/80">
              "Everything works better if people love what they do."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
