import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export default function FooterComp() {
  return (
    <>
      <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
        <div className="container pt-5 pb-4">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="text-white fw-bold d-block">
                <h6 className="h3 text-secondary">Company Intro</h6>
                {/* <img src={'/img/gensoft-logo.png'} alt="GenSoft Solutions Logo" /> */}
              </div>
              <p className="mt-4 text-light"><span className="text-info">GenSoft Solutions</span> is a full-service software house offering expert solutions in web development, security, digital marketing, mobile app development, and enterprise solutions. Our team delivers custom, scalable, and secure software tailored to your business needs, ensuring enhanced performance, growth, and seamless user experiences. Let us help you achieve digital excellence.</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="h3 text-secondary">Short Link</h3>
              <div className="mt-4 d-flex flex-column short-link">
                <Link href={"/about"} className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>About us
                </Link>
                <Link href={"/services"} className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>Our Services
                </Link>
                <Link href={"/projects"} className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>Our Projects
                </Link>
                <Link href={"/blog"} className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>Latest Blog
                </Link>
                <Link href={"/contact"} className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>Contact us
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="h3 text-secondary">Help Link</h3>
              <div className="mt-4 d-flex flex-column help-link">
                <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Terms Of use</a>
                <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Privacy Policy</a>
                <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Helps</a>
                <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>FAQs</a>
                <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Contact</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="h3 text-secondary">Contact Us</h3>
              <div className="text-white mt-4 d-flex flex-column contact-link">
                <a href="https://maps.app.goo.gl/cQ6r9KhhGCsxfQB2A" className="pb-3 text-light border-bottom border-primary">
                  <i className="fas fa-map-marker-alt text-secondary me-2"></i> 23 Garden Town, Sher Shah Road, Multan, Pakistan
                </a>
                <a href="tel:+923019062877" className="py-3 text-light border-bottom border-primary">
                  <i className="fas fa-phone-alt text-secondary me-2"></i> +92 61 2166718
                </a>
                <a href="mailto:info@gensoft.solutions" className="py-3 text-light border-bottom border-primary"><i className="fas fa-envelope text-secondary me-2"></i> info@gensoft.solutions</a>
              </div>
              <div className="d-flex mt-3 hightech-link">
                <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-4">
                  <i className="fab fa-twitter text-primary"></i>
                </a>
                <a href="https://www.tiktok.com/@gensoft" className="btn-light nav-fill btn btn-square rounded-circle me-4">
                  <i className="fab fa-tiktok text-primary"></i>
                </a>
                <a href="https://www.linkedin.com/company/gensoft-solutions" className="btn-light nav-fill btn btn-square rounded-circle me-0">
                  <i className="fab fa-linkedin-in text-primary"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-secondary btn-square rounded-circle back-to-top"><i className="fa fa-arrow-up text-white"></i></a>
      <Script src="/lib/jquery.min.js" strategy="beforeInteractive"></Script>
      <Script src="/lib/owlcarousel/owl.carousel.min.js"></Script>
      <Script src="/lib/wow/wow.min.js"></Script>
      <Script src="/lib/easing/easing.min.js"></Script>
      <Script src="/lib/waypoints/waypoints.min.js"></Script>
      <Script src="/js/main.js" strategy="lazyOnload"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  );
}
