"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function HeaderComp() {

  return (
    <>
      <div id="spinner" className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" role="status"></div>
      </div>
      {/* <div className="container-fluid bg-dark py-2 d-none d-md-flex">
        <div className="container">
          <div className="d-flex justify-content-between topbar">
            <div className="top-info">
              <small className="me-3 text-white-50">
                <Link href={"/"}>
                  <i className="fas fa-map-marker-alt me-2 text-secondary"></i>Pakistan
                </Link>
              </small>
              <small className="me-3 text-white-50">
                <Link href="mailto:info@gensoft.solutions">
                  <i className="fas fa-envelope me-2 text-secondary"></i>info@gensoft.solutions
                </Link>
              </small>
            </div>
            <div id="note" className="text-secondary d-none d-xl-flex">
              <small>Note : We help you to Grow your Business</small>
            </div>
            <div className="top-link">
              <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle">
                <i className="fab fa-facebook-f text-primary"></i>
              </a>
              <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle">
                <i className="fab fa-twitter text-primary"></i>
              </a>
              <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle">
                <i className="fab fa-instagram text-primary"></i>
              </a>
              <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0">
                <i className="fab fa-linkedin-in text-primary"></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid bg-primary">
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg py-0">
            <Link href={"/"} className="navbar-brand">
              <h1 className="text-white fw-bold d-block">
                <Image src={'/img/gensoft-logo.jpg'} alt="GenSoft Solutions Logo" width={200} height={120} />
              </h1>
            </Link>
            <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
              <div className="navbar-nav ms-auto mx-xl-auto p-0">
                <Link href={"/"} className="nav-item nav-link active text-secondary">Home</Link>
                <Link href={"/about"} className="nav-item nav-link">About</Link>
                <Link href={"/services"} className="nav-item nav-link">Services</Link>
                <Link href="project.html" className="nav-item nav-link">Projects</Link>
                {/* <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu rounded">
                    <a href="blog.html" className="dropdown-item">Our Blog</a>
                    <a href="team.html" className="dropdown-item">Our Team</a>
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    <a href="404.html" className="dropdown-item">404 Page</a>
                  </div>
                </div> */}
                <Link href={"/contact"} className="nav-item nav-link">Contact</Link>
              </div>
            </div>
            <div className="d-none d-xl-flex flex-shirink-0">
              <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                <a href="" className="position-relative animated tada infinite">
                  <i className="fa fa-phone-alt text-white fa-2x"></i>
                  <div className="position-absolute" style={{['top' as any]: '-7px', ['left' as any]: '20px'}}>
                    <span><i className="fa fa-comment-dots text-secondary"></i></span>
                  </div>
                </a>
              </div>
              <div className="d-flex flex-column pe-4 border-end">
                <span className="text-white-50">Have any questions?</span>
                <span className="text-secondary">Call: +92 301 9062877</span>
              </div>
              <div className="d-flex align-items-center justify-content-center ms-4 ">
                <a href="#"><i className="bi bi-search text-white fa-2x"></i> </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
