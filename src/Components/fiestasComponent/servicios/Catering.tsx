import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

import imgEmpanadas from "../../../assets/Comida/Empanadas.png";
import imgJamon from "../../../assets/Comida/Jamon crudo.png";
import imgPrimavera from "../../../assets/Comida/Primavera.png";
import imgNiIdea from "../../../assets/Comida/ni idea.png";
import imgAsado from "../../../assets/Comida/asado.png";
import imgPollo from "../../../assets/Comida/pollo.png";
import imgPaella from "../../../assets/Comida/Paella.jpg";
import imgChivito from "../../../assets/Comida/chivito.jpg";

interface Plato {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
}

interface Categoria {
  id: number;
  nombre: string;
  platos: Plato[];
}

const categorias: Categoria[] = [
  {
    id: 1,
    nombre: "Entradas",
    platos: [
      { id: 1, nombre: "Empanadas", imagen: imgEmpanadas, descripcion: "Empanadas artesanales" },
      { id: 2, nombre: "Jamón Crudo", imagen: imgJamon, descripcion: "Jamón crudo conunter" },
      { id: 3, nombre: "Ensalada Primavera", imagen: imgPrimavera, descripcion: "Ensalada fresca" },
      { id: 4, nombre: "Canapés Variados", imagen: imgNiIdea, descripcion: "Selección de canapés" },
    ]
  },
  {
    id: 2,
    nombre: "Platos Principales",
    platos: [
      { id: 5, nombre: "Asado", imagen: imgAsado, descripcion: "Asado argentino con guarniciones" },
      { id: 6, nombre: "Pollo", imagen: imgPollo, descripcion: "Pollo al horno" },
      { id: 7, nombre: "Paella", imagen: imgPaella, descripcion: "Paella española" },
      { id: 8, nombre: "Chivito", imagen: imgChivito, descripcion: "Chivito argentino" },
    ]
  },
  {
    id: 3,
    nombre: "Postres",
    platos: [
      { id: 9, nombre: "Torta de Chocolate", imagen: imgNiIdea, descripcion: "Torta artesanal" },
      { id: 10, nombre: "Copa de Frutas", imagen: imgPrimavera, descripcion: "Frutas frescas" },
      { id: 11, nombre: "Flan Casero", imagen: imgJamon, descripcion: "Flan con crema" },
      { id: 12, nombre: "Postre Variado", imagen: imgEmpanadas, descripcion: "Variedad de postres" },
    ]
  },
  {
    id: 4,
    nombre: "Menú Celíaco",
    platos: [
      { id: 13, nombre: "Entradas Sin TACC", imagen: imgPrimavera, descripcion: "Entradas sin gluten" },
      { id: 14, nombre: "Plato Principal Sin TACC", imagen: imgPollo, descripcion: "Plato principal sin gluten" },
      { id: 15, nombre: "Postre Sin TACC", imagen: imgNiIdea, descripcion: "Postre sin gluten" },
      { id: 16, nombre: "Menú Completo Celíaco", imagen: imgChivito, descripcion: "Menú completo sin gluten" },
    ]
  }
];

const Catering = ({ onSelect }: { onSelect?: () => void }) => {
  const [categoriaActual, setCategoriaActual] = useState<Categoria>(categorias[0]);
  const [platoSeleccionado, setPlatoSeleccionado] = useState<Plato | null>(null);
  const [platosElegidos, setPlatosElegidos] = useState<string[]>([]);

  const togglePlato = (plato: Plato) => {
    setPlatosElegidos(prev => 
      prev.includes(plato.nombre) 
        ? prev.filter(p => p !== plato.nombre)
        : [...prev, plato.nombre]
    );
  };

  const handleConfirmar = () => {
    localStorage.setItem("platosSeleccionados", JSON.stringify(platosElegidos));
    onSelect?.();
  };

  return (
    <section className="py-20 bg-[#FFF5E6]" id="servicio-catering">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="bg-[#D2AB80]/20 text-[#725C3A] px-4 py-1 rounded-full text-sm font-medium">
            Gastronomía
          </span>
          <h2 className="text-4xl font-bold text-[#725C3A] mt-4 mb-2">
            Catering & Gastronomía
          </h2>
          <p className="text-[#725C3A]/70">
            Deliciosas opciones gastronómicas para tu evento
          </p>
        </motion.div>

        {/* Categorías */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setCategoriaActual(cat); setPlatoSeleccionado(null); }}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                categoriaActual.id === cat.id
                  ? 'bg-[#725C3A] text-white shadow-lg'
                  : 'bg-white text-[#725C3A] hover:bg-[#E5E0D8]'
              }`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Vista previa de platos seleccionados */}
        {platosElegidos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="font-bold text-[#725C3A] mb-4 text-lg">Vista previa de tu menú:</h3>
            <div className="flex flex-wrap gap-3">
              {platosElegidos.map((plato, index) => (
                <span 
                  key={index}
                  className="bg-[#809671] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                >
                  {plato}
                  <button 
                    onClick={() => togglePlato({ id: 0, nombre: plato, imagen: "", descripcion: "" } as Plato)}
                    className="hover:bg-[#6a7a5c] rounded-full p-0.5"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Grid de platos */}
        <motion.div
          key={categoriaActual.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categoriaActual.platos.map((plato, index) => (
            <motion.div
              key={plato.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => togglePlato(plato)}
              className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group relative ${
                platosElegidos.includes(plato.nombre) ? 'ring-4 ring-[#809671]' : ''
              }`}
            >
              {platosElegidos.includes(plato.nombre) && (
                <div className="absolute top-2 right-2 bg-[#809671] text-white w-8 h-8 rounded-full flex items-center justify-center z-10">
                  <Check size={16} />
                </div>
              )}
              <div className="h-48 overflow-hidden">
                <img 
                  src={plato.imagen} 
                  alt={plato.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#725C3A] mb-1">{plato.nombre}</h3>
                <p className="text-[#725C3A]/60 text-sm">{plato.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Botón confirmar selección */}
        {platosElegidos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <p className="text-[#725C3A] mb-4">{platosElegidos.length} plato{platosElegidos.length !== 1 ? 's' : ''} seleccionado{platosElegidos.length !== 1 ? 's' : ''}</p>
            <button
              onClick={handleConfirmar}
              className="bg-[#725C3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#8B7355] transition-all hover:scale-105 flex items-center gap-2 mx-auto"
            >
              <Check size={20} />
              Confirmar selección
            </button>
          </motion.div>
        )}

        {/* Info de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#725C3A] mb-4">
                ¿Te gustaría personalizar el menú?
              </h3>
              <p className="text-[#725C3A]/70 mb-6">
                Contamos con chefs especializados que pueden adaptar el menú 
                a tus preferencias y restricciones alimentarias. 
                También podemos incluir opciones vegetarianas, veganas y sin gluten.
              </p>
              <ul className="space-y-2 mb-6">
                {["Menú personalizado", "Degustación previa", "Vegetariano/Vegano", "Sin gluten"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#725C3A]/80">
                    <Check size={18} className="text-[#809671]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => { if (platosElegidos.length > 0) { handleConfirmar(); } else { onSelect(); } }}
                className="bg-[#725C3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#8B7355] transition-all hover:scale-105 flex items-center gap-2"
              >
                {platosElegidos.length > 0 ? "Confirmar selección" : "Consultar menú"}
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={imgEmpanadas} alt="" className="rounded-2xl object-cover h-40 w-full" />
              <img src={imgAsado} alt="" className="rounded-2xl object-cover h-40 w-full" />
              <img src={imgPollo} alt="" className="rounded-2xl object-cover h-40 w-full" />
              <img src={imgChivito} alt="" className="rounded-2xl object-cover h-40 w-full" />
            </div>
          </div>
        </motion.div>

        {/* Modal de plato */}
        <AnimatePresence>
          {platoSeleccionado && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setPlatoSeleccionado(null)}
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
              >
                <button
                  onClick={() => setPlatoSeleccionado(null)}
                  className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2"
                >
                  <X size={20} className="text-[#725C3A]" />
                </button>
                <img 
                  src={platoSeleccionado.imagen} 
                  alt={platoSeleccionado.nombre}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#725C3A] mb-2">
                    {platoSeleccionado.nombre}
                  </h3>
                  <p className="text-[#725C3A]/70 mb-6">
                    {platoSeleccionado.descripcion}
                  </p>
                  <button
                    onClick={() => { onSelect(); setPlatoSeleccionado(null); }}
                    className="w-full bg-[#725C3A] text-white py-3 rounded-xl font-semibold hover:bg-[#8B7355] transition"
                  >
                    Incluir en mi evento
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Catering;
