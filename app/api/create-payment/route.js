import { pool } from '../../lib/db';


export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    const { booking_id } = req.body;
    if (!booking_id) return res.status(400).json({ error: 'Missing booking_id' });


    try {
        // compute amount
        const [items] = await pool.query(`SELECT bi.quantity, rc.price_per_night FROM booking_items bi JOIN room_categories rc ON bi.category_id = rc.id WHERE bi.booking_id = ?`, [booking_id]);
        if (!items.length) return res.status(400).json({ error: 'No booking items' });


        let total = 0;
        for (const it of items) total += it.quantity * parseFloat(it.price_per_night || 0);


        // TODO: Call payment provider SDK to create an order. Example with Razorpay would go here.
        // For now, return a stub response to the frontend.


        return res.json({
            provider: process.env.PAYMENT_PROVIDER || 'razorpay',
            order_id: `ORDER-STUB-${booking_id}-${Date.now()}`,
            amount: total
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}