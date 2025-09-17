import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { user_id, check_in_date, check_out_date, items } = body;

  if (!user_id || !check_in_date || !check_out_date || !items || !items.length) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    // Set payment expiration timeout
    const expiresAt = new Date(
      Date.now() +
        (parseInt(process.env.PAYMENT_TIMEOUT_MINUTES || "15", 10) * 60 * 1000)
    );

    const [result] = await conn.query(
      `INSERT INTO bookings 
        (user_id, check_in_date, check_out_date, status, payment_status, expires_at, created_at)
       VALUES (?, ?, ?, 'pending_payment', 'pending', ?, NOW())`,
      [user_id, check_in_date, check_out_date, expiresAt]
    );

    const bookingId = result.insertId;

    // Insert booking items
    for (const it of items) {
      await conn.query(
        `INSERT INTO booking_items (booking_id, category_id, quantity) VALUES (?, ?, ?)`,
        [bookingId, it.category_id, it.quantity]
      );
    }

    await conn.commit();
    return NextResponse.json({ booking_id: bookingId }, { status: 201 });
  } catch (err) {
    await conn.rollback();
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    conn.release();
  }
}
