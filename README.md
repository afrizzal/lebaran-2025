# Aplikasi Ucapan Lebaran 2025

Aplikasi ini adalah platform digital untuk membuat dan berbagi ucapan Hari Raya Idul Fitri yang interaktif dan menarik.

## Demo

Lihat demo aplikasi di: [https://lebaran-2025.vercel.app/](https://lebaran-2025.vercel.app/)

## Fitur

- **Animasi Interaktif**: Tampilan dengan animasi dan efek visual yang menarik
- **Personalisasi**: Kustomisasi nama keluarga melalui parameter URL
- **Background Islami**: Desain dengan tema Ramadan yang profesional
- **Responsif**: Tampilan optimal di semua ukuran layar (desktop, tablet, dan mobile)
- **Integrasi WhatsApp**: Fitur untuk membalas ucapan langsung melalui WhatsApp
- **Efek Visual Menarik**: Background dengan ornamen islami, lentera, berlian, dan efek visual lainnya

## Cara Penggunaan

### Melihat Ucapan

1. Buka [https://lebaran-2025.vercel.app/](https://lebaran-2025.vercel.app/)
2. Ikuti alur animasi dan pesan yang muncul secara berurutan
3. Lihat kartu ucapan di akhir

### Personalisasi Nama Keluarga

Untuk menyesuaikan nama keluarga, tambahkan parameter `nama_keluarga` di URL:

```
https://lebaran-2025.vercel.app/?nama_keluarga=Keluarga+Budi
```

Ganti `Keluarga+Budi` dengan nama yang Anda inginkan (gunakan tanda + untuk spasi).

### Membalas Ucapan

1. Klik tombol "Balas Ucapan" di bagian bawah kartu ucapan
2. Konfirmasi untuk mengirim pesan
3. Anda akan diarahkan ke WhatsApp dengan pesan yang sudah disiapkan

### Mengulang Animasi

Klik tombol "Ulangi" di bagian bawah untuk melihat rangkaian animasi dari awal lagi.

## Teknologi

- Next.js
- TypeScript
- GSAP/Anime.js untuk animasi
- SweetAlert2 untuk dialog interaktif
- CSS Animations
- SVG untuk elemen visual

## Pengembangan Lokal

1. Clone repository:
   ```bash
   git clone [URL_REPOSITORY]
   ```

2. Instal dependencies:
   ```bash
   cd lebaran-2025
   npm install
   ```

3. Jalankan server development:
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda

## Deployment

Aplikasi ini telah di-deploy di Vercel. Untuk melakukan deployment Anda sendiri:

1. Fork repository ini
2. Connect repository ke akun Vercel Anda
3. Deploy dengan default settings

## Kontribusi

Kontribusi sangat diterima! Jika Anda ingin berkontribusi:

1. Fork repository
2. Buat branch fitur baru
3. Commit perubahan
4. Push ke branch
5. Buka Pull Request

## Lisensi

Digunakan untuk tujuan edukasi dan personal.

---

Dibuat dengan ❤️ untuk merayakan Idul Fitri 2025
