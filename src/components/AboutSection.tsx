const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-32 h-32 mx-auto bg-muted rounded-full mb-8 overflow-hidden border-4 border-background shadow-lg">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=JoeBlack&backgroundColor=b6e3f4"
            alt="Joe Black"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-foreground">
          From Landscaping to Leadership
        </h2>
        <p className="text-xl text-muted-foreground mb-8 font-light italic">
          "I'm not a career academic. I learned that you can engineer culture. It's
          not luck. It's a strategic asset."
        </p>
        <div className="prose prose-lg mx-auto text-muted-foreground max-w-2xl">
          <p>
            I spent 9 years running a landscaping business where I accidentally
            discovered that <strong className="text-foreground">Integrity</strong> was more profitable than
            shortcuts. Since then, I spent four years with{' '}
            <strong className="text-foreground">Delivering Happiness</strong>, consulting for banks and
            startups, and served as the Culture & Operations Excellence Director at
            Pizza 4P's.
          </p>
          <p className="mt-6 font-bold text-foreground">
            My Mission: To positively impact 100,000 lives by enabling leaders to
            build high-performing, purpose-driven teams by 2030.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
