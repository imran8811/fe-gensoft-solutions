export default function ServicesComp() {
  return (
    <>
      <div className="container-fluid services py-5 mb-5">
        <div className="container">
          <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{['maxWidth' as any]: '600px'}}>
            <h5 className="text-primary">Our Services</h5>
            <h1>Services Built Specifically For Your Business</h1>
          </div>
          <div className="row g-5 services-inner">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className="fa fa-code fa-7x mb-4 text-primary"></i>
                    <h4 className="mb-3">UI/UX Design</h4>
                    <p className="mb-4">Specializing in graphic design, web design, UI/UX, and platforms like WordPress, Squarespace, Wix, and Shopify, we craft compelling digital experiences.</p>
                    <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className="fa fa-file-code fa-7x mb-4 text-primary"></i>
                    <h4 className="mb-3">Web Development</h4>
                    <p className="mb-4">Our passion is to create beautiful, fully responsive websites and Funnels. With a proven track record of crafting over 2000+ websites and funnels, we have emerged as a trusted partner for clients spanning the globe.</p>
                    <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className="fas fa-user-secret fa-7x mb-4 text-primary"></i>
                    <h4 className="mb-3">Web Security</h4>
                    <p className="mb-4">Our web security services encompass a range of practices, tools, and technologies designed to protect websites and web applications from cyber threats.</p>
                    <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className="fa fa-envelope-open fa-7x mb-4 text-primary"></i>
                    <h4 className="mb-3">Digital Marketing</h4>
                    <p className="mb-4">Our digital marketing services help businesses enhance their online presence and drive targeted traffic. We offer SEO, content marketing, social media management, paid ads, email marketing, and analytics.</p>
                    <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className="fas fa-laptop fa-7x mb-4 text-primary"></i>
                    <h4 className="mb-3">Mobile Apps</h4>
                    <p className="mb-4">Our mobile app development services create innovative, user-friendly apps for iOS and Android. We design, develop, and deploy custom solutions tailored to your business needs.</p>
                    <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className="fas fa-laptop fa-7x mb-4 text-primary"></i>
                    <h4 className="mb-3">Software Solutions</h4>
                    <p className="mb-4">Our custom-built systems integrate seamlessly with your business processes, offering scalability, security, and real-time insights. Whether for CRM, ERP, or business analytics.</p>
                    <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
