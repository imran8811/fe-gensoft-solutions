export default function GetInTouchComp() {
  return (
    <>
      <div className="container-fluid py-5 mb-5">
        <div className="container">
          <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{['maxWidth' as any]: '600px'}}>
            <h1 className="text-primary">Get In Touch</h1>
            <p className="mb-3">Contact for any query</p>
          </div>
          <div className="contact-detail position-relative p-5">
            <div className="row g-5 mb-5 justify-content-center">
              <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".3s">
                <div className="d-flex bg-light p-3 rounded">
                  <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{['width']: '64px', ['height']: '64px'}}>
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h4 className="text-primary">Address</h4>
                    <a href="https://maps.app.goo.gl/cQ6r9KhhGCsxfQB2A" target="_blank" className="h5">23 Garden Town, Sher Shah Road, Multan, Pakistan</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".5s">
                <div className="d-flex bg-light p-3 rounded">
                  <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{['width']: '64px', ['height']: '64px'}}>
                    <i className="fa fa-phone text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h4 className="text-primary">Whatsapp / Call Us</h4>
                    <a className="h5" href="tel:+923019062877" target="_blank">+92 301 9062877</a><br /><br /><br />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s">
                <div className="d-flex bg-light p-3 rounded">
                  <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{['width']: '64px', ['height']: '64px'}}>
                    <i className="fa fa-envelope text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h4 className="text-primary">Email Us</h4>
                    <a className="h5" href="mailto:info@gensoft.solutions" target="_blank">info@gensoft.solutions</a><br /><br /><br />
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                <div className="p-5 h-100 rounded contact-map">
                  <iframe className="rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.7287958475736!2d71.40292769999999!3d30.1591689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b317fa0ab14b9%3A0x83b09052675714f8!2sGenSoft%20Solutions!5e0!3m2!1sen!2s!4v1736518306540!5m2!1sen!2s" style={{['border']: '0'}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                <div className="p-5 rounded contact-form">
                  <div className="mb-4">
                    <input type="text" className="form-control border-0 py-3" placeholder="Your Name" />
                  </div>
                  <div className="mb-4">
                    <input type="email" className="form-control border-0 py-3" placeholder="Your Email" />
                  </div>
                  <div className="mb-4">
                    <input type="text" className="form-control border-0 py-3" placeholder="Project" />
                  </div>
                  <div className="mb-4">
                    <textarea className="w-100 form-control border-0 py-3" rows={6} cols={10} placeholder="Message"></textarea>
                  </div>
                  <div className="text-start">
                    <button className="btn bg-primary text-white py-3 px-5" type="button">Send Message</button>
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
