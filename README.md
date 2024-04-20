# Movie Search App

Movie Search App adalah aplikasi web sederhana yang memungkinkan pengguna untuk mencari film dan melihat film populer.

## Fitur

- Mencari film berdasarkan judul
- Menampilkan daftar film populer

## Teknologi yang Digunakan

- React.js
- Axios untuk panggilan API
- API dari The Movie Database (TMDB)

## Cara Menjalankan Aplikasi Lokal

1. Clone repositori ini.
2. Install dependensi dengan menjalankan `npm install` atau `yarn install`.
3. Buat file `.env` di root proyek dan tambahkan variabel lingkungan berikut:

    ```
    REACT_APP_API_KEY=your_api_key
    REACT_APP_API_BASEURL=your_api_baseurl
    REACT_APP_API_BASEIMGURL=your_api_baseimgurl
    ```

    Ganti `your_api_key`, `your_api_baseurl`, dan `your_api_baseimgurl` dengan nilai yang sesuai.

4. Jalankan aplikasi dengan `npm start` atau `yarn start`.
5. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Lisensi

Proyek ini berlisensi di bawah [MIT License](LICENSE).
