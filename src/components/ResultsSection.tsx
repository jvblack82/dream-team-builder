interface StatCardProps {
  number: string;
  label: string;
  description: string;
}

const StatCard = ({ number, label, description }: StatCardProps) => (
  <div className="text-center">
    <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
      {number}
    </div>
    <div className="text-accent font-bold mb-2">{label}</div>
    <div className="text-primary-foreground/70 text-sm leading-relaxed">{description}</div>
  </div>
);

const ResultsSection = () => {
  const stats = [
    { number: "18 - 60%", label: "Happiness Boost", description: "Jump in employee satisfaction from simple feedback-driven changes" },
    { number: "5 - 20%", label: "Mystery Shopper Increase", description: "Behavior led training directly increased key KPIs" },
    { number: "18 Points", label: "eNPS Rise", description: "All of this leads to an all around better place to work" },
    { number: "25 → 37", label: "New Locations in 5 Countries", description: "Empowered Sustainable Growth" },
  ];

  return (
    <section id="results" className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-2">Culture Driven Performance</h2>
          <p className="text-accent font-bold mb-6">Case Study Pizza 4P's</p>
          <p className="text-primary-foreground/70 text-lg max-w-3xl mx-auto">
            Behavior-driven approach delivers measurable results that transforms the business.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <p className="text-center text-primary-foreground/60 text-sm max-w-4xl mx-auto">
          These numbers represent tangible outcomes when culture shifts from abstract concept to concrete behaviors and systems.
        </p>
      </div>
    </section>
  );
};

export default ResultsSection;
