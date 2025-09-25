import Link from "next/link";

const Roomarea = () => {
  return (
    <div className="room__area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="room__area-title">
              {/* <span className="subtitle__one">Our Features</span> */}
              <h2>Facilities & Amenities</h2>
              <p>
                At Hill View, we turn moments into memories with our premium
                services including AC and NON-AC rooms, room decoration and cake for honeymoon couple, birthdays and anniversaries with extra charge — all
                designed for your comfort and relaxation.
              </p>
              <div className="room__area-title-contact">
                <Link className="theme-btn" href="/contact">
                  Contact us<i className="fal fa-long-arrow-right"></i>
                </Link>
                {/* <div className="room__area-title-contact-icon">
                  <i className="fal fa-phone-alt"></i>
                </div>
                <div className="room__area-title-contact-content">
                  <span>
                    <a href="tel:+123(458)585568">+123 (458) 585 568</a>
                  </span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-xl-4 order-last order-lg-second">
            <div className="room__area-list">
              <div className="room__area-list-item">
                <div className="room__area-list-item-icon">
                  <img src="/img/icon/air-conditioner (1).png" alt="" />
                </div>
                <div className="room__area-list-item-content">
                <h5>Total Accommodation: 30 Rooms</h5>
                  <p>
                    16 standard rooms (AC & Non-AC).
                  </p>
                  <p>
                    8 Triple Occupancy Rooms (AC & Non-AC).
                  </p>
                  <p>
                    6 Quadruple Occupancy Rooms (AC & Non-AC).
                  </p>
                </div>
              </div>
              <div className="room__area-list-item">
                <div className="room__area-list-item-icon">
                  <img src="/img/icon/chef.png" alt="" />
                </div>
                <div className="room__area-list-item-content">
                <h5>Hill View's Kitchen</h5>
                  <p>
                    Enjoy delicious multi-cuisine meals from 07:30 AM to 11:00
                    PM at our in-house restaurant.
                  </p>
                </div>
              </div>
              {/* <div className="room__area-list-item">
                <div className="room__area-list-item-icon">
                  <img src="/img/icon/lounge.png" alt="" />
                </div>
                <div className="room__area-list-item-content">
                <h5>Madira Lounge</h5>
                  <p>
                    Relax and unwind with your favorite drinks between 11:30 AM
                    and 11:00 PM at our elegant lounge.
                  </p>
                </div>
              </div>
              <div className="room__area-list-item">
                <div className="room__area-list-item-icon">
                  <img src="/img/icon/wedding-rings.png" alt="" />
                </div>
                <div className="room__area-list-item-content">
                <h5>Weddings & Group Bookings</h5>
                  <p>
                    Host weddings, conferences, and special events in our
                    spacious banquet halls with up to 2000 pax capacity.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 xl-mb-30">
            <div className="room__area-list">
              <div className="room__area-list-item">
                <div className="room__area-list-item-icon">
                  <img src="/img/icon/room-service (1).png" alt="" />
                </div>
                <div className="room__area-list-item-content">
                <h5>Room Cleaning</h5>
                  <p>
                    As per guest requirement room cleaning facility available from
                    10:30 AM to 06:00 PM.
                  </p>
                </div>
              </div>
              {/* <div className="room__area-list-item">
                <div className="room__area-list-item-icon">
                  <img src="/img/icon/breakfast1.png" alt="" />
                </div>
                <div className="room__area-list-item-content">
                <h5>Complimentary Breakfast</h5>
                  <p>
                    Begin your day with a fulfilling breakfast served between 8:00 AM and 10:30 AM.
                  </p>
                </div>
              </div>
              <div className="room__area-list-item">
                <div className="room__area-list-item-icon">
                  <img src="/img/icon/swimming (1).png" alt="" />
                </div>
                <div className="room__area-list-item-content">
                <h5>Swimming Pool</h5>
                  <p>
                    Take a dip and refresh yourself. Pool open daily from 7:00 AM to 6:00 PM (costume compulsory).
                  </p>
                </div>
              </div> */}
              <div className="room__area-list-item">
                <div className="room__area-list-item-icon">
                  <img src="/img/icon/dependable.png" alt="" />
                </div>
                <div className="room__area-list-item-content">
                <h5>Safe & Secure Stay</h5>
                  <p>
                    Enjoy a worry-free experience — your comfort and safety is our priority throughout your stay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roomarea;
