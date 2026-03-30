import { motion } from "framer-motion";
import {
  Check,
  Camera,
  Video,
  Images,
  Download,
  Heart,
  ArrowRight,
  Star,
  Play
} from "lucide-react";

import img1 from "../../../assets/consejos-fotograficos-fotografos-tips-portada-fotografo-profesional-pro-1024x682.jpg";
import img2 from "../../../assets/premium_photo-1663039950073-187c977da2e9.avif";
import img3 from "../../../assets/premium_photo-1677165323499-246986ddb0c6.avif";

const paquetes = [
  {
    nombre: "Básico",
    precio: "$35.000",
    incluye: [
      "2 horas de cobertura",
      "100 fotos editadas",
      "Galería online",
      "Entrega en 7 días"
    ],
    popular: false,
  },
  {
    nombre: "Completo",
    precio: "$65.000",
    incluye: [
      "4 horas de cobertura",
      "300 fotos editadas",
      "Video highlight 3 min",
      "Galería online",
      "Álbum digital",
      "Entrega en 10 días"
    ],
    popular: true,
  },
  {
    nombre: "Premium",
    precio: "$120.000",
    incluye: [
      "Cobertura completa",
      "Fotos ilimitadas",
      "Video completo",
      "Drone",
      "Making of",
      "Álbum impreso",
      "Sesión pre-evento"
    ],
    popular: false,
  },
];

type Props = {
  onSelect?: () => void;
};

const FotoVideo = ({ onSelect }: Props) => {
  return (
    <section className="py-20 bg-[#FFF5E6]" id="servicio-foto">
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
              @Nacho.Orosco
            </span>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[#D2AB80] fill-[#D2AB80]" />
              ))}
            </div>
          </div>

          <h2 className="text-4xl font-bold text-[#725C3A] mb-4">
            Fotografía & Video
          </h2>

          <p className="text-lg text-[#725C3A]/70 max-w-2xl mx-auto">
            Capturamos los momentos más especiales de tu evento.
            Profesionales con años de experiencia y equipamiento de alta gama.
          </p>
        </motion.div>

        {/* Galería */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 mb-16"
        >
          {[
            { img: img1, tipo: "Foto" },
            { img: img2, tipo: "Video" },
            { img: img3, tipo: "Foto" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.img}
                alt="Trabajo"
                className="w-full h-64 object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur rounded-full p-4">
                  {item.tipo === "Video" ? (
                    <Play size={32} className="text-white" fill="white" />
                  ) : (
                    <Camera size={32} className="text-white" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Paquetes */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {paquetes.map((paquete, i) => (
            <motion.div
              key={paquete.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-3xl p-6 shadow-lg ${
                paquete.popular ? "ring-2 ring-[#D2AB80] relative" : ""
              }`}
            >
              {paquete.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D2AB80] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Más elegido
                </span>
              )}

              <div className="flex items-center gap-2 mb-4">
                {paquete.nombre === "Premium" ? (
                  <Video size={24} className="text-[#725C3A]" />
                ) : (
                  <Camera size={24} className="text-[#725C3A]" />
                )}

                <h3 className="text-2xl font-bold text-[#725C3A]">
                  {paquete.nombre}
                </h3>
              </div>

              <div className="mb-4">
                <span className="text-3xl font-bold text-[#725C3A]">
                  {paquete.precio}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {paquete.incluye.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-[#725C3A]/80 text-sm"
                  >
                    <Check size={16} className="text-[#809671]" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => { localStorage.setItem("paqueteFotoVideo", `${paquete.nombre} - ${paquete.precio}`); onSelect?.(); }}
                className="w-full bg-[#725C3A] text-white py-3 rounded-xl font-semibold hover:bg-[#8B7355] transition"
              >
                Elegir paquete
              </button>
            </motion.div>
          ))}
        </div>

        {/* Características */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-[#725C3A] text-center mb-8">
            ¿Qué incluye nuestro servicio?
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Camera,
                titulo: "Fotos profesionales",
                desc: "Cámara de alta resolución, iluminación profesional",
              },
              {
                icon: Video,
                titulo: "Videos cinematográficos",
                desc: "Edición profesional, colores perfectos",
              },
              {
                icon: Images,
                titulo: "Galería online",
                desc: "Compartí con tus invitados fácilmente",
              },
              {
                icon: Download,
                titulo: "Alta resolución",
                desc: "Todas las fotos en calidad para imprimir",
              },
              {
                icon: Heart,
                titulo: "Edición especial",
                desc: "Retoque profesional de cada imagen",
              },
              {
                icon: Play,
                titulo: "Video highlight",
                desc: "Video resumido de los mejores momentos",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D2AB80]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-[#D2AB80]" />
                  </div>

                  <div>
                    <p className="font-semibold text-[#725C3A]">
                      {item.titulo}
                    </p>
                    <p className="text-sm text-[#725C3A]/60">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FotoVideo;