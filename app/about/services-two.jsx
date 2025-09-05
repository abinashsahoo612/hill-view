"use client";
import Image from "next/image";
import cleaning from "../../public/img/icon/cleaning-1.png";
import CarParking from "../../public/img/icon/car-parking.png";
import Locaion1 from "../../public/img/icon/location-1.png";
import Wifi from "../../public/img/icon/list-7.png";

const Servicestwo = () => {
  return (
    <>
      <div className="services__two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
              <div className="services__two-item">
                <span>01</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={cleaning} />
                </div>
                <div className="services__two-item-content">
                  <h4>Room Cleaning</h4>
                  <p>
                  Enjoy professional in-room service any time of the day, with same-day laundry, housekeeping, and more for your comfort.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>02</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={CarParking} />
                </div>
                <div className="services__two-item-content">
                  <h4>Car Parking</h4>
                  <p>
                  Hassle-free valet parking service available for all guests. Secure and convenient parking for cars and two-wheelers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>03</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={Wifi} />
                </div>
                <div className="services__two-item-content">
                  <h4>Free Wifi</h4>
                  <p>
                  Experience seamless connectivity with our complimentary high-speed internet, ensuring a truly relaxing and enjoyable hotel stay.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="services__two-item">
                <span>04</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={Locaion1} />
                </div>
                <div className="services__two-item-content">
                  <h4>PickUp & Drop</h4>
                  <p>
                  We provide reliable pickup and drop services for your travel convenience within Sambalpur and nearby transit points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicestwo;
