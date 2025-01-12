
export default function ServiceCounter() {
  return (
    <>
      <div className="container-fluid bg-secondary py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary col-2 text-end"><span className="counter-value">50</span>+</h1>
                <h5 className="text-white mt-1 col-10">Team member working across the globe</h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary col-2 text-end"><span className="counter-value">200</span>+</h1>
                <h5 className="text-white mt-1 col-10">Enterprise Solutions Developed</h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary col-2 text-end"><span className="counter-value">120</span></h1>
                <h5 className="text-white mt-1 col-10">Total clients who love <span className="text-primary">GenSoft Solutions</span></h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary col-2 text-end"><span className="counter-value">5</span></h1>
                <h5 className="text-white mt-1 col-10">Stars reviews given by satisfied clients</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
