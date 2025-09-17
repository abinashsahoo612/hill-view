"use client";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "./sidebar";

const Roomlist = ({roomList}) => {
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalprice] = useState(0);
    const increase = () => {
        setCount((prev) => {
        const newVal = Math.min(prev + 1, 10);
        // onChange(newVal);
        return newVal;
        });
        // setTotalprice();
    };

    const decrease = () => {
        setCount((prev) => {
        const newVal = Math.max(prev - 1, 1);
        // onChange(newVal);
        return newVal;
        });
    };
//   const roomList = Object.values(roomStyleAllBlogs).slice(0, 3);
  return (
    <div className="room__list section-padding">
      <div className="container">
        <div className="row">
          <Sidebar count={count} totalPrice={totalPrice}/>
          <div className="col-xl-9 order-first order-xl-1 xl-mb-30">
            {roomList.map((item, index) => (
              <div key={index} className="room__list-item">
                <div className="room__list-item-left">
                  <div className="room__list-item-image">
                    <img src="/img/hotel/hotel-11.jpg" alt="image" style={{width:"100%",objectFit:"cover"}}/>
                  </div>
                </div>
                <div className="room__list-item-right">
                  <div className="room__list-item-right-content">
                    <h4>
                      <Link href="/room-details">{item.name}</Link>
                    </h4>
                    {/* <p>{item.des}</p> */}
                    <ul>
                      {/* <li>
                        <i className="fal fa-bed-alt"></i>({item.bed}) bed's
                      </li>
                      <li>
                        <i className="fal fa-users"></i>({item.guest}) Guest's
                      </li> */}
                      <li>
                        <i className="fal fa-bed-alt"></i>({item.available_rooms}) Rooms available
                      </li>
                    </ul>
                  </div>
                  <div className="room__list-item-right-meta">
                    <div className="room__list-item-right-meta-top">
                      <span>Rs {item.price_per_night}+TAX/Night</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <button
                            type="button"
                            onClick={decrease}
                            style={{
                            width: "30px",
                            height: "50px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            }}
                        >
                            −
                        </button>

                        <input
                            type="number"
                            readOnly
                            value={count}
                            style={{
                            width: "50px",
                            textAlign: "center",
                            fontSize: "16px",
                            borderRadius: "4px",
                            }}
                        />

                        <button
                            type="button"
                            onClick={increase}
                            style={{
                            width: "30px",
                            height: "50px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            }}
                        >
                            +
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roomlist;
