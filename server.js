
const express = require('express');
const mysql = require('mysql2');
const Path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.static(Path.join(__dirname, )));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bossmanj123',
    database: 'booking_db_pablo'
});

db.connect(err => {
    if (err) {
        console.log("DB connection failed:", err);
        return;
    }
    console.log("Connected to barber DB");
});

// Serve HTML
app.get('/', (req, res) => {
    res.sendFile(Path.join(__dirname, 'form.html'));
});

// Get all appointments
// app.get('/appointments', (req, res) => {
//     db.query('SELECT * FROM appointments', (err, results) => {
//         if (err) {
//             res.status(500).json({ error: 'DB error' });
//             return;
//         }
//         res.json(results);
//     });
// });

// Book an appointment
app.post('/book', (req, res) => {
    const { name, phone, time, serviceSelection, SelectBarber, email, notes } = req.body;

    if (!name || !phone || !time) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    const sql = 'INSERT INTO appointments (customer_name, phone_number, appontment_date, service, barber, email, notes) VALUES (?,?,?,?,?,?,?)';
    db.query(sql, [name, phone, time, serviceSelection, SelectBarber, email, notes], (err, result) => {
        if (err) {
            console.error('Error saving booking:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        res.send(`Booking confirmed for ${name} at ${time}`);
    });
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
