"use client";
import AboutUsComp from "@/components/shared/about-us";
import FooterComp from "@/components/shared/footer";
import HeaderComp from "@/components/shared/header";
import PagesBannerComp from "@/components/shared/pages-banner";
import ServiceCounter from "@/components/shared/service-counter";
import ServicesComp from "@/components/shared/services";
import TeamComp from "@/components/shared/team";

export default function ServicesPage() {
  return (
    <>
      <HeaderComp />
      <PagesBannerComp value="Services" />
      <ServiceCounter />
      <ServicesComp />
      <FooterComp />
    </>
  );
}
