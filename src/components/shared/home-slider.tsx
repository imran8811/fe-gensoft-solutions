import Link from "next/link";

export default function HomeSliderComp() {
  return (
    <>
      <div className="container-fluid px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src="img/carousel-1.jpg" className="img-fluid" alt="First slide" />
                <div className="carousel-caption">
                  <div className="container carousel-content">
                    <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                    <h1 className="text-white display-1 mb-4 animated fadeInRight">An Innovative IT Solutions Agency</h1>
                    <p className="mb-4 text-white fs-5 animated fadeInDown"><span className="text-info">GenSoft Solutions</span> is a full-service software house offering expert solutions in web development, security, digital marketing, mobile app development, and enterprise solutions.</p>
                    <div className="d-flex justify-content-center">
                      <Link href={"/about"} className="me-2 mb-3">
                        <button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button>
                      </Link>
                      <Link href={"/contact"} className="ms-2">
                        <button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
            <div className="carousel-item">
              <img src="img/carousel-2.jpg" className="img-fluid" alt="Second slide" />
                <div className="carousel-caption">
                  <div className="container carousel-content">
                    <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                    <h1 className="text-white display-1 mb-4 animated fadeInLeft">Quality Digital Services You Really Need!</h1>
                    <p className="mb-4 text-white fs-5 animated fadeInDown">From machine learning to automation, our AI services deliver intelligent, scalable solutions tailored to your needs.</p>
                    <div className="d-flex justify-content-center">
                      <Link href={"/about"} className="me-2 mb-3">
                        <button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button>
                      </Link>
                      <Link href={"/contact"} className="ms-2">
                        <button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
