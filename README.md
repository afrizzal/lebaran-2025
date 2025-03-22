# Aplikasi Ucapan Lebaran 2025

Aplikasi ini adalah platform digital untuk membuat dan berbagi ucapan Hari Raya Idul Fitri yang interaktif dan menarik.

## Demo

Lihat demo aplikasi di: [https://lebaran-2025.vercel.app/](https://lebaran-2025.vercel.app/)

## Fitur

- **Animasi Interaktif**: Tampilan dengan animasi dan efek visual yang menarik
- **Personalisasi**: Kustomisasi nama keluarga dan nomor WhatsApp melalui parameter URL
- **Background Islami**: Desain dengan tema Ramadan yang profesional
- **Responsif**: Tampilan optimal di semua ukuran layar (desktop, tablet, dan mobile)
- **Integrasi WhatsApp**: Fitur untuk membalas ucapan langsung melalui WhatsApp
- **Efek Visual Menarik**: Background dengan ornamen islami, lentera, berlian, dan efek visual lainnya
- **Sparkles Effect**: Efek particle berkilauan pada bagian ucapan "Taqabbalallahu minna wa minkum"

## Cara Penggunaan

### Melihat Ucapan

1. Buka [https://lebaran-2025.vercel.app/](https://lebaran-2025.vercel.app/)
2. Ikuti alur animasi dan pesan yang muncul secara berurutan
3. Lihat kartu ucapan di akhir

### Personalisasi Nama Keluarga dan Nomor WhatsApp

Untuk menyesuaikan nama keluarga dan nomor WhatsApp tujuan, tambahkan parameter di URL:

```
https://lebaran-2025.vercel.app/?nama_keluarga=Keluarga+Budi&nomor_wa=081234567890
```

Parameter yang tersedia:
- `nama_keluarga`: Nama keluarga pengirim (gunakan tanda + untuk spasi)
- `nomor_wa`: Nomor WhatsApp yang akan menerima balasan (format Indonesia)

Format nomor WhatsApp:
- Dapat diawali dengan "0", "62", atau "+62"
- Aplikasi akan otomatis memformat nomor sesuai format WhatsApp

### Membalas Ucapan

1. Klik tombol "Balas Ucapan" di bagian bawah kartu ucapan
2. Konfirmasi untuk mengirim pesan
3. Anda akan diarahkan ke WhatsApp dengan pesan yang sudah disiapkan

### Mengulang Animasi

Klik tombol "Ulangi" di bagian bawah untuk melihat rangkaian animasi dari awal lagi.

## Teknologi

- Next.js 15
- TypeScript
- Anime.js untuk animasi teks
- SweetAlert2 untuk dialog interaktif
- CSS Animations
- SVG untuk elemen visual
- Framer Motion untuk efek sparkles/particle

## Credits

### Musik
Music by [FASSounds](https://pixabay.com/users/fassounds-3433550) from [Pixabay](https://pixabay.com)

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

## Deployment ke Vercel

Aplikasi ini sudah dikonfigurasi untuk deployment otomatis ke Vercel. Untuk melakukan deployment:

1. Fork atau clone repository ini
2. Connect repository ke akun Vercel Anda di https://vercel.com/import
3. Pilih repository dan klik "Import"
4. Vercel akan otomatis mendeteksi konfigurasi Next.js
5. Klik "Deploy" dan aplikasi Anda akan di-build dan di-deploy

Secara default, Vercel akan men-deploy pada domain `https://[nama-project].vercel.app`. Anda juga dapat menambahkan custom domain di dashboard Vercel.

### Troubleshooting Deployment

Jika Anda mengalami masalah saat deployment:

1. Pastikan semua dependencies tercantum di package.json
2. Periksa bahwa framer-motion telah terinstal dengan `npm install framer-motion`
3. Pastikan versi Node.js kompatibel (rekomendasi: Node.js 18 atau lebih tinggi)
4. Review log build di dashboard Vercel untuk detail error

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
