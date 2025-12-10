import { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    challenge: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! We'll be in touch soon.");
    setFormData({ name: '', email: '', challenge: '' });
  };

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

        <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-md mx-auto">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              placeholder="you@company.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              What's your biggest team challenge?
            </label>
            <textarea
              rows={4}
              value={formData.challenge}
              onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
              placeholder="e.g. My team is great but they wait for me to make every decision..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold hover:opacity-90 transition-colors shadow-lg shadow-primary/20"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
