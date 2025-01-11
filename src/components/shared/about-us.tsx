import Link from "next/link";

export default function AboutUsComp() {
  return (
    <>
      <div className="container-fluid py-5 my-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
              <div className="h-100 position-relative">
                <img src="img/about-1.jpg" className="img-fluid w-75 rounded" alt="" style={{ ["marginBottom"]: "25%" }} />
                <div className="position-absolute w-75" style={{ ["top"]: "25%", ["left"]: "25%" }}>
                  <img src="img/about-2.jpg" className="img-fluid w-100 rounded" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
              <h5 className="text-primary">About Us</h5>
              <h1 className="mb-4">About <span className="text-primary">GenSoft Solutions</span> And It's Innovative IT Solutions</h1>
              <p>Welcome to <strong className="text-primary">GenSoft Solutions</strong>, where we are all about making your digital dreams a reality! With 6 years of hands-on experience, we are not just another agency - we are your partners in success. Picture this: captivating websites that tell your story, eye-catching logos that speak volumes, and marketing strategies that get people talking (and clicking). And yes, we're not just about the tech</p>
              <p className="mb-4">We are about the heart and soul of your brand. So, what do you say? Let's chat over Zoom and see how we can bring your vision to life!</p>
              <Link href={'/about'} className="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
