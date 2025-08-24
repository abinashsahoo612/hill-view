"use client";

import roomStyleAllBlogs from "@/components/data/room-style-all-blogs";
import Image from "next/image";
import Footer from "../footer/footer";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Link from "next/link";
import Sidebar from "../room-details/sidebar";
import HeaderOne from "../header/HeaderOne";
import SEO from "@/components/seo";

const Roomstyle = () => {
  return (
    <>
      <SEO pageTitle="Room & Banquet" />
      <HeaderOne />
      <BreadCrumb
        title="Room & Banquet"
        innerTitle="Room & Banquet"
        bgImage="/img/banner/img2.jpeg"
      />
      <div className="room__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 order-first order-lg-1 lg-mb-30">
              <div className="row justify-content-space-between">
                {Object.entries(roomStyleAllBlogs).map(([key, item]) => (
                  <div key={key} className="col-xl-3 col-md-3 mb-30">
                    <Link href={`/room-details/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
                      <div className="deluxe__two-item">
                        <div className="deluxe__two-item-image">
                          <Image
                            src={item.img.src}
                            alt={item.title}
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="deluxe__two-item-content">
                          {item.price && <span>Rs {item.price}/Night</span>}
                          <h4 style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {item.title}
                          </h4>
                          <p>{item.des}</p>
                          <div className="deluxe__two-item-content-meta">
                            <ul>
                              {item.bed && (
                                <li>
                                  <i className="fal fa-bed-alt"></i> ({item.bed})
                                  bed's
                                </li>
                              )}
                              {item.guest && (
                                <li>
                                  <i className="fal fa-users"></i> ({item.guest})
                                  Max Guest's
                                </li>
                              )}
                              {item.area && (
                                <li>
                                  <i className="fal fa-warehouse-alt"></i> (
                                  {item.area}) Area
                                </li>
                              )}
                              {item.maxCapacity && (
                                <li>
                                  <i className="fal fa-users"></i> (
                                  {item.maxCapacity}) Max Capacity
                                </li>
                              )}
                            </ul>
                          </div>
                          {/* <div className="deluxe__two-item-content-bottom">
                            <Link className="simple-btn" href="/room-details">
                              <i className="far fa-chevron-right"></i> Read More
                            </Link>
                            <p>
                              <i className="fas fa-star"></i>
                              <span>{item.star}</span>2k
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Roomstyle;
