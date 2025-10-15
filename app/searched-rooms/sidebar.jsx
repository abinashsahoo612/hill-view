"use client";
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";

const Sidebar = ({details,count,totalPrice,disableBook,checkIn, checkOut}) => {
    const { data: session } = useSession();
    const handleBooking = async () => {
        if (!session) {
        window.location.href = "/login"; 
        return;
        }
        try {
        const res = await fetch("/api/create-booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            user: session.user,
            items: details,            
            check_in_date: checkIn,
            check_out_date: checkOut,
            total_price: totalPrice,
            discount: 15
            }),
        });

        if (!res.ok) throw new Error("Booking failed");

        const data = await res.json();
        // console.log(data.payment_session_id);
        window.location.href = `https://payments-test.cashfree.com/order/#${data.payment_session_id}`;

        // const bookingId = data.booking_id;

        // // --- Redirect to Cashfree Hosted Checkout ---
        // const orderId = "ORD-" + bookingId + "-" + Date.now();
        // const discountedAmount = (totalPrice - totalPrice * 0.15).toFixed(2);
        // const appId = "CF10796964D3MT42JVGGUC73BSHEPG";
        // const returnUrl = `${process.env.NEXT_PUBLIC_RETURN_URL}?booking_id=${bookingId}`;

        // const baseUrl =
        //     process.env.NODE_ENV === "prod"
        //     ? "https://www.cashfree.com/pgappsdemo"
        //     : "https://test.cashfree.com/pgappsdemo";

        // const paymentUrl = `${baseUrl}?appId=${appId}&orderId=${orderId}&orderAmount=${discountedAmount}&orderCurrency=INR&orderNote=Hotel%20Booking&customerName=${encodeURIComponent(
        //     session.user.name
        // )}&customerEmail=${encodeURIComponent(
        //     session.user.email
        // )}&customerPhone=${encodeURIComponent(
        //     session.user.phone || "9999999999"
        // )}&returnUrl=${encodeURIComponent(returnUrl)}`;

        // window.location.href = paymentUrl;
        } catch (err) {
        console.error("Error:", err);
        alert("Something went wrong!");
        }
    };
    return (
        <div className="col-xl-4 col-lg-4 lg-mb-30">
            <div className="all__sidebar">
                <div className="all__sidebar-item">
                    {!disableBook && (
                        <div className="room__details">
                            <h5>Booking Details</h5>
                            <ol>
                                {details.map((room, index) => (
                                <li key={index}>
                                    <strong>{room.name}</strong> - {room.quantity} × RS {room.price} ={" "}
                                    <span>RS {room.quantity * room.price}</span>
                                </li>
                                ))}
                            </ol>
                        </div>
                    )}
                    <h5>Your Price</h5>
                    <div className="all__sidebar-item-price">
                        <ul>
                            <li><i className="fal fa-bed-alt"></i>Total ({count}) Rooms</li>
                            <li><i className="fal fa-wallet"></i>Total Price: RS {totalPrice}</li>
                            <li><i className="fal fa-badge-percent"></i>Discount 15%</li>
                        </ul>

                        {/* Show discount calculation */}
                        <h4>
                            <span style={{ textDecoration: "line-through", color: "gray", fontSize: "14px", marginRight: "8px" }}>
                            RS {totalPrice}
                            </span>
                            RS {(totalPrice - totalPrice * 0.15).toFixed(2)} 
                            
                        </h4>
                    </div>

                    <div className="mt-30">
                        <a
                          className={`theme-btn${disableBook ? ' disabled' : ''}`}
                          onClick={handleBooking}
                          style={{ cursor:"pointer",pointerEvents: disableBook ? 'none' : 'auto', opacity: disableBook ? 0.5 : 1 }}
                        >
                          Book Now<i className="fal fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
                {/* <div className="all__sidebar-item">
                    <h5>Category</h5>
                    <div className="all__sidebar-item-category">
                        <ul>
                            <li><Link href="/room-details"><i className="far fa-angle-double-right"></i>Luxury Room<span>(08)</span></Link></li>
                            <li><Link href="/room-details"><i className="far fa-angle-double-right"></i>Small Suite<span>(06)</span></Link></li>
                            <li><Link href="/room-details"><i className="far fa-angle-double-right"></i>Single<span>(05)</span></Link></li>
                            <li><Link href="/room-details"><i className="far fa-angle-double-right"></i>Family<span>(09)</span></Link></li>
                            <li><Link href="/room-details"><i className="far fa-angle-double-right"></i>Double Room<span>(03)</span></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="all__sidebar-item">
                    <h5>Booking Now</h5>
                    <div className="all__sidebar-item-booking">
                        <div className="all__sidebar-item-booking-item mb-10">
                            <select name="select">
                                <option value="1">Check In</option>
                                <option value="2">Check In</option>
                                <option value="3">Check In</option>
                                <option value="4">Check In</option>
                                <option value="5">Check In</option>
                            </select>
                        </div>
                        <div className="all__sidebar-item-booking-item mb-10">
                            <select name="select">
                                <option value="1">Check Out</option>
                                <option value="2">Check Out</option>
                                <option value="3">Check Out</option>
                                <option value="4">Check Out</option>
                                <option value="5">Check Out</option>
                            </select>
                        </div>
                        <div className="all__sidebar-item-booking-item mb-30">
                            <select name="select">
                                <option value="1">Room</option>
                                <option value="2">1 Room</option>
                                <option value="3">2 Room</option>
                                <option value="4">3 Room</option>
                                <option value="5">4 Room</option>
                            </select>
                        </div>
                        <Link className="theme-btn" href="#">Check<i className="fal fa-long-arrow-right"></i></Link>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Sidebar;