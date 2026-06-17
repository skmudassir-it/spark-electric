import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faHouse,
  faBuilding,
  faExclamationTriangle,
  faIndustry,
  faShieldHalved,
  faClock,
  faStar,
  faCheckCircle,
  faUsers,
  faArrowRight,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

// ── Service card data ──────────────────────────────────────────────
const services = [
  {
    icon: faHouse,
    title: "Residential",
    description: "Home wiring, lighting, panel upgrades",
    image: "/images/services/residential-wiring.jpg",
  },
  {
    icon: faBuilding,
    title: "Commercial",
    description: "Office, retail & industrial electrical",
    image: "/images/services/commercial-electrical.jpg",
  },
  {
    icon: faExclamationTriangle,
    title: "Emergency",
    description: "24/7 rapid response repairs",
    image: "/images/services/emergency-repairs.jpg",
  },
  {
    icon: faIndustry,
    title: "Industrial",
    description: "Heavy-duty power solutions",
    image: "/images/projects/factory-floor-power.jpg",
  },
];

// ── Why-us card data ───────────────────────────────────────────────
const whyUsCards = [
  {
    icon: faShieldHalved,
    title: "Licensed & Insured",
    description:
      "Fully licensed, bonded, and insured for your peace of mind on every project.",
  },
  {
    icon: faClock,
    title: "24/7 Availability",
    description:
      "Round-the-clock emergency service — we're here when you need us most.",
  },
  {
    icon: faStar,
    title: "5-Star Rated",
    description:
      "Consistently rated 5 stars by our customers for quality and reliability.",
  },
  {
    icon: faCheckCircle,
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind every job with a 100% satisfaction guarantee.",
  },
];

// ── Stats data ─────────────────────────────────────────────────────
const stats = [
  { value: "18+", label: "Years", icon: faClock },
  { value: "5,000+", label: "Projects", icon: faBolt },
  { value: "3,000+", label: "Clients", icon: faUsers },
  { value: "100%", label: "Satisfaction", icon: faStar },
];

// ── Page component ─────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section
        className="relative flex min-h-screen items-center justify-center bg-hero-pattern px-4 py-20"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="glass-strong mx-auto w-full max-w-3xl rounded-2xl p-8 text-center shadow-xl sm:p-12 lg:p-14">
          <Badge className="mb-5" variant="secondary">
            ⚡ 24/7 Emergency Service
          </Badge>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Powering Your World
            <br />
            with Confidence
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Licensed electricians delivering safe, reliable electrical solutions
            for homes and businesses. From emergency repairs to full-scale
            installations — we keep the power flowing.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex">
              <Button size="lg">Get Free Estimate</Button>
            </Link>
            <Link href="/services" className="inline-flex">
              <Button variant="outline" size="lg">Our Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SERVICES OVERVIEW
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Electrical Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive electrical solutions for every need — residential,
              commercial, and industrial.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="glass-card group overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <CardHeader>
                  <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <FontAwesomeIcon icon={service.icon} className="size-5" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
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

      {/* ═══════════════════════════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Spark Electric
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;re more than just electricians — we&apos;re your trusted
              power partners.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {whyUsCards.map((card) => (
              <Card key={card.title} className="glass-card text-center">
                <CardHeader className="items-center">
                  <div className="mb-3 flex size-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <FontAwesomeIcon icon={card.icon} className="size-6" />
                  </div>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {card.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <FontAwesomeIcon
                  icon={stat.icon}
                  className="mx-auto size-6 text-primary-foreground/60"
                />
                <div className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-primary-foreground/75">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
