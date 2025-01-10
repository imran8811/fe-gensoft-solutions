"use client";
import AboutUsComp from "@/components/shared/about-us";
import FooterComp from "@/components/shared/footer";
import HeaderComp from "@/components/shared/header";
import ServiceCounter from "@/components/shared/service-counter";
import TeamComp from "@/components/shared/team";

export default function AboutPage() {
  return (
    <>
      <HeaderComp />
      <div className="container-fluid page-header py-5">
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>
      <ServiceCounter />
      <AboutUsComp />
      <TeamComp />
      <FooterComp />
    </>
  );
}
