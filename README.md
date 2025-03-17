# Lebaran-2025

Aplikasi ucapan Lebaran interaktif dengan animasi teks yang menarik dan fitur berbagi ke WhatsApp.

## Fitur

- **Animasi Teks Interaktif**: Menggunakan berbagai animasi teks dari [Moving Letters](https://tobiasahlin.com/moving-letters/) untuk membuat ucapan Lebaran yang menarik.
- **Efek Mengetik**: Pesan ucapan ditampilkan dengan efek mengetik yang realistis.
- **Animasi Lentera dan Kembang Api**: Efek visual yang menarik untuk merayakan Lebaran.
- **Musik Latar**: Opsi untuk memutar musik latar yang sesuai dengan tema Lebaran.
- **Berbagi ke WhatsApp**: Fitur untuk membalas ucapan dan membagikannya melalui WhatsApp.
- **Responsif**: Tampilan yang responsif untuk berbagai ukuran layar.

## Penggunaan

1. **Clone Repository**:
   ```bash
   git clone https://github.com/username/lebaran-2025.git
   cd lebaran-2025
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```

4. **Buka di Browser**:
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Kustomisasi

### Mengganti Foto Profil

1. Ganti file `public/img/profile.jpg` dengan foto Anda sendiri.
2. Pastikan foto memiliki rasio aspek 1:1 (persegi) untuk hasil terbaik.

### Mengganti Pesan

1. Buka file `src/app/page.tsx`.
2. Cari variabel `chatMessage` dan ubah pesannya sesuai keinginan Anda.
3. Anda juga dapat mengubah teks di berbagai langkah animasi.

### Mengganti Musik

1. Ganti file `public/music/lebaran.mp3` dengan file musik pilihan Anda.
2. Pastikan file musik memiliki format MP3 dan ukuran yang wajar.

### Mengganti Nomor WhatsApp

1. Buka file `src/app/page.tsx`.
2. Cari variabel `phoneNumber` dan ubah dengan nomor WhatsApp Anda (format: kode negara tanpa tanda +, diikuti nomor telepon).

## Deployment ke Vercel

1. **Push ke GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. **Deploy ke Vercel**:
   - Buka [Vercel](https://vercel.com) dan login.
   - Klik "New Project" dan import repository GitHub Anda.
   - Klik "Deploy".

3. **Bagikan Link**:
   - Setelah deployment selesai, Anda akan mendapatkan URL untuk dibagikan.
   - Bagikan URL ini kepada teman dan keluarga melalui WhatsApp atau media sosial lainnya.

## Teknologi yang Digunakan

- [Next.js](https://nextjs.org/) - Framework React untuk aplikasi web.
- [Anime.js](https://animejs.com/) - Library JavaScript untuk animasi.
- [SweetAlert2](https://sweetalert2.github.io/) - Library untuk popup yang menarik.
- [Moving Letters](https://tobiasahlin.com/moving-letters/) - Inspirasi untuk animasi teks.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

Dibuat dengan ❤️ untuk merayakan Idul Fitri 2025. Mohon maaf lahir dan batin.
