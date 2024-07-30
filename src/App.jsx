import React from "react";
import "./index.css";
import logo from "./assets/LOGO-NEW-VIDELIN-HR-TXT.png";
import productImage from "./assets/ab-2.png";
import testimonialImage from "./assets/Customer-Show-cc-01.webp"; // Adjust the path as necessary
import productionImage from "./assets/WhatsApp-Image-2024-07-14-at-15.27.07.jpeg"; // Adjust the path as necessary
import colorOptionsImage from "./assets/ab.png"; // Adjust the path as necessary
import ctaArrowGif from "./assets/cta-arrow.gif"; // Adjust the path as necessary
import promoButtonGif from "./assets/ambil-harga-promo.gif"; // Adjust the path as necessary
import guaranteeImage from "./assets/garansi-30-hari.webp"; // Adjust the path as necessary
import footerImage from "./assets/Footer-LP.png"; // Adjust the path as necessary
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center flex-col">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md">
        <header className="flex justify-center p-4">
          <img src={logo} alt="Videlin Logo" className="h-12" />
        </header>
        <section className="text-center p-4">
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            Setelan Yang Bikin Tampilmu Terlihat{" "}
            <span className="bg-pink-200 px-2 rounded">Langsing</span> Dan{" "}
            <span className="bg-pink-200 px-2 rounded">Awet Muda</span> Di
            Setiap Aktivitas
          </h1>
          <img
            src={productImage}
            alt="Product"
            className="w-full h-auto rounded-lg mb-4"
          />
        </section>
        <section className="text-center p-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            DETAIL <span className="bg-pink-200 px-2 rounded">PRODUK</span>
          </h2>
          <div className="bg-gray-100 shadow-sm mb-4 border border-gray-300">
            <ul className="text-left">
              <li className="flex items-center bg-white p-2">
                <span className="text-green-500 mr-2">
                  <i className="fas fa-check-circle"></i>
                </span>
                Bahan: Krinkel Premium
              </li>
              <li className="flex items-center bg-gray-100 p-2">
                <span className="text-green-500 mr-2">
                  <i className="fas fa-check-circle"></i>
                </span>
                Lingkar Dada: <strong>130 CM</strong>
              </li>
              <li className="flex items-center bg-white p-2">
                <span className="text-green-500 mr-2">
                  <i className="fas fa-check-circle"></i>
                </span>
                Panjang Atasan: <strong>60 CM</strong>
              </li>
              <li className="flex items-center bg-gray-100 p-2">
                <span className="text-green-500 mr-2">
                  <i className="fas fa-check-circle"></i>
                </span>
                Panjang Celana: <strong>45 CM</strong> (Full Karet)
              </li>
              <li className="flex items-center bg-white p-2">
                <span className="text-green-500 mr-2">
                  <i className="fas fa-check-circle"></i>
                </span>
                Muat BB: <strong>40KG – 95KG</strong>
              </li>
            </ul>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            ID{" "}
            <span className="bg-pink-200 px-2 rounded">100 % BUATAN LOKAL</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Kami adalah produsen lokal 100% yang berkomitmen pada kualitas
            terbaik, dan menggunakan bahan-bahan premium.
          </p>
          <p className="text-gray-700 mb-4">
            Dengan membeli produk kami, Anda tidak hanya mendapatkan kualitas
            unggul tetapi juga mendukung perkembangan industri dalam negeri.
          </p>
          <p className="text-gray-700 mb-4">
            Mari kita bersama-sama mendukung dan bangga dengan produk lokal! 💪
          </p>
        </section>
        <section className="text-center p-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Testimoni{" "}
            <span className="bg-pink-200 px-2 rounded">Pelanggan</span>
          </h2>
          <img
            src={testimonialImage}
            alt="Testimonial"
            className="w-full h-auto rounded-lg mb-4"
          />
        </section>
        <section className="text-center p-4">
          <img
            src={productionImage}
            alt="Production"
            className="w-full h-auto rounded-lg mb-2"
          />
          <p className="text-gray-700 mb-4">
            Produksi Videlin Bertempat di Sukoharjo, 20 May 2024
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            10+ Pilihan <span className="bg-pink-200 px-2 rounded">Warna</span>
          </h2>
          <img
            src={colorOptionsImage}
            alt="Color Options"
            className="w-full h-auto rounded-lg mb-4"
          />
        </section>
        <section className="text-center p-4 border-2 border-dashed border-red-500">
          <p className="text-gray-700 mb-2">
            Spesial untuk Kamu yang ingin pakai setelan ini biar terlihat lebih{" "}
            <span className="bg-pink-200 px-2 rounded">Langsing</span> dan{" "}
            <span className="bg-pink-200 px-2 rounded">Awet Muda</span>.
          </p>
          <p className="text-gray-700 mb-2">
            Kami berikan{" "}
            <span className="bg-pink-200 px-2 rounded">Diskon Ongkir 20%</span>{" "}
            dan{" "}
            <span className="bg-pink-200 px-2 rounded">
              DISKON PRODUK SENILAI 100 RIBU
            </span>{" "}
            dengan harga:
          </p>
          <h3 className="text-lg font-bold text-yellow-500 mb-2">
            👇 SPESIAL HARI INI 👇
          </h3>
          <h3 className="text-xl font-bold text-red-500 mb-2 line-through">
            Rp 250.000
          </h3>
          <h3 className="text-xl font-bold text-green-500 mb-4">
            Diskon Hari Ini, jadi hanya =
          </h3>
          <div className="text-left mb-4">
            <div className="flex items-center justify-between mb-2">
              <span>Beli 1</span>
              <div className="flex items-center">
                <span className="bg-green-100 text-green-500 px-2 rounded-full text-sm mr-2">
                  Hemat 50.000
                </span>
                <span className="line-through text-gray-500 mr-2">
                  Rp185.000
                </span>
                <span className="text-green-500 font-bold">Rp135.000</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Beli 2</span>
              <div className="flex items-center">
                <span className="bg-green-100 text-green-500 px-2 rounded-full text-sm mr-2">
                  Hemat 115.000
                </span>
                <span className="line-through text-gray-500 mr-2">
                  Rp285.000
                </span>
                <span className="text-green-500 font-bold">Rp170.000</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Beli 3</span>
              <div className="flex items-center">
                <span className="bg-green-100 text-green-500 px-2 rounded-full text-sm mr-2">
                  Hemat 160.000
                </span>
                <span className="line-through text-gray-500 mr-2">
                  Rp355.000
                </span>
                <span className="text-green-500 font-bold">Rp195.000</span>
              </div>
            </div>
          </div>
          <img
            src={ctaArrowGif}
            alt="CTA Arrow"
            className="w-full h-auto mb-4"
          />
          <img
            src={promoButtonGif}
            alt="Promo Button"
            className="w-full h-auto rounded-lg mb-4"
          />
          <p className="text-gray-700 mb-4">
            Silakan KLIK TOMBOL DIATAS untuk mendapatkan PROMO TERBATAS.
          </p>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex items-center mb-4 ">
            <img
              src={guaranteeImage}
              alt="Guarantee"
              className="w-24 h-auto mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Garansi Uang Kembali 30 Hari
              </h3>
              <p className="text-gray-700 mb-2">
                Kami ingin Anda 100% puas dengan produk yang Anda beli dari
                VIDELIN.
              </p>
              <p className="text-gray-700">
                Jika Anda tidak sepenuhnya senang dengan pembelian Anda, kami
                akan mengembalikan uang Anda atau menukar produk tersebut.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md ">
            <img
              src={footerImage}
              alt="Footer"
              className="w-full h-auto mb-4"
            />
            <p className="text-gray-700 text-center mb-2">
              Foto Produk 100% Asli – Jaminan Keaslian! Waspadalah terhadap
              barang tiruan.
            </p>
            <p className="text-gray-700 text-center">
              Kami memberikan Garansi Uang Kembali 100% untuk memastikan
              kepuasan Anda.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
