"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faHouse,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/* ── Contact sidebar info ── */
const contactDetails = [
  {
    icon: faPhone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+155****4567",
  },
  {
    icon: faEnvelope,
    label: "Email",
    value: "info@sparkelectric.com",
    href: "mailto:info@sparkelectric.com",
  },
  {
    icon: faLocationDot,
    label: "Address",
    value: "123 Main St, Portland, OR 97201",
  },
  {
    icon: faClock,
    label: "Business Hours",
    value: "Mon–Fri 7am–6pm",
    sub: "24/7 Emergency Service Available",
  },
];

/* ── Service options ── */
const serviceOptions = [
  "Residential",
  "Commercial",
  "Emergency",
  "EV Charger Installation",
  "Smart Home Wiring",
  "Other",
];

export default function ContactPage() {
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handled by Netlify or similar
  };

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
              <span className="text-foreground font-medium">Contact</span>
            </div>

            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
              <FontAwesomeIcon icon={faBolt} className="size-6" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Have a question or need electrical work? We&apos;re here to help.
              Reach out and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Form + Sidebar ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* ── Form (2/3 on desktop) ── */}
            <div className="glass-card p-6 md:p-8 lg:col-span-2">
              <Badge variant="secondary" className="mb-3">
                Get In Touch
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible. For emergencies, call us directly.
              </p>

              <Separator className="my-6" />

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                name="contact"
                method="POST"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full"
                    />
                  </div>

                  {/* Service Select */}
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium text-foreground"
                    >
                      Service Needed
                    </label>
                    <Select value={service} onValueChange={(v) => setService(v ?? "")}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Services</SelectLabel>
                          {serviceOptions.map((opt) => (
                            <SelectItem key={opt} value={opt.toLowerCase()}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or issue..."
                    rows={5}
                    required
                    className="w-full"
                  />
                </div>

                <Button type="submit" size="lg" className="shadow-md">
                  Send Message
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-3.5" />
                </Button>
              </form>
            </div>

            {/* ── Sidebar (1/3 on desktop) ── */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Contact Information
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Reach us by phone, email, or visit our office during business
                hours.
              </p>

              <Separator className="my-5" />

              <ul className="space-y-5">
                {contactDetails.map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="size-4"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">
                          {item.value}
                        </p>
                      )}
                      {item.sub && (
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {item.sub}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              {/* Emergency badge in sidebar */}
              <div className="rounded-xl bg-amber-50 p-4">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="size-4 text-amber-600"
                  />
                  <span className="text-sm font-semibold text-amber-800">
                    Emergency?
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-amber-700">
                  Call us 24/7 for emergency electrical repairs. Our on-call
                  team responds within 60 minutes.
                </p>
                <a
                  href="tel:+155****4567"
                  className="mt-2 inline-block text-sm font-bold text-amber-700 hover:text-amber-900"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Area Map ── */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FontAwesomeIcon icon={faLocationDot} className="size-4" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  Service Area
                </h2>
                <p className="text-sm text-muted-foreground">
                  Proudly serving Portland and the surrounding metro area
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative overflow-hidden rounded-xl">
              <div className="flex h-72 items-center justify-center bg-slate-100 sm:h-96">
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="mx-auto size-8 text-slate-300"
                  />
                  <p className="mt-3 text-sm font-medium text-slate-400">
                    Portland, OR Metropolitan Area
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Full interactive map coming soon
                  </p>
                </div>
              </div>

              {/* Service area badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Portland",
                  "Beaverton",
                  "Gresham",
                  "Hillsboro",
                  "Lake Oswego",
                  "Tigard",
                  "Milwaukie",
                  "Vancouver, WA",
                ].map((city) => (
                  <span
                    key={city}
                    className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency CTA Banner ── */}
      <section className="bg-amber-400 py-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/25 text-white shadow-lg">
              <FontAwesomeIcon icon={faPhone} className="size-6" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-900">
                24/7 Emergency Service
              </p>
              <p className="mt-1 text-3xl font-bold tracking-tight text-amber-950 sm:text-4xl">
                Need Help Now? Call (555) 123-4567
              </p>
              <p className="mt-2 text-sm text-amber-800">
                Our on-call electricians are ready — day or night, weekends and
                holidays included.
              </p>
            </div>
            <a href="tel:+155****4567" className="inline-flex shrink-0">
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
        </div>
      </section>
    </>
  );
}
