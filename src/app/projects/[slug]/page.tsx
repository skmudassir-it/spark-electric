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
  faChevronRight,
  faCalendarCheck,
  faHouse,
  faBuilding,
  faIndustry,
  faBolt,
  faLightbulb,
  faSolarPanel,
  faUser,
  faMapMarkerAlt,
  faCalendarAlt,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

// ── Types ───────────────────────────────────────────────────────────

type Category = "residential" | "commercial" | "industrial";

interface ProjectData {
  title: string;
  category: Category;
  icon: typeof faHouse;
  gradient: string;
  client: string;
  location: string;
  duration: string;
  overview: string;
  scope: string[];
  results: string;
}

// ── Project data ────────────────────────────────────────────────────

const projects: Record<string, ProjectData> = {
  "lakeside-home-rewire": {
    title: "Lakeside Home Rewire",
    category: "residential",
    icon: faHouse,
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.18 265), oklch(0.50 0.16 265))",
    client: "Wilson Family",
    location: "Lake Oswego, OR",
    duration: "3 weeks",
    overview:
      "Complete rewiring of a 4,200 sq ft lakeside home built in 1972. The existing aluminum wiring posed a significant fire hazard. We replaced all wiring with modern copper, upgraded the main panel from 150A to 400A, installed whole-home surge protection, and added dedicated circuits for a home theater, workshop, and EV charging station.",
    scope: [
      "Full aluminum-to-copper rewiring",
      "150A → 400A panel upgrade",
      "Whole-home surge protection",
      "42 new dedicated circuits",
      "Smart home pre-wiring throughout",
    ],
    results:
      "The home is now fully code-compliant with zero electrical issues. The homeowners report a 30% reduction in their energy bills thanks to more efficient circuit distribution. The property value increased significantly with the modern electrical infrastructure.",
  },
  "modern-kitchen-lighting": {
    title: "Modern Kitchen Lighting",
    category: "residential",
    icon: faLightbulb,
    gradient:
      "linear-gradient(135deg, oklch(0.85 0.16 85), oklch(0.78 0.14 75))",
    client: "Chen Residence",
    location: "Portland, OR",
    duration: "5 days",
    overview:
      "Custom LED lighting design and installation for a high-end kitchen renovation. We installed layered lighting including recessed ceiling lights, under-cabinet LED strips, pendant lights over the island, and toe-kick accent lighting — all controllable via a smart home system.",
    scope: [
      "12 recessed LED fixtures",
      "Under-cabinet LED strip installation",
      "3 designer pendant lights",
      "Smart dimmer switches throughout",
      "Toe-kick accent lighting",
    ],
    results:
      "The kitchen now features 5 distinct lighting zones, each independently controllable. The LED system uses 75% less energy than the previous fluorescent setup while providing superior light quality.",
  },
  "smart-home-upgrade": {
    title: "Smart Home Upgrade",
    category: "residential",
    icon: faBolt,
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.18 265), oklch(0.50 0.16 265))",
    client: "Thompson Family",
    location: "Beaverton, OR",
    duration: "2 weeks",
    overview:
      "Full smart home automation system for a 12-room residence. We installed smart switches, automated blinds, integrated security cameras, doorbell cameras, smart thermostats, whole-home audio wiring, and centralized control panels — all connected through a single app with voice control.",
    scope: [
      "Smart switches in all 12 rooms",
      "Automated blind motors (8 windows)",
      "4 exterior security cameras",
      "Video doorbell & smart lock",
      "Whole-home audio pre-wire",
      "Centralized control hub",
    ],
    results:
      "The family now controls their entire home from their phones or by voice. Energy monitoring shows a 25% reduction in electricity usage through automated scheduling of lights, climate, and blinds.",
  },
  "downtown-office-build": {
    title: "Downtown Office Build",
    category: "commercial",
    icon: faBuilding,
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.18 265), oklch(0.50 0.16 265))",
    client: "TechStart Inc.",
    location: "Portland, OR",
    duration: "6 weeks",
    overview:
      "Complete electrical infrastructure for a 15,000 sq ft tech office build-out. We designed and installed the main electrical service, distributed power across 4 floors, set up server room power with redundant circuits and UPS backup, and installed energy-efficient LED lighting with occupancy sensors throughout.",
    scope: [
      "800A main service installation",
      "Power distribution across 4 floors",
      "Server room with redundant 208V circuits",
      "LED lighting with occupancy sensors",
      "Emergency backup generator tie-in",
    ],
    results:
      "The office operates with 40% lower energy consumption than comparable buildings in the area. The server room achieved Tier II reliability standards. The project was completed on time and under budget.",
  },
  "retail-center-power": {
    title: "Retail Center Power",
    category: "commercial",
    icon: faBuilding,
    gradient:
      "linear-gradient(135deg, oklch(0.85 0.16 85), oklch(0.78 0.14 75))",
    client: "Meridian Properties",
    location: "Tigard, OR",
    duration: "8 weeks",
    overview:
      "Electrical installation for a new 8-unit retail complex. We handled everything from underground service entrance to individual tenant metering, common area lighting, parking lot illumination, and signage power — coordinating closely with the general contractor to stay on schedule.",
    scope: [
      "Underground service entrance (1200A)",
      "Individual tenant metering (8 units)",
      "Common area & parking lot lighting",
      "LED signage power infrastructure",
      "Fire alarm system wiring",
    ],
    results:
      "All 8 units were fully powered and tenant-ready on schedule. The individual metering system allows each tenant to manage their own energy costs independently.",
  },
  "restaurant-renovation": {
    title: "Restaurant Renovation",
    category: "commercial",
    icon: faBuilding,
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.18 265), oklch(0.50 0.16 265))",
    client: "Bella's Italian",
    location: "Portland, OR",
    duration: "4 weeks",
    overview:
      "Full electrical renovation for a 120-seat Italian restaurant. We installed commercial kitchen power with dedicated circuits for ovens, fryers, and refrigeration, designed ambient dining room lighting, and set up the bar area with accent lighting and audio system wiring.",
    scope: [
      "Commercial kitchen power (12 dedicated circuits)",
      "Dining room ambient & accent lighting",
      "Bar area lighting & audio wiring",
      "Exhaust hood & fire suppression electrical",
      "Outdoor patio lighting & heating",
    ],
    results:
      "The restaurant passed health and fire inspections on the first attempt. The layered lighting design received compliments from food critics. Energy-efficient equipment choices reduced monthly electrical costs by 35% compared to the previous setup.",
  },
  "factory-floor-power": {
    title: "Factory Floor Power",
    category: "industrial",
    icon: faIndustry,
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.18 265), oklch(0.50 0.16 265))",
    client: "Precision Manufacturing Corp",
    location: "Gresham, OR",
    duration: "10 weeks",
    overview:
      "Heavy industrial electrical installation for a 50,000 sq ft manufacturing facility. We installed 480V 3-phase power distribution, motor control centers, overhead busbar systems, machine-specific drops, and comprehensive safety systems including emergency shutoffs and arc flash protection.",
    scope: [
      "480V 3-phase main distribution",
      "Motor control centers (MCC)",
      "Overhead busbar system",
      "150+ machine power drops",
      "Emergency shutoff & arc flash protection",
    ],
    results:
      "Zero unplanned downtime in the first 6 months of operation. The electrical infrastructure supports expansion to 3x current capacity. Full OSHA and NFPA 70E compliance achieved.",
  },
  "warehouse-led-retrofit": {
    title: "Warehouse LED Retrofit",
    category: "industrial",
    icon: faIndustry,
    gradient:
      "linear-gradient(135deg, oklch(0.85 0.16 85), oklch(0.78 0.14 75))",
    client: "Pacific Logistics",
    location: "Hillsboro, OR",
    duration: "3 weeks",
    overview:
      "Complete LED lighting retrofit for a 200,000 sq ft distribution warehouse. We replaced 500+ metal halide fixtures with high-bay LED units, installed motion sensors for aisle-based occupancy detection, and set up a centralized lighting control system that reduced energy consumption dramatically.",
    scope: [
      "500+ metal halide → LED fixture replacement",
      "Motion & occupancy sensor installation",
      "Centralized lighting control system",
      "Emergency egress lighting upgrade",
      "Loading dock area illumination",
    ],
    results:
      "Energy consumption for lighting dropped by 72%, saving approximately $48,000 annually. The improved light quality increased picking accuracy by 15%. ROI was achieved in just 14 months.",
  },
  "solar-farm-connection": {
    title: "Solar Farm Connection",
    category: "industrial",
    icon: faSolarPanel,
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.18 265), oklch(0.50 0.16 265))",
    client: "Green Energy Partners",
    location: "Woodburn, OR",
    duration: "12 weeks",
    overview:
      "Grid-tie interconnection for a 5MW solar farm. We engineered and installed the medium-voltage switchgear, step-up transformers, protective relaying, and SCADA monitoring system — connecting the solar array to the utility grid through a dedicated substation.",
    scope: [
      "5MW grid-tie interconnection",
      "Medium-voltage switchgear installation",
      "Step-up transformer setup",
      "Protective relaying & SCADA",
      "Utility coordination & commissioning",
    ],
    results:
      "The solar farm now exports 5MW of clean energy to the grid, powering approximately 750 homes. Interconnection was completed 2 weeks ahead of schedule. Zero safety incidents throughout the 12-week installation.",
  },
};

const allSlugs = Object.keys(projects);

// ── Category badge styling ──────────────────────────────────────────

const categoryStyles: Record<Category, string> = {
  residential: "bg-primary/90 text-primary-foreground",
  commercial: "bg-secondary text-secondary-foreground",
  industrial: "bg-foreground/80 text-background",
};

// ── Related projects (by category, excluding self) ──────────────────

function getRelatedProjects(currentSlug: string, category: Category): string[] {
  return allSlugs.filter(
    (slug) => slug !== currentSlug && projects[slug].category === category
  );
}

// ── Detail table icon mapping ───────────────────────────────────────

const detailFields = [
  { label: "Client", icon: faUser, key: "client" as const },
  { label: "Location", icon: faMapMarkerAlt, key: "location" as const },
  { label: "Duration", icon: faCalendarAlt, key: "duration" as const },
  { label: "Category", icon: faTag, key: "category" as const },
];

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
  const project = projects[slug];
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: project.title,
    description: project.overview.slice(0, 160),
  };
}

// ── Page component ──────────────────────────────────────────────────

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-hero-pattern py-20">
        <div className="glass-strong mx-auto max-w-md rounded-2xl p-10 text-center shadow-xl">
          <h1 className="text-2xl font-bold text-foreground">
            Project Not Found
          </h1>
          <p className="mt-3 text-muted-foreground">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <div className="mt-6">
            <Link href="/projects" className="inline-flex">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedSlugs = getRelatedProjects(slug, project.category);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          HERO — Gradient banner with icon
      ═══════════════════════════════════════════════════════════ */}
      <section
        className="relative flex items-center justify-center py-24 sm:py-32"
        style={{ background: project.gradient }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          {/* Icon */}
          <FontAwesomeIcon
            icon={project.icon}
            className="mx-auto size-20 text-white/50 drop-shadow-lg sm:size-24"
          />

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          {/* Breadcrumb */}
          <nav
            className="mt-4 flex items-center justify-center gap-2 text-sm text-white/80"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="size-3" />
            <Link
              href="/projects"
              className="transition-colors hover:text-white"
            >
              Projects
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="size-3" />
            <span className="font-medium text-white">{project.title}</span>
          </nav>

          {/* Category badge */}
          <Badge
            className={`mt-5 shadow-md ${categoryStyles[project.category]}`}
          >
            {project.category.charAt(0).toUpperCase() +
              project.category.slice(1)}
          </Badge>
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
                  Project Overview
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {project.overview}
                </p>
              </div>

              {/* Scope of Work */}
              <div className="glass-card p-6 sm:p-8">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Scope of Work
                </h2>
                <ul className="mt-5 space-y-3">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                        <FontAwesomeIcon icon={faCheck} className="size-3.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="glass-card p-6 sm:p-8">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Results &amp; Outcome
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {project.results}
                </p>
              </div>
            </div>

            {/* ── Sidebar (1/3) ── */}
            <div className="space-y-6">
              {/* Key Details Table */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  Key Details
                </h3>
                <Separator className="my-4" />
                <dl className="space-y-4">
                  {detailFields.map((field) => {
                    const value =
                      field.key === "category"
                        ? project.category.charAt(0).toUpperCase() +
                          project.category.slice(1)
                        : project[field.key];
                    return (
                      <div key={field.key} className="flex items-start gap-3">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <FontAwesomeIcon
                            icon={field.icon}
                            className="size-3.5"
                          />
                        </div>
                        <div className="min-w-0">
                          <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {field.label}
                          </dt>
                          <dd className="text-sm font-medium text-foreground">
                            {value}
                          </dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </div>

              {/* CTA */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  Have a Similar Project?
                </h3>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  Let&apos;s discuss your project. Get a free, no-obligation
                  estimate from our licensed electricians.
                </p>
                <div className="mt-4">
                  <Link href="/contact" className="inline-flex w-full">
                    <Button className="w-full" size="lg">
                      <FontAwesomeIcon
                        icon={faCalendarCheck}
                        className="mr-2 size-4"
                      />
                      Start Your Project
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 size-4"
                      />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RELATED PROJECTS
      ═══════════════════════════════════════════════════════════ */}
      {relatedSlugs.length > 0 && (
        <section className="bg-muted/40 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Related Projects
              </h2>
              <p className="mt-3 text-muted-foreground">
                Explore more {project.category} projects from our portfolio.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedSlugs.map((relatedSlug) => {
                const related = projects[relatedSlug];
                if (!related) return null;
                return (
                  <Link
                    key={relatedSlug}
                    href={`/projects/${relatedSlug}`}
                    className="group"
                  >
                    <Card className="glass-card h-full overflow-hidden transition-shadow hover:shadow-lg">
                      {/* Mini gradient banner */}
                      <div
                        className="relative flex h-32 items-center justify-center"
                        style={{ background: related.gradient }}
                      >
                        <FontAwesomeIcon
                          icon={related.icon}
                          className="size-10 text-white/50 drop-shadow-lg"
                        />
                      </div>

                      <CardHeader>
                        <CardTitle>{related.title}</CardTitle>
                        <CardDescription>
                          {related.client} &middot; {related.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                          View Project
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
              Have a Project in Mind?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
              Let&apos;s bring your vision to life. Get a free, no-obligation
              estimate from our licensed electricians.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2"
              >
                <Button size="lg">
                  Start Your Project
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
