"use client";
import FooterComp from "@/components/shared/footer";
import HeaderComp from "@/components/shared/header";
import PagesBannerComp from "@/components/shared/pages-banner";
import ProjectsComp from "@/components/shared/projects";
import ServiceCounter from "@/components/shared/service-counter";

export default function ProjectsPage() {
  return (
    <>
      <HeaderComp />
      <PagesBannerComp value="Projects" />
      <ServiceCounter />
      <ProjectsComp />
      <FooterComp />
    </>
  );
}
