"use client";
import { useEffect, useState } from "react";
import jQuery from 'jquery';
import Header from "@/components/shared/header";
import FooterComp from "@/components/shared/footer";
import ServiceCounter from "@/components/shared/service-counter";
import TeamComp from "@/components/shared/team";
import TestimonialsComp from "@/components/shared/testimonials";
import BlogComp from "@/components/shared/blog";
import ProjectsComp from "@/components/shared/projects";
import ServicesComp from "@/components/shared/services";
import GetInTouchComp from "@/components/shared/get-in-touch";
import AboutUsComp from "@/components/shared/about-us";
import HomeSliderComp from "@/components/shared/home-slider";
declare global {
  interface Window {
      jQuery:any;
      $:any;
  }
}

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    window.jQuery = jQuery;
    window.$ = jQuery;
  }, [domLoaded])
  
  return (
    <>
    {domLoaded &&
      <>
        <Header />
        <HomeSliderComp />
        <ServiceCounter />
        <AboutUsComp />
        <ServicesComp />
        <ProjectsComp />
        <BlogComp />
        <TeamComp />
        <TestimonialsComp />
        <GetInTouchComp />
        <FooterComp />
      </>
    }
    </>
  );
}
