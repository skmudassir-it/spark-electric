import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faPhone,
  faChevronRight,
  faBolt,
  faCalendarCheck,
  faLightbulb,
  faTriangleExclamation,
  faShieldHalved,
  faClock,
  faHouse,
  faBuilding,
  faChargingStation,
  faHouseLaptop,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

// ── Service data ────────────────────────────────────────────────────

interface ServiceData {
  title: string;
  icon: typeof faBolt;
  description: string;
  overview: string;
  features: string[];
  benefits: string[];
}

const services: Record<string, ServiceData> = {
  "residential-wiring": {
    title: "Residential Wiring",
    icon: faHouse,
    description:
      "Complete home wiring solutions for new construction, remodels, and upgrades",
    overview:
      "Our residential wiring services cover everything from new home construction to remodeling projects and electrical upgrades. Our licensed electricians ensure every wire, outlet, and switch meets the highest safety standards and local building codes.",
    features: [
      "New construction & remodel wiring",
      "Outlet & switch installation & replacement",
      "Circuit breaker & panel upgrades",
      "Whole-home surge protection",
      "Ceiling fan & fixture installation",
    ],
    benefits: [
      "Increased home safety",
      "Modern convenience",
      "Higher property value",
      "Energy efficiency",
    ],
  },
  "commercial-electrical": {
    title: "Commercial Electrical",
    icon: faBuilding,
    description: "Office & retail electrical systems",
    overview:
      "We provide comprehensive commercial electrical services for offices, retail spaces, restaurants, and more. From tenant improvements to full-scale electrical system design, our team delivers code-compliant solutions that keep your business powered and productive.",
    features: [
      "Tenant improvement wiring",
      "Lighting retrofits & upgrades",
      "Code compliance & permitting",
      "Backup generator installation",
      "Energy management systems",
    ],
    benefits: [
      "Minimal business disruption",
      "Code compliance guaranteed",
      "Energy cost savings",
      "Scalable infrastructure",
    ],
  },
  "panel-upgrades": {
    title: "Panel Upgrades",
    icon: faBolt,
    description: "Modern panel replacements",
    overview:
      "Upgrade your electrical panel to handle today's power demands. Whether you're adding appliances, an EV charger, or simply need more capacity, our panel upgrade services ensure your electrical system is safe, reliable, and future-ready.",
    features: [
      "100A to 200A+ upgrades",
      "Smart panel installation",
      "Load balancing & surge protection",
      "Sub-panel additions",
      "Whole-home electrical assessment",
    ],
    benefits: [
      "Eliminate tripping breakers",
      "Support modern appliances",
      "Increase home value",
      "Prevent electrical fires",
    ],
  },
  "lighting-design": {
    title: "Lighting Design",
    icon: faLightbulb,
    description: "Custom lighting solutions",
    overview:
      "Transform your space with professional lighting design. From ambient to task to accent lighting, we create custom solutions that enhance aesthetics, improve functionality, and reduce energy costs for homes and businesses.",
    features: [
      "Interior & exterior design",
      "LED retrofit consultation",
      "Landscape & accent lighting",
      "Smart lighting controls",
      "Commercial lighting layouts",
    ],
    benefits: [
      "Enhanced aesthetics",
      "Lower energy bills",
      "Improved productivity",
      "Increased safety",
    ],
  },
  "emergency-repairs": {
    title: "Emergency Repairs",
    icon: faTriangleExclamation,
    description: "24/7 rapid response",
    overview:
      "Electrical emergencies don't wait for business hours — and neither do we. Our 24/7 emergency repair team is ready to respond within 60 minutes to restore power and keep your family or business safe. Day or night, weekends and holidays included.",
    features: [
      "Same-day service available",
      "Power outage troubleshooting",
      "Spark & smoke diagnostics",
      "Circuit breaker & fuse repair",
      "Emergency panel replacement",
    ],
    benefits: [
      "60-minute response time",
      "24/7/365 availability",
      "Fully-stocked service vehicles",
      "Licensed & insured technicians",
    ],
  },
  "ev-charger-install": {
    title: "EV Charger Install",
    icon: faChargingStation,
    description: "Home & business charging",
    overview:
      "Power your electric vehicle with a professionally installed home or commercial charging station. We handle everything from panel capacity assessment to permit pulling — so you can charge safely and conveniently.",
    features: [
      "Level 2 charger setup (all major brands)",
      "Panel capacity assessment",
      "Commercial fleet charging solutions",
      "Permit acquisition & inspection",
      "Outdoor & garage installations",
    ],
    benefits: [
      "Charge 5x faster than standard outlets",
      "Increase property value",
      "Tax credit eligible",
      "Professional warranty",
    ],
  },
  "smart-home": {
    title: "Smart Home",
    icon: faHouseLaptop,
    description: "Home automation systems",
    overview:
      "Bring your home into the future with smart home automation. We design and install integrated systems for lighting, climate, security, and entertainment — all controlled from your phone or voice assistant.",
    features: [
      "Smart lighting & dimmer switches",
      "Voice control integration (Alexa, Google, Siri)",
      "Security camera & doorbell wiring",
      "Automated shade & blind systems",
      "Whole-home audio & network wiring",
    ],
    benefits: [
      "Convenience & control",
      "Energy savings",
      "Enhanced security",
      "Future-ready home",
    ],
  },
  "safety-inspections": {
    title: "Safety Inspections",
    icon: faClipboardCheck,
    description: "Thorough electrical inspections",
    overview:
      "Protect your property and loved ones with a comprehensive electrical safety inspection. Our certified inspectors examine every component of your electrical system and provide detailed reports with actionable recommendations.",
    features: [
      "Whole-home safety audits",
      "Code compliance verification",
      "Pre-purchase inspections",
      "Thermal imaging diagnostics",
      "Detailed inspection reports",
    ],
    benefits: [
      "Peace of mind",
      "Insurance compliance",
      "Identify hidden hazards",
      "Prevent costly repairs",
    ],
  },
};

const allSlugs = Object.keys(services);

// ── Related services (by slug) ──────────────────────────────────────
const relatedMap: Record<string, string[]> = {
  "residential-wiring": [
    "panel-upgrades",
    "lighting-design",
    "safety-inspections",
  ],
  "commercial-electrical": [
    "lighting-design",
    "panel-upgrades",
    "safety-inspections",
  ],
  "panel-upgrades": [
    "residential-wiring",
    "commercial-electrical",
    "ev-charger-install",
  ],
  "lighting-design": [
    "residential-wiring",
    "commercial-electrical",
    "smart-home",
  ],
  "emergency-repairs": [
    "panel-upgrades",
    "residential-wiring",
    "safety-inspections",
  ],
  "ev-charger-install": [
    "panel-upgrades",
    "residential-wiring",
    "smart-home",
  ],
  "smart-home": [
    "lighting-design",
    "residential-wiring",
    "ev-charger-install",
  ],
  "safety-inspections": [
    "residential-wiring",
    "commercial-electrical",
    "emergency-repairs",
  ],
};

// ── generateStaticParams ────────────────────────────────────────────

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

// ── Metadata ────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: service.title,
    description: service.description,
  };
}

// ── Page component ──────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-hero-pattern py-20">
        <div className="glass-strong mx-auto max-w-md rounded-2xl p-10 text-center shadow-xl">
          <h1 className="text-2xl font-bold text-foreground">
            Service Not Found
          </h1>
          <p className="mt-3 text-muted-foreground">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
          <div className="mt-6">
            <Link href="/services" className="inline-flex">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedSlugs = relatedMap[slug] ?? [];
  const isEmergency = slug === "emergency-repairs";

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          EMERGENCY CTA BANNER (emergency-repairs only)
      ═══════════════════════════════════════════════════════════ */}
      {isEmergency && (
        <section className="bg-amber-400 py-10 sm:py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 text-center sm:flex-row sm:gap-8 sm:px-6 lg:px-8">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/25 text-white shadow-lg">
              <FontAwesomeIcon icon={faPhone} className="size-6" />
            </div>
            <div className="sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-900">
                24/7 Emergency Hotline
              </p>
              <p className="mt-1 text-3xl font-bold tracking-tight text-amber-950 sm:text-4xl">
                Need Immediate Help? Call (555) 123-4567
              </p>
              <p className="mt-2 text-sm text-amber-800">
                Our on-call electricians respond within 60 minutes — day or
                night, weekends and holidays included.
              </p>
            </div>
            <a href="tel:+15551234567" className="inline-flex shrink-0">
              <Button
                size="lg"
                variant="secondary"
                className="shrink-0 shadow-md"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
                Call Now
              </Button>
            </a>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          HERO / HEADER
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-hero-pattern py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong mx-auto max-w-3xl rounded-2xl p-8 text-center shadow-xl sm:p-12">
            {/* Icon */}
            <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
              <FontAwesomeIcon icon={service.icon} className="size-7" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {service.title}
            </h1>

            {/* Breadcrumb */}
            <nav
              className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="transition-colors hover:text-primary"
              >
                Home
              </Link>
              <FontAwesomeIcon icon={faChevronRight} className="size-3" />
              <Link
                href="/services"
                className="transition-colors hover:text-primary"
              >
                Services
              </Link>
              <FontAwesomeIcon icon={faChevronRight} className="size-3" />
              <span className="font-medium text-foreground">
                {service.title}
              </span>
            </nav>

            {/* Emergency badge for emergency-repairs */}
            {isEmergency && (
              <Badge variant="secondary" className="mt-4">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="mr-1 size-3"
                />
                24/7 Emergency Service
              </Badge>
            )}

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CONTENT
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* ── Main content (2/3) ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="glass-card p-6 sm:p-8">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Overview
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.overview}
                </p>
              </div>

              {/* Features */}
              <div className="glass-card p-6 sm:p-8">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  What We Offer
                </h2>
                <ul className="mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                        <FontAwesomeIcon icon={faCheck} className="size-3.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Sidebar (1/3) ── */}
            <div className="space-y-6">
              {/* Benefits */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  Benefits
                </h3>
                <Separator className="my-4" />
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FontAwesomeIcon icon={faShieldHalved} className="size-3.5" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick CTA */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  Ready to Get Started?
                </h3>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  Get a free, no-obligation estimate for your{" "}
                  {service.title.toLowerCase()} project.
                </p>
                <div className="mt-4">
                  <Link href="/contact" className="inline-flex w-full">
                    <Button className="w-full" size="lg">
                      <FontAwesomeIcon
                        icon={faCalendarCheck}
                        className="mr-2 size-4"
                      />
                      Get Free Estimate
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 size-4"
                      />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Emergency sidebar CTA */}
              {isEmergency && (
                <div className="rounded-xl bg-amber-50 p-5 ring-1 ring-amber-200">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="size-4 text-amber-600"
                    />
                    <span className="text-sm font-semibold text-amber-800">
                      24/7 Emergency Hotline
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-amber-700">
                    Call us anytime — day or night, weekends and holidays.
                    Response within 60 minutes guaranteed.
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="mt-2 inline-block text-base font-bold text-amber-700 hover:text-amber-900"
                  >
                    (555) 123-4567
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RELATED SERVICES
      ═══════════════════════════════════════════════════════════ */}
      {relatedSlugs.length > 0 && (
        <section className="bg-muted/40 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Related Services
              </h2>
              <p className="mt-3 text-muted-foreground">
                Explore other services that might interest you.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedSlugs.map((relatedSlug) => {
                const related = services[relatedSlug];
                if (!related) return null;
                return (
                  <Link
                    key={relatedSlug}
                    href={`/services/${relatedSlug}`}
                    className="group"
                  >
                    <Card className="glass-card h-full transition-shadow hover:shadow-lg">
                      <CardHeader>
                        <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                          <FontAwesomeIcon
                            icon={related.icon}
                            className="size-5"
                          />
                        </div>
                        <CardTitle>{related.title}</CardTitle>
                        <CardDescription>
                          {related.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                          Learn more
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="size-3"
                          />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-hero-pattern py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 text-center sm:p-14">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
              Get a free, no-obligation estimate from our licensed electricians.
              We&apos;ll respond within 24 hours — guaranteed.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2"
              >
                <Button size="lg">
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    className="size-4"
                  />
                  Request Free Estimate
                  <FontAwesomeIcon icon={faArrowRight} className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
