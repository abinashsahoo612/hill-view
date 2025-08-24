import Link from "next/link";

const Placearea = () => {
  return (
    <div className="place__area section-padding mt-35">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="place__area-image">
              <div className="row">
                <div className="col-6">
                  <div className="place__area-image-one">
                    <img src="/img/rooms/super-deluxe/img2.jpeg" alt="" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="place__area-image-two">
                    <img src="/img/rooms/super-deluxe/img1.jpeg
                    " alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 lg-mt-30">
            <div className="place__area-title">
              <span className="subtitle__one">Awesome Place</span>
              <h2>We're a unique place to Spend time</h2>
              <p>
              From vibrant evenings at the Silver Smog Hookah Bar to refreshing dips in our stunning poolside oasis, 
              Hotel Hill View is where modern comfort meets timeless elegance. 
              Whether you’re here for business or a relaxing getaway, every corner of our property is designed 
              to elevate your stay with unmatched hospitality and style.
              </p>
              <Link className="theme-btn" href="about">
                Read More<i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placearea;
