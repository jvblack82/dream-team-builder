import logoFullWhite from '@/assets/logo-full-white.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container-width flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src={logoFullWhite} alt="Logo" className="h-8" />
        </div>
        <div className="text-primary-foreground/60 text-sm">
          © 2025 Dreamscope Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
