"use client";
import Image from "next/image";
import Offers from "../../public/img/features/offers1.png";

const Offerarea = () => {
  return (
    <>
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">About Us</span>
                <h2>Welcome to Hotel Silver Moon, Sambalpur</h2>
                  <p>
                    Nestled near Gosala on NH-6, Hotel Silver Moon is Sambalpur’s premier destination for luxury, comfort, and hospitality. 
                    Our property features 25 elegantly designed rooms, including Royal Suites, Suites, Super Deluxe, Deluxe, and Standard categories—each thoughtfully crafted to ensure a seamless blend of relaxation and modern convenience. 
                    We take pride in offering top-tier amenities such as complimentary breakfast, high-speed Wi-Fi, a multi-cuisine restaurant, bar, club, swimming pool, and versatile banquet halls for every occasion.
                    <br /><br />
                    Whether you're a corporate traveler or a family on holiday, our commitment to impeccable service and refined experiences makes Hotel Silver Moon the ideal stay. 
                    Managed under the guidance of Mr. Pramod Kumar Jena (Managing Director), we go beyond expectations to create lasting memories for every guest.
                  </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <Image alt="" layout="responsive" src={Offers} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerarea;
