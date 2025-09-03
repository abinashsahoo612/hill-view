"use client";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";

const Bookings = () => {
  return (
    <>
        <HeaderOne />
        <BreadCrumb title="Bookings" innerTitle="Bookings" bgImage="/img/banner/Entrance12.png"/>
        <h3>Bookings</h3>
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Bookings;
