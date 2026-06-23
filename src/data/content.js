// Semua konten website dipusatkan di sini supaya mudah diubah tanpa menyentuh HTML.
const year = new Date().getFullYear();

module.exports = {
  company: "PT. Karya Madina Jaya Group",
  shortName: "Karya Madina",
  tagline: "Solusi Konstruksi & Alat Berat",
  phone: "6285275509063", // WhatsApp utama
  phoneDisplay: "+62 852 7550 9063",
  phone2Display: "+62 822 7678 9522",
  email: "karyamadinajayagroup@gmail.com",
  instagram: "karyamadinajayagroup",
  instagramUrl: "https://instagram.com/karyamadinajayagroup",
  address: "Komplek Raja Batu Residence, Blok A No. 14, Mandailing Natal, Sumatera Utara 22912",
  year,

  description:
    "PT. Karya Madina Jaya Group adalah partner terpercaya penyedia jasa rental alat berat, transportasi, dan logistik di Sumatera dengan armada lengkap, operator berpengalaman, dan harga kompetitif.",

  social: [{ label: "Instagram", url: "https://instagram.com/karyamadinajayagroup" }],

  stats: [
    { value: 15, suffix: "+", label: "Tahun Pengalaman" },
    { value: 120, suffix: "+", label: "Armada Aktif" },
    { value: 500, suffix: "+", label: "Proyek Selesai" },
    { value: 100, suffix: "%", label: "Kepuasan Klien" },
  ],

  // Keunggulan perusahaan (ikon = nama Material Symbols)
  advantages: [
    { icon: "inventory_2", title: "Unit Lengkap", text: "Beragam jenis alat berat dan armada angkutan siap untuk segala kebutuhan proyek." },
    { icon: "map", title: "Jangkauan Luas", text: "Melayani pengiriman dan mobilisasi alat ke seluruh wilayah Sumatera." },
    { icon: "verified_user", title: "Profesional", text: "Operator bersertifikat dan tim yang berpengalaman menangani proyek besar." },
    { icon: "schedule", title: "Tepat Waktu", text: "Komitmen pada jadwal mobilisasi agar proyek Anda berjalan lancar." },
    { icon: "payments", title: "Harga Kompetitif", text: "Penawaran terbaik dengan transparansi biaya dan tanpa biaya tersembunyi." },
  ],

  // Section infrastruktur
  infra: {
    title: "Menggerakkan Ekonomi Melalui Infrastruktur",
    text: "Kami mendukung pembangunan infrastruktur di Sumatera dengan armada alat berat yang andal, standar keamanan tinggi, dan operator berpengalaman.",
    highlights: [
      { icon: "shield", title: "Sertifikasi Keamanan", text: "Setiap unit dan operasional mengikuti standar keselamatan kerja." },
      { icon: "engineering", title: "Operator Berpengalaman", text: "Ditangani operator bersertifikat dengan jam terbang tinggi." },
    ],
    badge: { value: "100+", label: "Armada Siap Jalan" },
  },

  services: [
    {
      icon: "agriculture",
      title: "Rental Excavator",
      text: "Penyewaan excavator berbagai kapasitas untuk penggalian, pembersihan lahan, dan pekerjaan sipil.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
      alt: "Excavator alat berat",
    },
    {
      icon: "local_shipping",
      title: "Rental Dump Truck",
      text: "Armada dump truck untuk pengangkutan material, tanah, dan kebutuhan logistik proyek.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
      alt: "Dump truck pengangkut material",
    },
    {
      icon: "fire_truck",
      title: "Angkutan Kargo",
      text: "Kendaraan angkutan kargo untuk distribusi barang dan material antar wilayah.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
      alt: "Truk angkutan kargo",
    },
    {
      icon: "groups",
      title: "Jasa Profesional",
      text: "Dukungan tim profesional untuk konsultasi, mobilisasi alat, dan manajemen proyek.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
      alt: "Tim profesional di lokasi proyek",
    },
  ],

  projects: [
    {
      title: "Mobilisasi Alat Berat",
      text: "Pengiriman excavator dan unit berat ke lokasi proyek.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
      alt: "Mobilisasi alat berat ke lokasi proyek",
    },
    {
      title: "Logistik Material",
      text: "Distribusi material proyek dengan armada dump truck.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
      alt: "Logistik dan distribusi material",
    },
    {
      title: "Pekerjaan Infrastruktur",
      text: "Dukungan alat berat untuk proyek infrastruktur.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
      alt: "Proyek infrastruktur dengan alat berat",
    },
  ],

  partners: [
    "PT. Pillar Cipta",
    "PT. Central Nusa",
    "PT. Harsa Prima",
    "PT. Freya First Indonesia",
  ],

  testimonials: [
    {
      name: "Budi Santoso",
      role: "Manajer Proyek",
      text: "Alat selalu datang tepat waktu dan kondisinya prima. Operatornya juga sangat profesional.",
    },
    {
      name: "Siti Rahma",
      role: "Kontraktor",
      text: "Harga kompetitif dan komunikasi jelas. Partner rental alat berat yang sangat bisa diandalkan.",
    },
    {
      name: "Andi Wijaya",
      role: "Site Manager",
      text: "Mobilisasi cepat ke lokasi yang jauh. Sangat membantu kelancaran proyek kami di Sumatera.",
    },
  ],

  faq: [
    {
      q: "Apakah bisa konsultasi kebutuhan alat berat dulu?",
      a: "Tentu. Kami menyediakan konsultasi gratis untuk menentukan jenis dan jumlah unit yang sesuai dengan proyek Anda.",
    },
    {
      q: "Area mana saja yang dilayani?",
      a: "Kami melayani mobilisasi alat berat dan logistik ke seluruh wilayah Sumatera. Hubungi kami untuk memastikan jangkauan ke lokasi Anda.",
    },
    {
      q: "Apakah sudah termasuk operator?",
      a: "Ya, penyewaan unit dapat disertai operator bersertifikat dan berpengalaman sesuai kesepakatan.",
    },
    {
      q: "Bagaimana sistem sewa dan pembayarannya?",
      a: "Sistem sewa fleksibel (harian/mingguan/bulanan) dengan pembayaran sesuai kontrak yang disepakati.",
    },
  ],
};
