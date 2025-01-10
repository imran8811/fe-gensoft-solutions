"use client";
import FooterComp from "@/components/shared/footer";
import GetInTouchComp from "@/components/shared/get-in-touch";
import HeaderComp from "@/components/shared/header";
import PagesBannerComp from "@/components/shared/pages-banner";
import ServiceCounter from "@/components/shared/service-counter";

export default function ContactPage() {
  return (
    <>
      <HeaderComp />
      <PagesBannerComp value="Contact us" />
      {/* <ServiceCounter /> */}
      <GetInTouchComp />
      <FooterComp />
    </>
  );
}
