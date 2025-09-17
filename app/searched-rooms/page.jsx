"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Roomlist from "./room-list";

const SearchedRoomsPage = () => {
  const searchParams = useSearchParams();
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (checkIn && checkOut) {
      fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          check_in_date: checkIn,
          check_out_date: checkOut,
        }),
      })
        .then((res) => res.json())
        .then((data) => setRooms(data))
        .finally(() => setLoading(false));
    }
  }, [checkIn, checkOut]);

  return (
    <>
    <HeaderOne />
    <BreadCrumb title="Available Rooms" innerTitle="available-rooms" bgImage="/img/banner/img2.jpg"/>
    <Roomlist roomList={rooms}/>  
    <Footer/>
    </>
  );
};

export default SearchedRoomsPage;
