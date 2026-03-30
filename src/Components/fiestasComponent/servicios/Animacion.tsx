import { motion } from "framer-motion";
import {
  Check,
  PartyPopper,
  Users,
  Gamepad2,
  ArrowRight,
  Star,
  Music
} from "lucide-react";

import img1 from "../../../assets/premium_photo-1663040486740-60e41b8fd1e3.avif";
import img2 from "../../../assets/premium_photo-1677165323499-246986ddb0c6.avif";
import img3 from "../../../assets/premium_photo-1661915652986-fe818e1973f9.avif";

const servicios = [
  {
    nombre: "Animación adultos",
    desc: "Juegos, competencias, música",
    icon: Users,
    precio: "Desde $30.000",
  },
  {
    nombre: "Shows en vivo",
    desc: "Banda, DJ, karaoke",
    icon: Music,
    precio: "Desde $40.000",
  },
  {
    nombre: "Experiencias únicas",
    desc: "Fotobox, casinos, arcade",
    icon: Gamepad2,
    precio: "Desde $20.000",
  },
];

const actividades = [
  "Juegos y dinámicas grupales",
  "Talleres creativos",
  "Show de magia",
  "Pintura de caras",
  "Globos modelados",
  "Karaoke",
  "Competencias",
  "Mini disco",
];

const animadores = [
  { nombre: "Show de magia", desc: "Magia close-up y escenario", imagen: img1 },
  { nombre: "Fiesta temática", desc: "Superhéroes, princesas, Disney", imagen: img2 },
  { nombre: "Juegos gigantes", desc: "Jenga, Twister, metegol", imagen: img3 },
];

type Props = {
  onSelect?: () => void;
};

const Animacion = ({ onSelect }: Props) => {
  return (
    <section className="py-20 bg-white" id="servicio-animacion">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="bg-[#D2AB80]/20 text-[#725C3A] px-4 py-1 rounded-full text-sm font-medium">
              Diversión garantizada
            </span>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[#D2AB80] fill-[#D2AB80]" />
              ))}
            </div>
          </div>

          <h2 className="text-4xl font-bold text-[#725C3A] mb-4">
            Animación & Entretenimiento
          </h2>

          <p className="text-lg text-[#725C3A]/70 max-w-2xl mx-auto">
            Animadores profesionales que mantienen a todos entretenidos.
            Shows, juegos y actividades para todas las edades.
          </p>
        </motion.div>

        {/* Servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {servicios.map((servicio, i) => {
            const Icon = servicio.icon;

            return (
              <motion.div
                key={servicio.nombre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => { localStorage.setItem("animacionSeleccionada", servicio.nombre); onSelect?.(); }}
                className="bg-[#FFF5E6] rounded-3xl p-6 cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#D2AB80]/20 rounded-2xl flex items-center justify-center mb-4">
                  <Icon size={28} className="text-[#D2AB80]" />
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

        {/* Actividades */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h3 className="text-2xl font-bold text-[#725C3A] mb-6">
              Actividades disponibles
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {actividades.map((act, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-[#FFF5E6] p-3 rounded-xl"
                >
                  <div className="w-8 h-8 bg-[#D2AB80]/20 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-[#D2AB80]" />
                  </div>

                  <span className="text-sm text-[#725C3A]">
                    {act}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {animadores.map((anim, i) => (
              <motion.div
                key={anim.nombre}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden group"
              >
                <img
                  src={anim.imagen}
                  alt={anim.nombre}
                  className="w-full h-36 object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {anim.nombre}
                    </p>

                    <p className="text-white/70 text-xs">
                      {anim.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info extra */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#725C3A] to-[#8B7355] rounded-3xl p-8 text-white text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <PartyPopper size={32} />
            <h3 className="text-2xl font-bold">
              ¿Qué incluyen nuestros paquetes?
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Animador profesional",
              "Todo el material",
              "2-4 horas de show",
              "Música y sonido",
              "Juegos y premios",
              "Seguro incluido",
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <Check size={20} className="text-[#E5D2B8]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-8 bg-white text-[#725C3A] px-8 py-4 rounded-2xl font-bold hover:bg-[#FFF5E6] transition-all hover:scale-105 flex items-center gap-2 mx-auto">
            Solicitar animación
            <ArrowRight size={20} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Animacion;