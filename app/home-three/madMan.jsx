const MadMan = () => {
  return (
    <div className="section-padding pt-0">
      <div className="container">
        <div className="row justify-content-space-between" style={{justifyContent: "space-between"}}>
          <div className="col-xl-5 col-lg-5 col-md-5 xl-mb-30">
            <img src="/img/restaurant.jpg" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 lg-mb-30">
            {/* <span className="subtitle__one">Dine Like Royalty</span> */}
            <span className="subtitle__one">Hill View Restaurant</span>
            <h2>Coming Soon</h2>
            <p className="mb-2">
              Get ready to savor a feast fit for royalty at Hill View Restaurant, the upcoming heart of our luxury resort. Very soon, we’ll open the doors to a world where flavors, aromas, and experiences blend in perfect harmony. In the meantime, we are thoughtfully arranging meals from trusted outside partners to ensure your dining experience remains delightful until our restaurant opens
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadMan;
