"use client";
import Image from "next/image";
import Offers from "../../public/img/banner/img2.jpeg";

const Offerarea = () => {
  return (
    <>
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">About Us</span>
                <h2>Welcome to Hotel Hill View, Madikeri</h2>
                  <p>
                    Madikeri is a hill town in southern India. Framed by the Western Ghats mountain range, it’s known for the Raja’s Seat, a simple monument overlooking forests and rice paddies. In the center, the 17th-century Madikeri Fort features 2 stone elephants at the entrance. Nearby, the domed Omkareshwar Temple is dedicated to the Hindu deity Shiva. To the northwest, cascading Abbey Falls is surrounded by spice plantations.
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
