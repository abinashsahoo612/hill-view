import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { check_in_date, check_out_date } = body;

    if (!check_in_date || !check_out_date) {
      return NextResponse.json(
        { error: "Missing check_in_date or check_out_date" },
        { status: 400 }
      );
    }

    const [rows] = await pool.query(
      `SELECT rc.id AS category_id,
              rc.name,
              rc.price_per_night,
              rc.total_rooms,
              (rc.total_rooms - IFNULL(SUM(bi.quantity), 0)) AS available_rooms
       FROM room_categories rc
       LEFT JOIN booking_items bi ON rc.id = bi.category_id
       LEFT JOIN bookings b ON bi.booking_id = b.id
         AND b.status IN ('pending_payment','confirmed')
         AND (
             b.check_in_date < ?  -- booking starts before checkout
             AND b.check_out_date > ?  -- booking ends after checkin
         )
       GROUP BY rc.id`,
      [check_out_date, check_in_date]
    );

    return NextResponse.json(rows, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
