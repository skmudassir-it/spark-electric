import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Spark Electric's portfolio of residential, commercial, and industrial electrical projects — from home rewiring to factory power installations.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
