import { Users, TrendingUp, Target } from 'lucide-react';
import { ReactNode } from 'react';

interface ProblemCardProps {
  title: string;
  desc: string;
  icon: ReactNode;
}

const ProblemCard = ({ title, desc, icon }: ProblemCardProps) => (
  <div className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all hover:-translate-y-1">
    <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="font-bold text-xl mb-3 text-card-foreground">{title}</h3>
    <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
  </div>
);

const ProblemSection = () => {
  const problems = [
    {
      title: "The 15-Person Cliff",
      desc: "What worked when you were a tribe of 5-15 breaks down as you stretch to 50 and can be chaos as you reach 100+. You can't run a village with family rules.",
      icon: <Users className="w-6 h-6 text-destructive" />,
    },
    {
      title: "The Iceberg of Indifference",
      desc: "Ignoring culture because 'we're too busy' leads to operational debt you can't pay back later. Behavior drifts until it's toxic.",
      icon: <TrendingUp className="w-6 h-6 text-destructive" />,
    },
    {
      title: "The Skill Trap",
      desc: "Promoting people because they are good at a task, not because they are good at leading people. You gain a manager but lose a leader.",
      icon: <Target className="w-6 h-6 text-destructive" />,
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Why Most Team Building Fails: The "Monday Effect"
          </h2>
          <p className="text-lg text-muted-foreground">
            You spend the budget on a massive team building event. Everyone high-fives. It
            feels inspiring. Then comes Monday. The energy is gone, and everyone goes
            back to the exact same behaviors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
