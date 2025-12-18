import { Compass, Wrench, Settings, Flame } from 'lucide-react';
import { ReactNode } from 'react';

interface FrameworkPointProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  desc: string;
}

const FrameworkPoint = ({ icon, title, subtitle, desc }: FrameworkPointProps) => (
  <div className="flex gap-6 group">
    <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center group-hover:bg-card group-hover:shadow-md transition-all">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <div className="text-sm font-semibold text-muted-foreground mb-3 tracking-wide">
        {subtitle}
      </div>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  </div>
);

const FrameworkSection = () => {
  const frameworks = [
    {
      icon: <Compass className="w-8 h-8 text-culture" />,
      title: "1. Culture (The Heart)",
      subtitle: "From Rules to Values",
      desc: "Most companies use a 'Map' (Rules) that breaks when the territory changes. We give your team a Compass (Values). This empowers them to navigate the unexpected without waiting for permission.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-skills" />,
      title: "2. Skills (The Hands)",
      subtitle: "Competence guided by Character",
      desc: "Skill without culture is dangerous. You might have a talented 'jerk' who destroys the team. We ensure high competence is guided by high character, moving your team from the 'Chaos Zone' to the 'Sweet Spot'.",
    },
    {
      icon: <Settings className="w-8 h-8 text-systems" />,
      title: "3. Systems (The Mechanics)",
      subtitle: "Making Success Repeatable",
      desc: "A tool (like a to-do list) is not a system. A system is the behavior around the tool. We build the rituals, feedback loops, and operational cadences that make success repeatable, not just lucky.",
    },
    {
      icon: <Flame className="w-8 h-8 text-motivation" />,
      title: "4. Motivation (The Fuel)",
      subtitle: "The 5i's Framework",
      desc: "We diagnose exactly why your people show up. Are they there for the 'Paycheck' (Minimum Effort) or for the 'Purpose' (Discretionary Effort)? We help you move them up the ladder.",
    },
  ];

  return (
    <section id="framework" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            The 4 Elements of High-Performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            True engagement isn't magic. It happens when four specific elements lock
            together. If one is missing, the puzzle falls apart.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Visual representation */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32">
              <div className="aspect-square bg-secondary rounded-3xl p-10 grid grid-cols-2 gap-5">
                <div className="bg-culture rounded-2xl flex items-center justify-center text-culture-foreground text-xl font-bold shadow-lg hover:scale-105 transition-transform">
                  Culture
                </div>
                <div className="bg-skills rounded-2xl flex items-center justify-center text-skills-foreground text-xl font-bold shadow-lg hover:scale-105 transition-transform">
                  Skills
                </div>
                <div className="bg-motivation rounded-2xl flex items-center justify-center text-motivation-foreground text-xl font-bold shadow-lg hover:scale-105 transition-transform">
                  Motivation
                </div>
                <div className="bg-systems rounded-2xl flex items-center justify-center text-systems-foreground text-xl font-bold shadow-lg hover:scale-105 transition-transform">
                  Systems
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-14">
            {frameworks.map((framework, index) => (
              <FrameworkPoint key={index} {...framework} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
