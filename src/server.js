const express = require("express");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");

const content = require("./data/content");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// Keamanan & performa
app.use(
  helmet({
    // Izinkan gambar/font eksternal (Unsplash & Google Fonts) yang dipakai di UI.
    contentSecurityPolicy: false,
  })
);
app.use(compression());

// Body parser untuk form kontak
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

// Pesan kontak disimpan sederhana di memori (demo). Ganti dengan DB/email di produksi.
const messages = [];

app.get("/", (req, res) => {
  res.render("index", { ...content, sent: req.query.sent === "1", error: null });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).render("index", {
      ...content,
      sent: false,
      error: "Mohon lengkapi nama, email, dan pesan.",
    });
  }

  messages.push({ name, email, message, at: new Date().toISOString() });
  console.log(`Pesan baru dari ${name} <${email}>`);

  // Redirect (PRG pattern) supaya refresh tidak mengirim ulang form.
  res.redirect("/?sent=1#contact");
});

// 404
app.use((req, res) => {
  res.status(404).render("404", { ...content });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Terjadi kesalahan pada server.");
});

app.listen(PORT, () => {
  console.log(`Website jalan di http://localhost:${PORT}`);
});
