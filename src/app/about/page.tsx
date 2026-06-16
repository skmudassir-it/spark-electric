import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faShieldHalved,
  faHeart,
  faLeaf,
  faUser,
  faAward,
  faHouse,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

/* ── Team data ── */
const teamMembers = [
  {
    name: "James Wilson",
    role: "Master Electrician / Founder",
    exp: "20+ years experience",
    bio: "Founded Spark Electric in 2005 with a vision to provide honest, high-quality electrical services. James oversees every major project and personally ensures our standards are met.",
  },
  {
    name: "Maria Santos",
    role: "Senior Electrician",
    exp: "15+ years experience",
    bio: "Maria specializes in residential wiring and smart home installations. Her attention to detail and commitment to safety make her a client favorite for home projects.",
  },
  {
    name: "David Chen",
    role: "Commercial Specialist",
    exp: "12+ years experience",
    bio: "David leads our commercial division, handling everything from office build-outs to industrial panel upgrades. His expertise in three-phase systems is unmatched.",
  },
  {
    name: "Aisha Johnson",
    role: "Project Manager",
    exp: "10+ years experience",
    bio: "Aisha keeps every project on track and on budget. From scheduling to permitting, she ensures a seamless experience for every Spark Electric client.",
  },
];

/* ── Certifications ── */
const certifications = [
  "Licensed Master Electrician",
  "OSHA Certified",
  "BBB Accredited (A+ Rating)",
  "NECA Member",
  "Energy Star Partner",
  "Fully Licensed & Insured",
];

/* ── Values ── */
const values = [
  {
    icon: faShieldHalved,
    title: "Safety First",
    description:
      "Every job begins and ends with safety. We exceed OSHA standards and maintain a 100% safety record across thousands of projects.",
  },
  {
    icon: faAward,
    title: "Quality Craftsmanship",
    description:
      "We use premium materials and proven techniques. Our work is guaranteed — we stand behind every wire, every panel, every connection.",
  },
  {
    icon: faHeart,
    title: "Customer Focus",
    description:
      "Your satisfaction drives everything we do. We listen, explain options clearly, and never leave until the job is done right.",
  },
  {
    icon: faLeaf,
    title: "Sustainability",
    description:
      "We champion energy-efficient solutions, from LED retrofits to solar-ready panel upgrades, helping you reduce your carbon footprint and save money.",
  },
];

/* ── Stats ── */
const stats = [
  { value: "18+", label: "Years in Business" },
  { value: "5,000+", label: "Projects Completed" },
  { value: "40+", label: "Team Members" },
  { value: "100%", label: "Safety Record" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero / Header ── */}
      <section className="bg-hero-pattern py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 text-center md:p-12">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Link
                href="/"
                className="flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <FontAwesomeIcon icon={faHouse} className="size-3.5" />
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">About</span>
            </div>

            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
              <FontAwesomeIcon icon={faBolt} className="size-6" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              About Spark Electric
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Powering homes and businesses with integrity, expertise, and a
              commitment to excellence since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12">
            <Badge variant="secondary" className="mb-4">
              Our Story
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Lighting the Way Since 2005
            </h2>
            <Separator className="my-6" />

            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Spark Electric was founded in 2005 by James Wilson, a master
                electrician who saw an opportunity to build an electrical
                services company that truly put customers first. What started as
                a one-man operation out of a small garage in Portland has grown
                into one of the region&apos;s most trusted electrical
                contractors.
              </p>
              <p>
                Over nearly two decades, we&apos;ve expanded from residential
                wiring into full-scale commercial, industrial, and emergency
                electrical services. Our team of over 40 licensed electricians
                and support staff brings unmatched expertise to every project —
                from simple outlet repairs to complex multi-building commercial
                installations.
              </p>
              <p>
                Our mission remains the same as day one: deliver safe, reliable,
                and innovative electrical solutions while treating every home and
                business like our own. We believe in transparent pricing, clear
                communication, and workmanship that exceeds code requirements.
              </p>
            </div>

            {/* Stats Row */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-primary md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet Our Team ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-3">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Skilled professionals dedicated to keeping your power on and your
              family safe.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="glass-card text-center">
                <CardHeader className="pb-3">
                  <div className="mx-auto mb-3 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FontAwesomeIcon icon={faUser} className="size-6" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                  <span className="text-xs text-muted-foreground">
                    {member.exp}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-3">
              Credentials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Certifications &amp; Accreditations
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              We hold the highest industry credentials so you can hire us with
              complete confidence.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <Card key={cert} className="glass-card">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                    <FontAwesomeIcon icon={faAward} className="size-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="size-3 text-primary"
                      />
                      <span className="text-sm font-medium text-foreground">
                        {cert}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-3">
              What Drives Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              The principles that guide every decision we make and every job we
              complete.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="glass-card">
                <CardHeader className="pb-2">
                  <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FontAwesomeIcon icon={value.icon} className="size-5" />
                  </div>
                  <CardTitle className="text-base">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-2xl p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Ready to Work With Portland&apos;s Most Trusted Electricians?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Whether it&apos;s a simple repair or a major installation, our
              team is ready to help. Get your free estimate today.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="shadow-md">
                  Get a Free Estimate
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-3.5" />
                </Button>
              </Link>
              <Link href="tel:+155****4567" className="inline-flex">
                <Button variant="outline" size="lg">
                  <FontAwesomeIcon icon={faBolt} className="mr-2 size-3.5" />
                  Call (555) 123-4567
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
