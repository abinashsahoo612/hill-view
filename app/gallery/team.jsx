import teams from "@/components/data/team";
import Image from "next/image";
import Social from "../socials/page";

const Team = () => {
  const teamItem = [
    'img/gallery/Croppedr-Building.webp',
    'img/gallery/AMT_9279 (1).webp',
    'img/gallery/AMT_59671F.webp',
    'img/gallery/AMT_5913.webp',
    'img/gallery/AMT_5946.webp',
    'img/gallery/AMT_9181.webp',
    'img/gallery/AMT_5898.webp',
    'img/gallery/AMT_5906.webp',
    'img/gallery/0L0A5649.webp',
    'img/gallery/DJI_0671.webp',
    'img/gallery/AMT_6041.webp',
    'img/gallery/AMT_60321 (1).webp',
    'img/gallery/AMT_9246 (2).webp',
    'img/gallery/AMT_9276-Recovered (1).webp',
    'img/gallery/DJI_0686 (1).webp',
  ]
  return (
    <div className="team__area section-padding">
      <div className="container">
        <div className="row mb-30">
          <div className="col-xl-12">
            <div className="team__area-title">
              <span className="subtitle__one">Our Gallery</span>
              <h2>Our Super Deluxe Rooms</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {teamItem?.map((data) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={data}>
                <div className="team__area-item">
                    <div className="team__area-item-image mt-30">
                      <img alt="" src={data} width={400} height={300} />
                    </div>
                </div>
              </div>
              // <div className="col-xl-4 col-lg-4 col-md-6">
              //   <div className="team__area-item">
              //       <div className="team__area-item-image mt-30" >
              //         <Image alt="" src={data.image1} width={400} height={300} />
              //       </div>
              //   </div>
              // </div>
              // <div className="col-xl-4 col-lg-4 col-md-6">
              //   <div className="team__area-item">
              //       <div className="team__area-item-image mt-30">
              //         <Image alt="" src={data.image2} width={400} height={300} />
              //       </div>
              //   </div>
              // </div> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
