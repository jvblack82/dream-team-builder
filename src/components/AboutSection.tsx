import joeBlackPhoto from '@/assets/joe-black.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-32 h-32 mx-auto bg-muted rounded-full mb-8 overflow-hidden border-4 border-background shadow-lg">
          <img
            src={joeBlackPhoto}
            alt="Joe Black"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-foreground">
          From Landscaping to Leadership
        </h2>
        <p className="text-xl text-muted-foreground mb-8 font-light italic">
          "Everything works better if people love what they do."
        </p>
        <div className="prose prose-lg mx-auto text-muted-foreground max-w-2xl">
          <p>
            Joe spent four years consulting with the internationally acclaimed corporate culture transformation specialist, Delivering Happiness. He worked with clients such as VPBank, Seller Candy, Sathapana Bank, as well as serving as the Culture & Operations Excellence Director at Pizza 4P's for the past two years—one of the fastest-growing restaurant chains in SE Asia, with over 40 locations and 3,700 employees in 5 countries.
          </p>
          <p className="mt-6">
            Through all this he found that <strong className="text-foreground">everything works better if people love what they do</strong>, the company does better AND people live better lives.
          </p>
          <p className="mt-6">
            Joe founded Dreamscope with the mission to <strong className="text-foreground">positively impact 100,000 lives</strong> by enabling leaders to build high-performing, purpose-driven teams across Southeast Asia and beyond by 2030.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
