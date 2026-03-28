const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// IP VM DI GCP
const db = mysql.createConnection({
  host: '34.172.125.132',
  user: 'admin',
  password: '12345678',
  database: 'notes_db'
});

// KONEKSI
db.connect(err => {
  if (err) {
    console.error('DB error:', err);
  } else {
    console.log('Connected ke database GCP 🔥');
  }
});


// CRUD
// GET 
app.get('/notes', (req, res) => {
  db.query('SELECT * FROM notes', (err, result) => {
    res.json(result);
  });
});

// POST 
app.post('/notes', (req, res) => {
  const { judul, isi } = req.body;

  db.query(
    'INSERT INTO notes (judul, isi) VALUES (?, ?)',
    [judul, isi],
    () => res.send('Note ditambah')
  );
});

// PUT/EDIT
app.put('/notes/:id', (req, res) => {
  const { judul, isi } = req.body;

  db.query(
    'UPDATE notes SET judul=?, isi=? WHERE id=?',
    [judul, isi, req.params.id],
    () => res.send('Note diupdate')
  );
});

// DELETE 
app.delete('/notes/:id', (req, res) => {
  db.query(
    'DELETE FROM notes WHERE id=?',
    [req.params.id],
    () => res.send('Note dihapus')
  );
});

// SERVER JALAN
app.listen(3000, () => {
  console.log('Server jalan di http://localhost:3000 🔥');
});