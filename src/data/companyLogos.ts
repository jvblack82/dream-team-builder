import logo4ps from "@/assets/logo-4ps.png";
import logoSellercandy from "@/assets/logo-sellercandy.png";
import logoChristinas from "@/assets/logo-christinas.png";
import logoDreamplex from "@/assets/logo-dreamplex.png";
import logoDh from "@/assets/logo-dh.png";
import logoTpbank from "@/assets/logo-tpbank.png";
import logoMarou from "@/assets/logo-marou.png";
import logoSathapana from "@/assets/logo-sathapana.png";
import logoVpbank from "@/assets/logo-vpbank.svg";

export interface CompanyLogo {
  src: string;
  alt: string;
  // Optical size multiplier vs the strip's base height (default 1). Compact
  // marks (a heart, a badge) need a bump to carry the same visual weight as
  // wide wordmarks.
  scale?: number;
}

// Companies where the practice has been built, as a "worked with" credibility
// strip (greyscale, low opacity). Mix of direct operating roles and consulting
// engagements, so the strip is never labelled "clients". Order is tuned for
// visual balance (wide wordmarks alternate with compact marks).
export const COMPANY_LOGOS: CompanyLogo[] = [
  { src: logo4ps, alt: "Pizza 4P's" },
  { src: logoSellercandy, alt: "Seller Candy" },
  { src: logoChristinas, alt: "Christina's", scale: 1.35 },
  { src: logoDreamplex, alt: "Dreamplex" },
  { src: logoDh, alt: "Delivering Happiness" },
  { src: logoTpbank, alt: "TPBank" },
  { src: logoMarou, alt: "Marou" },
  { src: logoSathapana, alt: "Sathapana Bank", scale: 1.3 },
  { src: logoVpbank, alt: "VPBank" },
];
