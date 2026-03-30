import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Users, Clock, MapPin, ArrowRight, Star, ArrowLeft, Car, Wifi, Coffee, PartyPopper } from "lucide-react";

import img1 from "../../../assets/mesa-decorada-para-una-fiesta-elegante.webp";
import img2 from "../../../assets/premium_photo-1677165323499-246986ddb0c6.avif";
import img3 from "../../../assets/premium_photo-1661915652986-fe818e1973f9.avif";
import cardales1 from "../../../assets/salon/480497350_2144017226014762_4653191415112197368_n.jpg";
import cardales2 from "../../../assets/salon/71940316_804922216590943_750565820106539008_n.jpg";
import cardales3 from "../../../assets/salon/480774073_2144017332681418_4285842282283432567_n.jpg";



interface SalonData {
  id: number;
  nombre: string;
  imagenes: string[];
  precio: number;
  capacidad: string;
  ubicacion: string;
  caracteristicas: string[];
  servicios: string[];
  descripcion: string;
}

const salones: SalonData[] = [
  {
    id: 1,
    nombre: "Salón Elegance",
    imagenes: [img1, img2, img3],
    precio: 50000,
    capacidad: "hasta 150 personas",
    ubicacion: "Zona Norte",
    caracteristicas: ["Aire acondicionado", "Calefacción", "Iluminación LED", "Pista de baile", "Escenario"],
    servicios: ["Estacionamiento", "Wifi", "Catering propio", "Seguridad"],
    descripcion: "Nuestro salón principal con capacidad para grandes eventos. Ideal para bodas y eventos corporativos."
  },
  {
    id: 2,
    nombre: "Salón Garden",
    imagenes: [img3, img1, img2],
    precio: 35000,
    capacidad: "hasta 80 personas",
    ubicacion: "Zona Oeste",
    caracteristicas: ["Jardín exterior", "Terraza", "Iluminación natural", "Ambiente íntimo"],
    servicios: ["Estacionamiento", "Wifi", "Catering externo permitido"],
    descripcion: "Espacio perfecto para eventos al aire libre. Jardín privado con capacidad reducida para celebraciones íntimas."
  },
  {
    id: 3,
    nombre: "Salón Los Cardales",
    imagenes: [cardales1, cardales2, cardales3],
    precio: 75000,
    capacidad: "hasta 300 personas",
    ubicacion: "Centro",
    caracteristicas: ["Piscina", "Terraza panorámica", "Salón VIP", "Barra libre", "Sistema de sonido"],
    servicios: ["Estacionamiento vigilado", "Wifi alta velocidad", "Catering premium", "Seguridad 24hs", "Mozo incluido"],
    descripcion: "El salón más exclusivo con todas las comodidades. Perfecto para eventos VIP y celebraciones especiales."
  },
  {
    id: 4,
    nombre: "Salón Compact",
    imagenes: [img1, img3, img2],
    precio: 25000,
    capacidad: "hasta 40 personas",
    ubicacion: "Zona Sur",
    caracteristicas: ["Sala privada", "Cocina equipada", "TV y audio"],
    servicios: ["Estacionamiento", "Wifi"],
    descripcion: "Ideal para cumpleaños infantiles, reuniones familiares y eventos pequeños. Acogedor y funcional."
  }
];

const Salon = ({ onSelect }: { onSelect?: () => void }) => {
  const [salonSeleccionado, setSalonSeleccionado] = useState<SalonData | null>(null);
  const [imagenActual, setImagenActual] = useState(0);

  const salonActual = salonSeleccionado || salones[0];

  return (
    <section className="py-20 bg-white" id="servicio-salon">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="bg-[#D2AB80]/20 text-[#725C3A] px-4 py-1 rounded-full text-sm font-medium">
            Nuestros espacios
          </span>
          <h2 className="text-4xl font-bold text-[#725C3A] mt-4 mb-2">
            Alquiler de Salones
          </h2>
          <p className="text-[#725C3A]/70">
            Contamos con {salones.length} salones exclusivos para tu evento
          </p>
        </motion.div>

        {/* Listado de salones */}
        {!salonSeleccionado ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {salones.map((salon, index) => (
              <motion.div
                key={salon.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-[#D2AB80]"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={salon.imagenes[0]} 
                    alt={salon.nombre} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-[#725C3A]">{salon.nombre}</h3>
                  </div>
                  
                  <p className="text-[#725C3A]/70 text-sm mb-4">{salon.descripcion}</p>
                  
                  <div className="flex gap-4 text-sm text-[#725C3A]/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      {salon.capacidad}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {salon.ubicacion}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {salon.caracteristicas.slice(0, 3).map((car, i) => (
                      <span key={i} className="bg-[#FFF5E6] text-[#725C3A] px-2 py-1 rounded-full text-xs">
                        {car}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSalonSeleccionado(salon)}
                    className="w-full bg-[#725C3A] text-white py-3 rounded-xl font-semibold hover:bg-[#8B7355] transition flex items-center justify-center gap-2"
                  >
                    Ver detalles
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Detalles del salon seleccionado */
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Botón volver */}
            <button
              onClick={() => { setSalonSeleccionado(null); setImagenActual(0); }}
              className="flex items-center gap-2 text-[#725C3A] mb-6 hover:gap-3 transition-all"
            >
              <ArrowLeft size={20} />
              Volver a los salones
            </button>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Galería de imágenes */}
              <div>
                <motion.div
                  key={imagenActual}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-3xl overflow-hidden shadow-2xl mb-4"
                >
                  <img 
                    src={salonActual.imagenes[imagenActual]} 
                    alt={salonActual.nombre}
                    className="w-full h-[400px] object-cover"
                  />
                </motion.div>
                <div className="flex gap-3">
                  {salonActual.imagenes.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setImagenActual(i)}
                      className={`w-20 h-20 rounded-xl overflow-hidden transition-all ${
                        imagenActual === i ? 'ring-2 ring-[#D2AB80]' : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Info del salon */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#D2AB80]/20 text-[#725C3A] px-4 py-1 rounded-full text-sm font-medium">
                    {salonActual.ubicacion}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#D2AB80] fill-[#D2AB80]" />
                    ))}
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-[#725C3A] mb-4">
                  {salonActual.nombre}
                </h3>
                <p className="text-lg text-[#725C3A]/70 mb-6">
                  {salonActual.descripcion}
                </p>

                {/* Características */}
                <div className="mb-6">
                  <h4 className="font-bold text-[#725C3A] mb-3">Características</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {salonActual.caracteristicas.map((car, i) => (
                      <div key={i} className="flex items-center gap-2 text-[#725C3A]/80 text-sm">
                        <Check size={16} className="text-[#809671]" />
                        {car}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Servicios incluidos */}
                <div className="mb-8">
                  <h4 className="font-bold text-[#725C3A] mb-3">Servicios incluidos</h4>
                  <div className="flex flex-wrap gap-2">
                    {salonActual.servicios.map((serv, i) => (
                      <span key={i} className="bg-[#809671]/20 text-[#725C3A] px-3 py-1 rounded-full text-sm">
                        {serv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botones */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => { localStorage.setItem("salonSeleccionado", salonActual.nombre); onSelect?.(); }}
                    className="bg-[#725C3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#8B7355] transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Check size={20} />
                    Reservar este salón
                  </button>
                  <a
                    href="#hero-form"
                    className="border-2 border-[#725C3A] text-[#725C3A] px-8 py-4 rounded-2xl font-semibold hover:bg-[#725C3A] hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    Consultar disponibilidad
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Info adicional - solo cuando hay un salon seleccionado */}
        {salonSeleccionado && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-4 gap-6 mt-16"
          >
            <div className="bg-[#FFF5E6] p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-[#D2AB80]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users size={24} className="text-[#D2AB80]" />
              </div>
              <p className="font-bold text-[#725C3A]">Capacidad</p>
              <p className="text-[#725C3A]/60 text-sm">{salonSeleccionado.capacidad}</p>
            </div>
            <div className="bg-[#FFF5E6] p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-[#D2AB80]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock size={24} className="text-[#D2AB80]" />
              </div>
              <p className="font-bold text-[#725C3A]">Duración</p>
              <p className="text-[#725C3A]/60 text-sm">Hasta 12 horas</p>
            </div>
            <div className="bg-[#FFF5E6] p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-[#D2AB80]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin size={24} className="text-[#D2AB80]" />
              </div>
              <p className="font-bold text-[#725C3A]">Ubicación</p>
              <p className="text-[#725C3A]/60 text-sm">{salonSeleccionado.ubicacion}</p>
            </div>
            <div className="bg-[#FFF5E6] p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-[#D2AB80]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Car size={24} className="text-[#D2AB80]" />
              </div>
              <p className="font-bold text-[#725C3A]">Estacionamiento</p>
              <p className="text-[#725C3A]/60 text-sm">{salonSeleccionado.servicios.includes("Estacionamiento") || salonSeleccionado.servicios.includes("Estacionamiento vigilado") ? "Incluido" : "No disponible"}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Salon;
