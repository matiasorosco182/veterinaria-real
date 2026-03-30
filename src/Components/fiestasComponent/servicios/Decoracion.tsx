import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Star } from "lucide-react";

import decoAmarilla from "../../../assets/decoracion/decoAmarilla.jpg";
import decoAzul from "../../../assets/decoracion/decoAzul.jpg";
import decoRojo from "../../../assets/decoracion/decoRojo.jpg";

const servicios = [
  "Arreglos florales personalizados",
  "Iluminación ambiental LED",
  "Mantelería y vajilla",
  "Centros de mesa",
  "Ambientación con globos",
  "Backdrops fotográficos",
];

const colores = [
  { nombre: "Dorado", imagen: decoAmarilla },
  { nombre: "Azul", imagen: decoAzul },
  { nombre: "Rosa", imagen: decoRojo },
  { nombre: "Verde", imagen: decoAzul },
  { nombre: "Morado", imagen: decoRojo },
  { nombre: "Rojo", imagen: decoRojo },
  { nombre: "Blanco", imagen: decoAmarilla },
  { nombre: "Negro", imagen: decoRojo },
];

const Decoracion = ({ onSelect }: { onSelect?: () => void }) => {
  const [colorSeleccionado, setColorSeleccionado] = useState<string>("");
  const [imagenActual, setImagenActual] = useState<string>("");

  const handleColorSelect = (color: { nombre: string; imagen: string }) => {
    setColorSeleccionado(color.nombre);
    setImagenActual(color.imagen);
  };

  return (
    <section className="py-20 bg-white" id="servicio-decoracion">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="bg-[#D2AB80]/20 text-[#725C3A] px-4 py-1 rounded-full text-sm font-medium">
            Ambientación única
          </span>
          <div className="flex justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-[#D2AB80] fill-[#D2AB80]" />
            ))}
          </div>
          <h2 className="text-4xl font-bold text-[#725C3A] mt-4 mb-2">
            Decoración & Ambientación
          </h2>
          <p className="text-lg text-[#725C3A]/70">
            Transformamos tu espacio en un escenario único
          </p>
        </motion.div>

        {/* Imagen grande según color */}
        {imagenActual && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-10"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <img 
                src={imagenActual} 
                alt={`Decoración ${colorSeleccionado}`} 
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* Selector de colores */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-[#725C3A] mb-6 text-center">
            Elegí tu color principal
          </h3>
          <div className="flex justify-center flex-wrap gap-4">
            {colores.map((color) => (
              <motion.button
                key={color.nombre}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleColorSelect(color)}
                className={`p-4 rounded-2xl text-center transition-all ${
                  colorSeleccionado === color.nombre 
                    ? 'ring-4 ring-[#D2AB80] ring-offset-2 bg-[#FFF5E6]' 
                    : 'bg-[#F5F0E8] hover:bg-[#E5E0D8]'
                }`}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden mb-2">
                  <img 
                    src={color.imagen} 
                    alt={color.nombre} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className={`text-sm font-medium ${colorSeleccionado === color.nombre ? "text-[#725C3A]" : "text-[#725C3A]/60"}`}>
                  {color.nombre}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Servicios incluidos */}
        <div className="bg-[#FFF5E6] rounded-3xl p-8 mb-10">
          <h3 className="text-xl font-bold text-[#725C3A] mb-6 text-center">
            ¿Qué incluye nuestro servicio?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicios.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-[#725C3A]/80">
                <div className="w-6 h-6 bg-[#D2AB80]/20 rounded-full flex items-center justify-center">
                  <Check size={14} className="text-[#D2AB80]" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Botón confirmar */}
        <div className="text-center">
          <button
            onClick={() => { 
              localStorage.setItem("colorDecoracion", colorSeleccionado); 
              localStorage.setItem("decoradoraSolicitada", "Si"); 
              onSelect?.(); 
            }}
            disabled={!colorSeleccionado}
            className={`px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105 flex items-center gap-2 mx-auto ${
              colorSeleccionado 
                ? 'bg-[#725C3A] text-white hover:bg-[#8B7355]' 
                : 'bg-[#E5E0D8] text-[#A0A0A0] cursor-not-allowed'
            }`}
          >
            <Sparkles size={20} />
            {colorSeleccionado ? `Confirmar: ${colorSeleccionado}` : "Seleccioná un color"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Decoracion;
