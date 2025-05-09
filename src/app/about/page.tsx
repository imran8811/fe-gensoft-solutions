"use client";
import AboutUsComp from "@/components/shared/about-us";
import FooterComp from "@/components/shared/footer";
import HeaderComp from "@/components/shared/header";
import PagesBannerComp from "@/components/shared/pages-banner";
import ServiceCounter from "@/components/shared/service-counter";
import TeamComp from "@/components/shared/team";

export default function AboutPage() {
  return (
    <>
      <HeaderComp />
      <PagesBannerComp value="About" />
      <ServiceCounter />
      <AboutUsComp />
      <TeamComp />
      <FooterComp />
    </>
  );
}
