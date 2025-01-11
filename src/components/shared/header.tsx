"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderComp() {
  const pathName = usePathname();
  return (
    <>
      {/* <div id="spinner" className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" role="status"></div>
      </div> */}
      <div className="container-fluid bg-dark py-2 d-none d-md-flex">
        <div className="container">
          <div className="d-flex justify-content-between topbar">
            <div className="top-info">
              <small className="me-3 text-white-50">
                <Link href="https://maps.app.goo.gl/cQ6r9KhhGCsxfQB2A" target="_blank" className="text-white">
                  <i className="fas fa-map-marker-alt me-2 text-primary"></i>Pakistan
                </Link>
              </small>
              <small className="me-3 text-white-50">
                <Link href="mailto:info@gensoft.solutions" className="text-white">
                  <i className="fas fa-envelope me-2 text-primary"></i>info@gensoft.solutions
                </Link>
              </small>
            </div>
            <div id="note" className="text-secondary d-none d-xl-flex">
              <small>Note : We help you to Grow your Business</small>
            </div>
            <div className="top-link">
              <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle" target="_blank">
                <i className="fab fa-twitter text-primary"></i>
              </a>
              <a href="https://www.tiktok.com/@gensoft" className="bg-light nav-fill btn btn-sm-square rounded-circle" target="_blank">
                <i className="fab fa-tiktok text-primary"></i>
              </a>
              <a href="https://www.linkedin.com/company/gensoft-solutions" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0" target="_blank">
                <i className="fab fa-linkedin-in text-primary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary">
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg py-0">
            <Link href={"/"} className="navbar-brand">
              <h1 className="text-white fw-bold d-block">
                <img src={'/img/gensoft-logo.png'} alt="GenSoft Solutions Logo" />
              </h1>
            </Link>
            <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
              <div className="navbar-nav ms-auto mx-xl-auto p-0">
                <Link href={"/"} className={pathName === '/'? 'nav-item nav-link active text-secondary': 'nav-item nav-link'}>Home</Link>
                <Link href={"/about"} className={pathName === '/about'? 'nav-item nav-link active text-secondary': 'nav-item nav-link'}>About</Link>
                <Link href={"/services"} className={pathName === '/services'? 'nav-item nav-link active text-secondary': 'nav-item nav-link'}>Services</Link>
                <Link href={"/projects"} className={pathName === '/projects'? 'nav-item nav-link active text-secondary': 'nav-item nav-link'}>Projects</Link>
                <Link href={"/blog"} className={pathName === '/blog'? 'nav-item nav-link active text-secondary': 'nav-item nav-link'}>Blog</Link>
                <Link href={"/contact"} className={pathName === '/contact'? 'nav-item nav-link active text-secondary': 'nav-item nav-link'}>Contact</Link>
                {/* <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu rounded">
                    <a href="blog.html" className="dropdown-item">Our Blog</a>
                    <a href="team.html" className="dropdown-item">Our Team</a>
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    <a href="404.html" className="dropdown-item">404 Page</a>
                  </div>
                </div> */}
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
