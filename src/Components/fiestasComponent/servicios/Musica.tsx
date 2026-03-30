import { motion } from "framer-motion";
import { Check, Music, Volume2, Mic, Guitar, Disc3, Headphones, Sparkles, ArrowRight, Star } from "lucide-react";

import img1 from "../../../assets/premium_photo-1661915652986-fe818e1973f9.avif";
import img2 from "../../../assets/premium_photo-1677165323499-246986ddb0c6.avif";
import img3 from "../../../assets/premium_photo-1663040486740-60e41b8fd1e3.avif";

const servicios = [
  {
    nombre: "DJ profesional",
    desc: "Música para todos los gustos",
    icon: Disc3,
    precio: "Desde $30.000",
  },
  {
    nombre: "Banda en vivo",
    desc: "Variedad musical",
    icon: Guitar,
    precio: "Desde $80.000",
  },
  {
    nombre: "Karaoke",
    desc: "Cantá con tus invitados",
    icon: Mic,
    precio: "Desde $15.000",
  },
  {
    nombre: "Sonido e iluminación",
    desc: "Equipamiento profesional",
    icon: Volume2,
    precio: "Desde $25.000",
  },
];

const generos = [
  "Cumbia",
  "Rock",
  "Pop",
  "Reggaeton",
  "Clásicos 80s-90s",
  "Folklore",
  " Electrónica",
  "Jazz",
];

const Musica = ({ onSelect }: { onSelect?: () => void }) => {
  return (
    <section className="py-20 bg-[#FFF5E6]" id="servicio-musica">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="bg-[#D2AB80]/20 text-[#725C3A] px-4 py-1 rounded-full text-sm font-medium">
              Ambiente perfecto
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[#D2AB80] fill-[#D2AB80]" />
              ))}
            </div>
          </div>
          <h2 className="text-4xl font-bold text-[#725C3A] mb-4">
            Música & Ambientación
          </h2>
          <p className="text-lg text-[#725C3A]/70 max-w-2xl mx-auto">
            La banda sonora perfecta para tu evento. DJ profesional, 
            bandas en vivo o karaoke para que todos bailen.
          </p>
        </motion.div>

        {/* Tipos de servicio */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
  {servicios.map((servicio, i) => {
    return (
      <motion.div
        key={servicio.nombre}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        whileHover={{ y: -10 }}
        onClick={() => { localStorage.setItem("musicaSeleccionada", servicio.nombre); onSelect?.(); }}
        className="bg-white rounded-3xl p-6 cursor-pointer hover:shadow-xl transition-shadow"
      >
        <div className="w-14 h-14 bg-gradient-to-br from-[#725C3A] to-[#D2AB80] rounded-2xl flex items-center justify-center mb-4">
          <servicio.icon size={28} className="text-white" />
        </div>

        <h3 className="text-lg font-bold text-[#725C3A] mb-1">
          {servicio.nombre}
        </h3>

        <p className="text-[#725C3A]/60 text-sm mb-3">
          {servicio.desc}
        </p>

        <p className="text-[#D2AB80] font-bold">
          {servicio.precio}
        </p>
      </motion.div>
    );
  })}
</div>

        {/* Generos y equipo */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Generos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#725C3A] mb-6 flex items-center gap-3">
              <Music size={28} className="text-[#D2AB80]" />
              Géneros que tocamos
            </h3>
            <div className="flex flex-wrap gap-3">
              {generos.map((genero, i) => (
                <motion.span
                  key={genero}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#FFF5E6] text-[#725C3A] px-4 py-2 rounded-full text-sm font-medium"
                >
                  {genero}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Equipo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#725C3A] mb-6 flex items-center gap-3">
              <Headphones size={28} className="text-[#D2AB80]" />
              Equipamiento incluido
            </h3>
            <ul className="space-y-3">
              {[
                "Sistema de sonido line array",
                "Iluminación LED profesional",
                "Micrófonos inalámbricos",
                "Consola digital",
                "Subwoofers",
                "Cabina de DJ",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#725C3A]/80">
                  <div className="w-6 h-6 bg-[#809671]/20 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-[#809671]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Galeria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { img: img1, titulo: "Bodas", desc: "Moments románticos" },
              { img: img2, titulo: "Cumpleaños", desc: "Fiesta asegurada" },
              { img: img3, titulo: "Corporativos", desc: "Profesionalismo" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden group"
              >
                <img src={item.img} alt={item.titulo} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <p className="text-white font-bold">{item.titulo}</p>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#725C3A] text-white px-8 py-4 rounded-2xl">
            <Sparkles size={24} />
            <span className="text-lg font-semibold">¿Querés una cotización personalizada?</span>
          </div>
          <button className="block w-full max-w-md mx-auto mt-6 bg-[#D2AB80] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#725C3A] transition-all hover:scale-105 flex items-center justify-center gap-2">
            <Music size={20} />
            Solicitar música
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Musica;
