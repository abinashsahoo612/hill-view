const Services = () => {
  return (
    <div className="services__two section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
            <div className="services__two-item">
              <span>01</span>
              <div className="services__two-item-icon">
                <img src="/img/icon/cleaning-1.png" alt="" />
              </div>
              <div className="services__two-item-content">
                <h4>Room Service</h4>
                <p>
                Room service from 7.30 to 11 pm, nextday laundry service and hot water from 4 am to 10 am
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
            <div className="services__two-item">
              <span>02</span>
              <div className="services__two-item-icon">
                <img src="/img/icon/car-parking.png" alt="" />
              </div>
              <div className="services__two-item-content">
                <h4>Car Parking</h4>
                <p>
                  Hassle-free valet parking service for all guests with secure and convenient car handling from arrival to departure.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
            <div className="services__two-item">
              <span>03</span>
              <div className="services__two-item-icon">
                <img src="/img/icon/list-7.png" alt="" />
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
                <img src="/img/icon/location-1.png" alt="" />
              </div>
              <div className="services__two-item-content">
                <h4>Travel Desk Details</h4>
                <p>
                  Avail reliable transportation services with our convenient travel details facility in and around Madikeri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
