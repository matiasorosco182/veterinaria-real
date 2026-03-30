import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shirt, Star } from "lucide-react";

import imgCamisaBlanca from "../../../assets/vestimenta/camisaBlanca.png";
import imgChombaNegra from "../../../assets/vestimenta/chombaNegra.png";
import imgCamisaChef from "../../../assets/vestimenta/camisaChef.png";

interface Traje {
  id: number;
  nombre: string;
  imagen: string;
}

const trajes: Traje[] = [
  { id: 1, nombre: "Camisa Blanca", imagen: imgCamisaBlanca },
  { id: 2, nombre: "Chomba Negra", imagen: imgChombaNegra },
  { id: 3, nombre: "Camisa Chef", imagen: imgCamisaChef },
];

const Vestimenta = ({ onSelect }: { onSelect?: () => void }) => {
  const [trajeSeleccionado, setTrajeSeleccionado] = useState<Traje | null>(null);

  const handleConfirmar = () => {
    if (trajeSeleccionado) {
      localStorage.setItem("vestimentaSeleccionada", trajeSeleccionado.nombre);
      onSelect?.();
    }
  };

  return (
    <section className="py-20 bg-white" id="servicio-vestimenta">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="bg-[#D2AB80]/20 text-[#725C3A] px-4 py-1 rounded-full text-sm font-medium">
            Dress code
          </span>
          <div className="flex justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-[#D2AB80] fill-[#D2AB80]" />
            ))}
          </div>
          <h2 className="text-4xl font-bold text-[#725C3A] mt-4 mb-2">
            Vestimenta & Dress Code
          </h2>
          <p className="text-lg text-[#725C3A]/70">
            Elegí el estilo de vestimenta para tu evento
          </p>
        </motion.div>

        {/* Grid de trajes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {trajes.map((traje, index) => (
            <motion.div
              key={traje.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setTrajeSeleccionado(traje)}
              className={`relative bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all ${
                trajeSeleccionado?.id === traje.id ? 'ring-4 ring-[#D2AB80]' : 'hover:shadow-xl'
              }`}
            >
              <div className="h-80 overflow-hidden bg-[#F5F0E8]">
                <img 
                  src={traje.imagen} 
                  alt={traje.nombre}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-4 text-center bg-[#FFF5E6]">
                <h4 className="font-bold text-[#725C3A] text-lg">{traje.nombre}</h4>
              </div>
              {trajeSeleccionado?.id === traje.id && (
                <div className="absolute top-4 right-4 bg-[#D2AB80] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                  <Check size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Botón confirmar */}
        {trajeSeleccionado && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-10"
          >
            <p className="text-[#725C3A] mb-4">
              Has seleccionado: <span className="font-bold">{trajeSeleccionado.nombre}</span>
            </p>
            <button
              onClick={handleConfirmar}
              className="bg-[#725C3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#8B7355] transition-all hover:scale-105 flex items-center gap-2 mx-auto"
            >
              <Check size={20} />
              Confirmar selección
            </button>
          </motion.div>
        )}

        {/* Info adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#FFF5E6] rounded-3xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#725C3A] mb-4">
                ¿Por qué definir un dress code?
              </h3>
              <p className="text-[#725C3A]/70 mb-6">
                Un dress code ayuda a que todos tus invitados vengan apropiadamente 
                vestidos y crea una atmósfera cohesiva para tu evento.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#725C3A]/80">
                  <Check size={18} className="text-[#809671]" />
                  Fotos más profesionales
                </li>
                <li className="flex items-center gap-2 text-[#725C3A]/80">
                  <Check size={18} className="text-[#809671]" />
                  Ambiente más integrado
                </li>
                <li className="flex items-center gap-2 text-[#725C3A]/80">
                  <Check size={18} className="text-[#809671]" />
                  Tu evento más elegante
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img src={imgCamisaBlanca} alt="Camisa Blanca" className="rounded-2xl object-contain h-32 bg-white p-2" />
              <img src={imgChombaNegra} alt="Chomba Negra" className="rounded-2xl object-contain h-32 bg-white p-2" />
              <img src={imgCamisaChef} alt="Camisa Chef" className="rounded-2xl object-contain h-32 bg-white p-2" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Vestimenta;
