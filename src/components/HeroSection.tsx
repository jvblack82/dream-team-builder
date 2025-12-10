import { ArrowRight, Compass, Wrench, Settings, Flame, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 -z-10 opacity-[0.03]">
        <Sparkles className="w-[500px] h-[500px]" />
      </div>

      <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-muted-foreground text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            Operationalize Your Culture
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Scale Your Business{' '}
            <span className="text-muted-foreground">Without Losing Your Soul.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
            Culture isn't a poster on the wall. It's how your team behaves when you
            aren't in the room. We help leaders build high-performing, purpose-driven
            teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection('assessment')}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-elegant"
            >
              Get the Assessment
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection('framework')}
              className="inline-flex items-center justify-center gap-2 bg-background text-foreground border-2 border-border px-8 py-4 rounded-full text-base font-semibold hover:border-foreground transition-all"
            >
              See the Framework
            </button>
          </div>
        </div>

        {/* 3D Puzzle Visual */}
        <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center">
          <div className="relative w-80 h-80 grid grid-cols-2 gap-3 animate-float">
            <div className="bg-culture rounded-2xl flex flex-col items-center justify-center text-culture-foreground p-6 shadow-xl transform translate-x-1 translate-y-1 hover:scale-105 transition-transform">
              <Compass className="w-10 h-10 mb-2" />
              <span className="font-bold text-lg">Culture</span>
            </div>
            <div className="bg-skills rounded-2xl flex flex-col items-center justify-center text-skills-foreground p-6 shadow-xl transform -translate-x-1 translate-y-1 hover:scale-105 transition-transform">
              <Wrench className="w-10 h-10 mb-2" />
              <span className="font-bold text-lg">Skills</span>
            </div>
            <div className="bg-motivation rounded-2xl flex flex-col items-center justify-center text-motivation-foreground p-6 shadow-xl transform translate-x-1 -translate-y-1 hover:scale-105 transition-transform">
              <Flame className="w-10 h-10 mb-2" />
              <span className="font-bold text-lg">Motivation</span>
            </div>
            <div className="bg-systems rounded-2xl flex flex-col items-center justify-center text-systems-foreground p-6 shadow-xl transform -translate-x-1 -translate-y-1 hover:scale-105 transition-transform">
              <Settings className="w-10 h-10 mb-2" />
              <span className="font-bold text-lg">Systems</span>
            </div>

            {/* Center Connection */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-background rounded-full shadow-2xl flex items-center justify-center z-10 border-4 border-background">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
