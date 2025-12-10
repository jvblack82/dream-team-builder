import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container-width flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent" />
          <span className="font-bold text-lg tracking-tight">DREAMSCOPE</span>
        </div>
        <div className="text-primary-foreground/60 text-sm">
          © 2025 Dreamscope Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
