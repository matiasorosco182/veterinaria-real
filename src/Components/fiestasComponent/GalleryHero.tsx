import { useState } from "react";

import img1 from "../../assets/mesa-decorada-para-una-fiesta-elegante.webp";
import img2 from "../../assets/premium_photo-1677165323499-246986ddb0c6.avif";

const images = [img1, img2];

type Props = {
  uniforme: string;
  setUniforme: (value: string) => void;
};

const GalleryHero = ({ uniforme, setUniforme }: Props) => {

  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-[#E5D2B8] py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-6">

        {/* TEXTO */}
        <div className="text-[#725C3A] text-center md:text-left">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Momentos que creamos
          </h2>

          <p className="mb-6 text-lg text-[#725C3A]/80">
            Cada evento que organizamos está pensado para crear recuerdos
            Elige la vestimenta de nuestro equipo.
          </p>

          {/* SELECT UNIFORME */}
          <p className="mb-2 text-lg font-medium">
            ¿Qué uniforme quieres para tu evento?
          </p>

          <select
            value={uniforme}
            onChange={(e) => setUniforme(e.target.value)}
            className="mb-6 p-3 rounded-xl border border-[#809671]/30 focus:outline-none focus:ring-2 focus:ring-[#725C3A]"
          >
            <option value="Camisa blanca">Camisa blanca</option>
            <option value="Chomba negra">Chomba negra</option>
            {/* <option value="Moderno">Moderno</option>
            <option value="Personalizado">Personalizado</option> */}
          </select>


        </div>

        {/* IMAGENES */}
        <div className="relative flex items-center justify-center w-full">

          {/* Imagen principal */}
          <img
            key={current}
            src={images[current]}
            className="w-[220px] md:w-72 h-[300px] md:h-96 object-cover shadow-xl rounded-xl transition-all duration-700"
          />

          {/* Imagen secundaria */}
          <img
            src={images[(current + 1) % images.length]}
            className="hidden md:block w-48 h-72 object-cover rounded-xl absolute right-[-80px] opacity-80"
          />

          {/* Controles */}
          <div className="absolute -bottom-12 flex gap-4">

            <button
              onClick={prevImage}
              className="w-9 h-9 rounded-full bg-white text-[#725C3A] shadow hover:scale-110 transition"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="w-9 h-9 rounded-full bg-white text-[#725C3A] shadow hover:scale-110 transition"
            >
              ›
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GalleryHero;