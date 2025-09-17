import { pool } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
    const { name, email, phone } = req.body;
  if (!name || (!email && !phone))
    return res.status(400).json({ error: "Missing user data" });

  try {
    // try find by email
    const [rows] = await pool.query(
      "SELECT id FROM users WHERE email = ? OR phone = ? LIMIT 1",
      [email, phone]
    );
    if (rows.length) return res.json({ user_id: rows[0].id });

    const [result] = await pool.query(
      "INSERT INTO users (name, email, phone) VALUES (?, ?, ?)",
      [name, email, phone]
    );
    return res.json({ user_id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
