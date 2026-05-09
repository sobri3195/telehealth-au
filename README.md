# Telehealth AU

Telehealth AU adalah MVP aplikasi web telehealth mobile-first untuk lingkungan TNI Angkatan Udara. Aplikasi membantu pasien/personel/keluarga besar TNI AU menyampaikan kebutuhan kesehatan, melakukan triase awal, konsultasi online, chat realtime, rujukan, resep, upload dokumen medis, serta mencari fasilitas kesehatan TNI AU terdekat.

## Stack

- **Frontend SPA:** React, Vite, TypeScript, Tailwind CSS, komponen bergaya shadcn/ui, React Router, TanStack Query, React Hook Form, Zod, Zustand.
- **Backend API:** NestJS, PostgreSQL, Prisma, Redis, MinIO/S3, WebSocket Gateway.
- **Infra lokal:** Docker Compose untuk PostgreSQL, Redis, dan MinIO.

## Struktur folder

```text
apps/
  web/                 # React Vite SPA
    src/components/    # AppShell, BottomNavigation, PatientNeedsInteraction, ChatRoom, UnitDirectory
    src/pages/         # Login, dashboard pasien, kebutuhan, pesan, jajaran, profil, dokter, admin
    src/stores/        # Zustand stores
    src/lib/           # Zod schemas dan utilitas
  api/                 # NestJS API
    src/               # Auth, patient needs, triage, messages gateway, uploads, master data modules
    prisma/            # schema.prisma dan seed data TNI AU/faskes
```

## Fitur MVP

- Login dummy/JWT dengan identitas NRP/NIP/NIK/email/internal.
- Dashboard pasien dengan ringkasan kesehatan, konsultasi aktif, dokter tersedia, faskes terdekat, dan tombol darurat.
- Bottom navigation fixed: Beranda, Kebutuhan, Pesan, Jajaran, Profil.
- Modul **PatientNeedsInteraction** yang menanyakan “Apa kebutuhan Anda hari ini?”, memuat 13 kebutuhan, wizard adaptif, triase hijau/kuning/merah, rekomendasi layanan, dan tombol mulai chat.
- Emergency flow dengan pesan bahwa telehealth bukan pengganti IGD, faskes terdekat, prioritas merah, dan chat darurat.
- Chat konsultasi dengan status sent/delivered/read, attachment placeholder, typing/presence via WebSocket Gateway.
- Direktori jajaran TNI AU dan fasilitas kesehatan, termasuk Koopsud, Lanud, Kopasgat, Koharmatau, Kodiklatau, Puskesau/Diskesau, RSAU/RSPAU/Lakespra/Lafiau.
- Dashboard dokter untuk antrean, triase, SOAP, resep, rujukan, follow-up.
- Dashboard admin pusat untuk statistik nasional, kasus darurat, rujukan, response time, master data.
- Prisma schema lengkap untuk user, role, profil pasien/staf, jajaran, faskes, kebutuhan pasien, triase, konsultasi, pesan, attachment, SOAP, resep, rujukan, jadwal, notifikasi, audit log.

## Menjalankan lokal

1. Salin env:

```bash
cp .env.example .env
```

2. Install dependency:

```bash
npm install
```

3. Jalankan PostgreSQL, Redis, dan MinIO:

```bash
docker compose up -d
```

4. Generate Prisma client dan seed master data:

```bash
npm run prisma:generate
npx prisma db push --schema apps/api/prisma/schema.prisma
npm run prisma:seed
```

5. Jalankan aplikasi:

```bash
npm run dev
```

- Web: http://localhost:5173
- API: http://localhost:3000
- MinIO console: http://localhost:9001

## Akun dummy

- Identitas: `198809122010011001`
- Password: `password`

## Endpoint API utama

- `POST /auth/login` dummy JWT login.
- `GET /organization-units` master data jajaran hierarkis.
- `GET /health-facilities` master data faskes.
- `POST /patient-needs` submit kebutuhan pasien dan hasil triase.
- `GET /patient-needs` antrean kebutuhan untuk tenaga kesehatan/admin.
- `GET /uploads/presign?key=...` presigned upload MinIO.
- WebSocket namespace `/chat`: `joinConsultation`, `typing`, `message`, `read`.

## Catatan pengembangan berikutnya

- Ganti login dummy dengan strategi Passport JWT, refresh-token rotation, dan hash refresh token.
- Tambahkan guard JWT penuh dan audit log otomatis di interceptor untuk seluruh akses medis.
- Tambahkan Redis adapter Socket.IO untuk scaling presence/pub-sub lintas instance.
- Tambahkan penyimpanan pesan dan attachment realtime ke database.
- Tambahkan integrasi peta/geolocation untuk rekomendasi faskes terdekat berbasis koordinat.
