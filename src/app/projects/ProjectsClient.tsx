"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBuilding,
  faIndustry,
  faBolt,
  faLightbulb,
  faSolarPanel,
  faArrowRight,
  faStar,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// ── Types ───────────────────────────────────────────────────────────
type Category = "residential" | "commercial" | "industrial";

interface Project {
  slug: string;
  title: string;
  description: string;
  icon: typeof faHouse;
  category: Category;
  gradient: string;
  image: string;
}

// ── Project data ────────────────────────────────────────────────────
const projects: Project[] = [
  // Residential
  {
    slug: "lakeside-home-rewire",
    title: "Lakeside Home Rewire",
    description: "Complete rewiring, 4,200 sq ft",
    icon: faHouse,
    category: "residential",
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.18 265), oklch(0.50 0.16 265))",
    image: "/images/projects/lakeside-home-rewire.svg",
  },
  {
    slug: "modern-kitchen-lighting",
    title: "Modern Kitchen Lighting",
    description: "Custom LED design",
    icon: faLightbulb,
    category: "residential",
    gradient:
      "linear-gradient(135deg, oklch(0.85 0.16 85), oklch(0.78 0.14 75))",
    image: "/images/projects/modern-kitchen-lighting.svg",
  },
  {
    slug: "smart-home-upgrade",
    title: "Smart Home Upgrade",
    description: "Full automation, 12 rooms",
    icon: faBolt,
    category: "residential",
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.18 265), oklch(0.50 0.16 265))",
    image: "/images/projects/smart-home-upgrade.svg",
  },
  // Commercial
  {
    slug: "downtown-office-build",
    title: "Downtown Office Build",
    description: "15,000 sq ft electrical",
    icon: faBuilding,
    category: "commercial",
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.18 265), oklch(0.50 0.16 265))",
    image: "/images/projects/downtown-office-build.svg",
  },
  {
    slug: "retail-center-power",
    title: "Retail Center Power",
    description: "8-unit complex",
    icon: faBuilding,
    category: "commercial",
    gradient:
      "linear-gradient(135deg, oklch(0.85 0.16 85), oklch(0.78 0.14 75))",
    image: "/images/projects/retail-center-power.svg",
  },
  {
    slug: "restaurant-renovation",
    title: "Restaurant Renovation",
    description: "Kitchen & dining lighting",
    icon: faBuilding,
    category: "commercial",
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.18 265), oklch(0.50 0.16 265))",
    image: "/images/projects/restaurant-renovation.svg",
  },
  // Industrial
  {
    slug: "factory-floor-power",
    title: "Factory Floor Power",
    description: "50,000 sq ft",
    icon: faIndustry,
    category: "industrial",
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.18 265), oklch(0.50 0.16 265))",
    image: "/images/projects/factory-floor-power.svg",
  },
  {
    slug: "warehouse-led-retrofit",
    title: "Warehouse LED Retrofit",
    description: "Energy upgrade",
    icon: faIndustry,
    category: "industrial",
    gradient:
      "linear-gradient(135deg, oklch(0.85 0.16 85), oklch(0.78 0.14 75))",
    image: "/images/projects/warehouse-led-retrofit.svg",
  },
  {
    slug: "solar-farm-connection",
    title: "Solar Farm Connection",
    description: "Grid-tie install",
    icon: faSolarPanel,
    category: "industrial",
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.18 265), oklch(0.50 0.16 265))",
    image: "/images/projects/solar-farm-connection.svg",
  },
];

// ── Category badge styling ──────────────────────────────────────────
const categoryStyles: Record<Category, string> = {
  residential: "bg-primary/90 text-primary-foreground",
  commercial: "bg-secondary text-secondary-foreground",
  industrial: "bg-foreground/80 text-background",
};

// ── Client component ────────────────────────────────────────────────
export default function ProjectsClient() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-hero-pattern py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong mx-auto max-w-2xl rounded-2xl p-8 text-center shadow-xl sm:p-12">
            <Badge variant="secondary" className="mb-5">
              <FontAwesomeIcon icon={faStar} className="size-3" />
              <span className="ml-1">Featured Work</span>
            </Badge>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Projects
            </h1>

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
              <span className="font-medium text-foreground">Projects</span>
            </nav>

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Explore our portfolio of residential, commercial, and industrial
              electrical projects. Every job is completed to the highest
              standards of safety and quality.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FILTER TABS + PROJECT GRID
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ── Tabs ── */}
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value)}
          >
            <div className="mb-10 flex justify-center">
              <TabsList variant="default">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="industrial">Industrial</TabsTrigger>
              </TabsList>
            </div>

            {/* ── All tabs share the same grid, filtered client-side ── */}
            <TabsContent value="all">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
            <TabsContent value="residential">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
            <TabsContent value="commercial">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
            <TabsContent value="industrial">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

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

// ── Project Grid Sub-component ──────────────────────────────────────
function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.slug} className="glass-card group overflow-hidden">
          {/* ── Project image ── */}
          <div className="relative h-48">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* Category badge — top-right */}
            <Badge
              className={`absolute right-2 top-2 shadow-md ${categoryStyles[project.category]}`}
            >
              {project.category.charAt(0).toUpperCase() +
                project.category.slice(1)}
            </Badge>
          </div>

          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View Project
              <FontAwesomeIcon icon={faArrowRight} className="size-3" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
