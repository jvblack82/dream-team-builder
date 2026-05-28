import logo4ps from "@/assets/logo-4ps.png";
import logoSellercandy from "@/assets/logo-sellercandy.png";
import logoChristinas from "@/assets/logo-christinas.png";
import logoDreamplex from "@/assets/logo-dreamplex.png";
import logoDh from "@/assets/logo-dh.png";
import logoTpbank from "@/assets/logo-tpbank.png";
import logoCoffeehouse from "@/assets/logo-coffeehouse.png";
import logoMarou from "@/assets/logo-marou.png";
import logoSathapana from "@/assets/logo-sathapana.png";
import logoVpbank from "@/assets/logo-vpbank.svg";
import logoLixibox from "@/assets/logo-lixibox.png";

export interface CompanyLogo {
  src: string;
  alt: string;
}

// Companies where the practice has been built, as a "worked with" credibility
// strip (greyscale, low opacity). Order is tuned for visual balance: the two
// heart marks (Christina's, The Coffee House) are kept apart, and wide
// wordmarks alternate with compact marks rather than being strictly
// alphabetical. Mix of direct operating roles and consulting engagements, so
// the strip is never labelled "clients".
export const COMPANY_LOGOS: CompanyLogo[] = [
  { src: logo4ps, alt: "Pizza 4P's" },
  { src: logoSellercandy, alt: "Seller Candy" },
  { src: logoChristinas, alt: "Christina's" },
  { src: logoDreamplex, alt: "Dreamplex" },
  { src: logoDh, alt: "Delivering Happiness" },
  { src: logoTpbank, alt: "TPBank" },
  { src: logoCoffeehouse, alt: "The Coffee House" },
  { src: logoMarou, alt: "Marou" },
  { src: logoSathapana, alt: "Sathapana Bank" },
  { src: logoVpbank, alt: "VPBank" },
  { src: logoLixibox, alt: "Lixibox" },
];
