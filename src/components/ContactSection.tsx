import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Let's Scope Your Dream Team
          </h2>
          <p className="text-muted-foreground">
            Whether you are hitting the 15-person cliff or the 150-person fracture,
            the best time to fix your culture was yesterday. The second best time is
            now.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-lg">
            <Mail className="w-5 h-5 text-accent" />
            <span className="text-muted-foreground">Contact Me:</span>
            <a 
              href="mailto:joe@dreamscope.win" 
              className="text-foreground font-semibold hover:text-accent transition-colors underline underline-offset-4"
            >
              joe@dreamscope.win
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
