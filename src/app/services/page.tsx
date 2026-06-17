import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional electrical services including residential wiring, commercial electrical, panel upgrades, lighting design, emergency repairs, EV charger installation, smart home, and safety inspections.",
};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faHouse,
  faBuilding,
  faTriangleExclamation,
  faLightbulb,
  faChargingStation,
  faHouseLaptop,
  faClipboardCheck,
  faCheck,
  faArrowRight,
  faPhone,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const PHONE = "+155****4567";

interface ServiceItem {
  title: string;
  description: string;
  icon: typeof faBolt;
  image: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    title: "Residential Wiring",
    description: "Complete home wiring solutions",
    icon: faHouse,
    image: "/images/services/residential-wiring.jpg",
    features: [
      "New construction & remodel wiring",
      "Outlet & switch installation",
      "Circuit breaker upgrades",
    ],
  },
  {
    title: "Commercial Electrical",
    description: "Office & retail electrical systems",
    icon: faBuilding,
    image: "/images/services/commercial-electrical.jpg",
    features: [
      "Tenant improvement wiring",
      "Lighting retrofits & upgrades",
      "Code compliance & permitting",
    ],
  },
  {
    title: "Panel Upgrades",
    description: "Modern panel replacements",
    icon: faBolt,
    image: "/images/services/panel-upgrades.jpg",
    features: [
      "100A to 200A+ upgrades",
      "Smart panel installation",
      "Load balancing & surge protection",
    ],
  },
  {
    title: "Lighting Design",
    description: "Custom lighting solutions",
    icon: faLightbulb,
    image: "/images/services/lighting-design.jpg",
    features: [
      "Interior & exterior design",
      "LED retrofit consultation",
      "Landscape & accent lighting",
    ],
  },
  {
    title: "Emergency Repairs",
    description: "24/7 rapid response",
    icon: faTriangleExclamation,
    image: "/images/services/emergency-repairs.jpg",
    features: [
      "Same-day service available",
      "Power outage troubleshooting",
      "Spark & smoke diagnostics",
    ],
  },
  {
    title: "EV Charger Install",
    description: "Home & business charging",
    icon: faChargingStation,
    image: "/images/services/ev-charger-install.jpg",
    features: [
      "Level 2 charger setup",
      "Panel capacity assessment",
      "Commercial fleet solutions",
    ],
  },
  {
    title: "Smart Home",
    description: "Home automation systems",
    icon: faHouseLaptop,
    image: "/images/services/smart-home.jpg",
    features: [
      "Smart lighting & switches",
      "Voice control integration",
      "Security & camera wiring",
    ],
  },
  {
    title: "Safety Inspections",
    description: "Thorough electrical inspections",
    icon: faClipboardCheck,
    image: "/images/services/safety-inspections.jpg",
    features: [
      "Whole-home safety audits",
      "Insurance inspection reports",
      "Pre-purchase evaluations",
    ],
  },
];

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  buttonLabel: string;
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$99",
    features: [
      "Diagnostic system check",
      "2 hours of labor",
      "Basic repair & fix",
    ],
    buttonLabel: "Get Started",
  },
  {
    name: "Standard",
    price: "$249",
    features: [
      "Full system inspection",
      "4 hours of labor",
      "Panel health check",
      "Outlet replacement (up to 3)",
    ],
    buttonLabel: "Most Popular",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$499",
    features: [
      "Comprehensive audit",
      "8 hours of labor",
      "Smart home setup",
      "1-year workmanship warranty",
    ],
    buttonLabel: "Go Premium",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* ── Header / Hero ── */}
      <section className="bg-hero-pattern py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Our Services
            </h1>
            <nav
              className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="hover:text-primary transition-colors"
              >
                Home
              </Link>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="size-3"
              />
              <span className="text-foreground font-medium">Services</span>
            </nav>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              What We Offer
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              From routine repairs to full-scale installations, our licensed
              electricians deliver quality workmanship on every job.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="glass-card group overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-44 object-cover"
                />
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="size-5"
                    />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="size-3.5 mt-0.5 text-primary shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn more
                    <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Pricing ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Service Packages
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Every package includes a
              satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`glass-card flex flex-col ${
                  tier.highlighted
                    ? "ring-2 ring-secondary shadow-lg scale-105"
                    : ""
                }`}
              >
                <CardHeader className="text-center">
                  {tier.highlighted && (
                    <Badge
                      variant="secondary"
                      className="mx-auto mb-2"
                    >
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      /visit
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="size-3.5 mt-0.5 text-primary shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="px-(--card-spacing) pb-(--card-spacing) mt-auto">
                  <Button
                    variant={tier.highlighted ? "default" : "outline"}
                    className="w-full"
                  >
                    {tier.buttonLabel}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-full bg-white/20">
              <FontAwesomeIcon
                icon={faPhone}
                className="size-7 text-primary-foreground"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground">
              Need Emergency Service?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg">
              Our team is on standby 24/7 for urgent electrical issues. Call us
              now and we&apos;ll dispatch a licensed electrician immediately.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="text-3xl sm:text-4xl font-bold text-primary-foreground hover:text-primary-foreground/90 transition-colors tracking-tight"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
