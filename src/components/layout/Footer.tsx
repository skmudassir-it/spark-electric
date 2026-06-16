import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const footerLinks = {
  Services: [
    { href: "/services", label: "Residential Wiring" },
    { href: "/services", label: "Commercial Electrical" },
    { href: "/services", label: "Panel Upgrades" },
    { href: "/services", label: "Emergency Repairs" },
    { href: "/services", label: "EV Chargers" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Our Work" },
    { href: "/contact", label: "Contact" },
    { href: "/contact", label: "Free Estimate" },
  ],
};

const contactInfo = [
  { icon: faPhone, text: "(555) 123-4567", href: "tel:+15551234567" },
  {
    icon: faEnvelope,
    text: "info@sparkelectric.com",
    href: "mailto:info@sparkelectric.com",
  },
  { icon: faLocationDot, text: "123 Main St, Suite 100, Portland, OR 97201" },
  { icon: faClock, text: "Mon–Fri 7am–6pm • 24/7 Emergency" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <FontAwesomeIcon icon={faBolt} className="size-4" />
              </div>
              <span className="text-xl font-bold text-white">
                Spark<span className="text-amber-400">Electric</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Professional electrical services for homes and businesses.
              Licensed, insured, and committed to safety and quality since 2005.
            </p>
            <div className="flex gap-3 pt-2">
              {[faFacebookF, faInstagram, faXTwitter].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-primary hover:text-primary"
                >
                  <FontAwesomeIcon icon={icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-amber-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="mt-0.5 size-3.5 text-amber-400 shrink-0"
                  />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-slate-400 transition-colors hover:text-amber-400"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-slate-400">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Spark Electric. All rights
            reserved. Licensed &amp; Insured — License #ELECT-2024-OR
          </p>
        </div>
      </div>
    </footer>
  );
}
