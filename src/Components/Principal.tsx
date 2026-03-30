import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Check, ArrowDown, Sparkles, Camera, PartyPopper, Utensils, Palmtree, Music, Star, Shirt } from "lucide-react";

import { ServicioModal } from "./fiestasComponent/servicios";

// import fotoImage from "../assets/consejos-fotograficos-fotografos-tips-portada-fotografo-profesional-pro-1024x682.jpg";
import cateringImage from "../assets/premium_photo-1661915652986-fe818e1973f9.avif";
import venueImage from "../assets/mesa-decorada-para-una-fiesta-elegante.webp";
import decorImage from "../assets/premium_photo-1677165323499-246986ddb0c6.avif";
import animImage from "../assets/premium_photo-1663040486740-60e41b8fd1e3.avif";

const servicios = [
  { id: 1, nombre: "Salón", icono: Palmtree, imagen: venueImage, desc: "Salones exclusivos para tu evento", ref: "servicio-salon", key: "salon" },
  { id: 2, nombre: "Catering", icono: Utensils, imagen: cateringImage, desc: "Comida deliciosa y variados menú", ref: "servicio-catering", key: "catering" },
  { id: 3, nombre: "Decoración", icono: Sparkles, imagen: decorImage, desc: "Ambientación única y especial", ref: "servicio-decoracion", key: "decoracion" },
  // { id: 4, nombre: "Foto y Video", icono: Camera, imagen: fotoImage, desc: "Capturamos tus mejores momentos", ref: "servicio-foto", key: "foto" },
  { id: 4, nombre: "Animación", icono: PartyPopper, imagen: animImage, desc: "Divierten a todos", ref: "servicio-animacion", key: "animacion" },
  { id: 5, nombre: "Música", icono: Music, imagen: cateringImage, desc: "La mejor ambientación musical", ref: "servicio-musica", key: "musica" },
  { id: 6, nombre: "Vestimenta", icono: Shirt, imagen: decorImage, desc: "Dress code para tu evento", ref: "servicio-vestimenta", key: "vestimenta" },
];

const Principal = () => {

const [personas, setPersonas] = useState<number | "">("");
const [decoradora, setDecoradora] = useState<string>("No");
const [colorDecoracion, setColorDecoracion] = useState<string>("");
const [serviciosSeleccionados, setServiciosSeleccionados] = useState<number[]>([]);
const [paso, setPaso] = useState(0);
const [servicioExpandido, setServicioExpandido] = useState<string | null>(null);
const [, setMostrarFormulario] = useState(false);

const [salonSeleccionado, setSalonSeleccionado] = useState<string>("");
const [platosSeleccionados, setPlatosSeleccionados] = useState<string[]>([]);
const [paqueteFotoVideo, setPaqueteFotoVideo] = useState<string>("");
const [animacionSeleccionada, setAnimacionSeleccionada] = useState<string>("");
const [musicaSeleccionada, setMusicaSeleccionada] = useState<string>("");
const [vestimentaSeleccionada, setVestimentaSeleccionada] = useState<string>("");

const telefono = "2645769084";

const toggleServicio = (id: number) => {
  setServiciosSeleccionados(prev => 
    prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
  );
};

const mensaje = encodeURIComponent(
  `🎉 Hola! Quiero información para mi evento:

📋 RESUMEN:
• Personas: ${personas || "No especificado"}
• Servicios: ${serviciosSeleccionados.length > 0 ? serviciosSeleccionados.map(id => servicios.find(s => s.id === id)?.nombre).join(", ") : "No especificado"}
${salonSeleccionado ? `• Salon: ${salonSeleccionado}` : ""}
${platosSeleccionados.length > 0 ? `• Comida:\n  ${platosSeleccionados.map(p => "• " + p).join("\n  ")}` : ""}
${decoradora === "Si" || decoradora === "Sí" ? `• Decoracion: Si - Color: ${colorDecoracion || "No especificado"}` : ""}
${vestimentaSeleccionada ? `• Vestimenta: ${vestimentaSeleccionada}` : ""}
${animacionSeleccionada ? `• Animacion: ${animacionSeleccionada}` : ""}
${musicaSeleccionada ? `• Musica: ${musicaSeleccionada}` : ""}

¡Gracias!`
);

const whatsappLink = `https://wa.me/${telefono}?text=${mensaje}`;

const siguientePaso = () => {
  if (paso < 3) setPaso(paso + 1);
};

const anteriorPaso = () => {
  if (paso > 0) setPaso(paso - 1);
};

const puedeContinuar = () => {
  switch(paso) {
    case 0: return Number(personas) > 0;
    case 1: return true;
    default: return true;
  }
};

useEffect(() => {
  const handleScroll = () => {
    const element = document.getElementById('hero-form');
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setMostrarFormulario(true);
      }
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

useEffect(() => {
  if (servicioExpandido) {
    localStorage.removeItem("salonSeleccionado");
    localStorage.removeItem("platosSeleccionados");
    localStorage.removeItem("decoradoraSolicitada");
    localStorage.removeItem("colorDecoracion");
    localStorage.removeItem("paqueteFotoVideo");
    localStorage.removeItem("animacionSeleccionada");
    localStorage.removeItem("musicaSeleccionada");
    localStorage.removeItem("vestimentaSeleccionada");
  }
}, [servicioExpandido]);

  return (
    <div className="font-sans text-[#2D2D2D] bg-[#FFFDF9]">

      {/* HEADER FIJO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#725C3A]">🎉 Gestión de Eventos</h1>
          <a
            href={whatsappLink}
            target="_blank"
            className="bg-[#25D366] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#128C7E] transition flex items-center gap-2"
          >
            <Phone size={16} />
            Contactar
          </a>
        </div>
      </header>

      {/* HERO CON FORMULARIO */}
      <section className="min-h-screen pt-20 relative overflow-hidden">
        {/* Fondo con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5E6] via-[#FFFDF9] to-[#F5F0E8]"></div>
        
        {/* Formas decorativas */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#D2AB80]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#809671]/20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto izquierdo */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-[#D2AB80]/20 text-[#725C3A] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                👋 ¡Hola! Te ayudamos a planificar tu evento
              </motion.div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-[#725C3A] mb-6 leading-tight">
                Crea momentos <span className="text-[#D2AB80]">inolvidables</span>
              </h1>
              
              <p className="text-xl text-[#725C3A]/70 mb-8">
                Bodas, cumpleaños, eventos corporativos y más. 
                Completá el formulario y te enviamos una cotización en minutos.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-[#725C3A]/60">
                  <Check className="text-[#809671]" size={20} />
                  <span>Respuesta rápida</span>
                </div>
                <div className="flex items-center gap-2 text-[#725C3A]/60">
                  <Check className="text-[#809671]" size={20} />
                  <span>Precios claros</span>
                </div>
                <div className="flex items-center gap-2 text-[#725C3A]/60">
                  <Check className="text-[#809671]" size={20} />
                  <span>Todo en un lugar</span>
                </div>
              </div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-12 lg:hidden"
              >
                <ArrowDown className="mx-auto text-[#D2AB80]" size={32} />
              </motion.div>
            </motion.div>

            {/* FORMULARIO INTERACTIVO */}
            <motion.div 
              id="hero-form"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-6 md:p-8"
            >
              {/* Progress bar */}
              <div className="flex gap-2 mb-8">
                {[0, 1, 2].map(i => (
                  <div key={i} className={`h-2 flex-1 rounded-full transition-all duration-500 ${i <= paso ? 'bg-[#D2AB80]' : 'bg-[#E5E0D8]'}`}></div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* PASO 1: Personas */}
                {paso === 0 && (
                  <motion.div
                    key="paso1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D2AB80] to-[#725C3A] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Utensils className="text-white" size={28} />
                    </div>
                    <h2 className="text-2xl font-bold text-[#725C3A] mb-2">
                      ¿Cuántas personas asisten?
                    </h2>
                    <p className="text-[#725C3A]/60 mb-8">Contanos cuántos invitados tendés</p>

                    <input
                      type="number"
                      min="1"
                      value={personas}
                      onChange={(e) => setPersonas(Number(e.target.value))}
                      placeholder="Ej: 50"
                      className="w-full text-center text-4xl font-bold p-6 rounded-2xl border-3 border-[#E5E0D8] focus:border-[#D2AB80] focus:outline-none transition-all bg-[#FFFDF9]"
                    />

                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                      {[20, 50, 100, 200].map(num => (
                        <button
                          key={num}
                          onClick={() => setPersonas(num)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition ${personas === num ? 'bg-[#725C3A] text-white' : 'bg-[#F5F0E8] text-[#725C3A] hover:bg-[#E5E0D8]'}`}
                        >
                          {num} personas
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* PASO 2: Servicios */}
                {paso === 1 && (
                  <motion.div
                    key="paso2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#D2AB80] to-[#725C3A] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="text-white" size={28} />
                      </div>
                      <h2 className="text-2xl font-bold text-[#725C3A]">
                        ¿Qué servicios necesitás?
                      </h2>
                      <p className="text-[#725C3A]/60">Seleccioná los que quieras (podés elegir varios)</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {servicios.map(servicio => (
                        <motion.button
                          key={servicio.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setServicioExpandido(servicio.key);
                          }}
                          className={`p-4 rounded-2xl text-left transition-all duration-300 ${
                            serviciosSeleccionados.includes(servicio.id)
                              ? 'bg-[#725C3A] text-white shadow-lg'
                              : 'bg-[#FFFDF9] border-2 border-[#E5E0D8] hover:border-[#D2AB80]'
                          }`}
                        >
                          <servicio.icono size={24} className="mb-2" />
                          <p className="font-semibold">{servicio.nombre}</p>
                        </motion.button>
                      ))}
                    </div>

                    <p className="text-center text-sm text-[#725C3A]/60 mt-4">
                      {serviciosSeleccionados.length} servicio{serviciosSeleccionados.length !== 1 ? 's' : ''} seleccionado{serviciosSeleccionados.length !== 1 ? 's' : ''}
                    </p>
                  </motion.div>
                )}

                {/* PASO 3: Uniforme y Enviar */}
                {paso === 2 && (
                  <motion.div
                    key="paso3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D2AB80] to-[#725C3A] rounded-full flex items-center justify-center mx-auto mb-6">
                      <PartyPopper className="text-white" size={28} />
                    </div>
                    <h2 className="text-2xl font-bold text-[#725C3A] mb-2">
                      Resumen de tu evento
                    </h2>
                    <p className="text-[#725C3A]/60 mb-6">Revisá todo antes de enviar</p>

                    {/* Resumen completo */}
                    <div className="bg-white rounded-2xl p-6 mb-6 text-left shadow-lg border-2 border-[#E5E0D8]">
                      {/* Personas */}
                      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#E5E0D8]">
                        <div className="w-10 h-10 bg-[#D2AB80]/20 rounded-full flex items-center justify-center">
                          <Utensils size={20} className="text-[#D2AB80]" />
                        </div>
                        <div>
                          <p className="text-xs text-[#725C3A]/60">Cantidad de invitados</p>
                          <p className="font-bold text-[#725C3A]">{personas} personas</p>
                        </div>
                      </div>

                      {/* Servicios */}
                      {serviciosSeleccionados.length > 0 && (
                        <div className="mb-4 pb-4 border-b border-[#E5E0D8]">
                          <p className="text-xs text-[#725C3A]/60 mb-2">Servicios seleccionados</p>
                          <div className="space-y-2">
                            {serviciosSeleccionados.map(id => {
                              const servicio = servicios.find(s => s.id === id);
                              if (!servicio) return null;
                              return (
                                <div key={id} className="flex items-center gap-2 text-[#725C3A]">
                                  <servicio.icono size={18} className="text-[#D2AB80]" />
                                  <span className="font-medium">{servicio.nombre}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Detalles de cada servicio */}
                      <div className="space-y-3 mb-4 pb-4 border-b border-[#E5E0D8]">
                        {salonSeleccionado && (
                          <div className="flex items-center gap-2">
                            <Palmtree size={18} className="text-[#D2AB80]" />
                            <span className="text-[#725C3A]"><span className="font-medium">Salón:</span> {salonSeleccionado}</span>
                          </div>
                        )}
                        
                        {platosSeleccionados.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Utensils size={18} className="text-[#D2AB80]" />
                              <span className="text-[#725C3A] font-medium">Menú seleccionado:</span>
                            </div>
                            <div className="ml-6 space-y-1">
                              {platosSeleccionados.map((plato, i) => (
                                <p key={i} className="text-sm text-[#725C3A]/70">• {plato}</p>
                              ))}
                            </div>
                          </div>
                        )}

                        {(decoradora === "Si" || decoradora === "Sí") && (
                          <div className="flex items-center gap-2">
                            <Sparkles size={18} className="text-[#D2AB80]" />
                            <span className="text-[#725C3A]"><span className="font-medium">Decoración:</span> {colorDecoracion}</span>
                          </div>
                        )}

                        {paqueteFotoVideo && (
                          <div className="flex items-center gap-2">
                            <Camera size={18} className="text-[#D2AB80]" />
                            <span className="text-[#725C3A]"><span className="font-medium">Foto/Video:</span> {paqueteFotoVideo}</span>
                          </div>
                        )}

                        {animacionSeleccionada && (
                          <div className="flex items-center gap-2">
                            <PartyPopper size={18} className="text-[#D2AB80]" />
                            <span className="text-[#725C3A]"><span className="font-medium">Animación:</span> {animacionSeleccionada}</span>
                          </div>
                        )}

                        {musicaSeleccionada && (
                          <div className="flex items-center gap-2">
                            <Music size={18} className="text-[#D2AB80]" />
                            <span className="text-[#725C3A]"><span className="font-medium">Música:</span> {musicaSeleccionada}</span>
                          </div>
                        )}

                        {vestimentaSeleccionada && (
                          <div className="flex items-center gap-2">
                            <Shirt size={18} className="text-[#D2AB80]" />
                            <span className="text-[#725C3A]"><span className="font-medium">Vestimenta:</span> {vestimentaSeleccionada}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      className="block w-full bg-[#25D366] text-white text-center text-lg font-bold py-5 rounded-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-[1.02] shadow-lg"
                    >
                      <Phone className="inline-block mr-2" size={20} />
                      Enviar solicitud
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Botones de navegación */}
              {paso < 2 && (
                <div className="flex justify-between mt-8">
                  <button
                    onClick={anteriorPaso}
                    disabled={paso === 0}
                    className={`px-6 py-3 rounded-xl font-medium transition ${
                      paso === 0 ? 'text-[#E5E0D8] cursor-not-allowed' : 'text-[#725C3A] hover:bg-[#F5F0E8]'
                    }`}
                  >
                    ← Atrás
                  </button>
                  <button
                    onClick={siguientePaso}
                    disabled={!puedeContinuar()}
                    className={`px-8 py-3 rounded-xl font-medium transition flex items-center gap-2 ${
                      puedeContinuar()
                        ? 'bg-[#725C3A] text-white hover:bg-[#8B7355]'
                        : 'bg-[#E5E0D8] text-[#A0A0A0] cursor-not-allowed'
                    }`}
                  >
                    Siguiente →
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[#725C3A]/50"
        >
          <span className="text-sm">Scroll para ver más</span>
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* SERVICIOS - RESUMIDOS */}
      <section className="py-24 bg-white" id="servicios">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#725C3A] mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-[#725C3A]/70">
              Todo lo que necesitás para un evento perfecto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => {
              const getDetalle = () => {
                switch(servicio.key) {
                  case "salon": return salonSeleccionado;
                  case "catering": return platosSeleccionados.length > 0 ? `${platosSeleccionados.length} platos` : "";
                  case "decoracion": return decoradora === "Sí" ? colorDecoracion : "";
                  case "vestimenta": return vestimentaSeleccionada;
                  case "animacion": return animacionSeleccionada;
                  case "musica": return musicaSeleccionada;
                  default: return "";
                }
              };
              const detalle = getDetalle();
              
              return (
              <motion.div
                key={servicio.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setServicioExpandido(servicio.key)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#D2AB80]"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={servicio.imagen} 
                    alt={servicio.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {serviciosSeleccionados.includes(servicio.id) && (
                    <div className="absolute top-3 right-3 bg-[#25D366] text-white w-8 h-8 rounded-full flex items-center justify-center">
                      <Check size={16} />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#D2AB80]/20 rounded-xl flex items-center justify-center">
                      <servicio.icono size={20} className="text-[#D2AB80]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#725C3A]">{servicio.nombre}</h3>
                  </div>
                  <p className="text-[#725C3A]/70 text-sm mb-2">{servicio.desc}</p>
                  {detalle && (
                    <div className="bg-[#FFF5E6] px-3 py-1.5 rounded-lg inline-block">
                      <p className="text-xs font-medium text-[#725C3A]">{detalle}</p>
                    </div>
                  )}
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-24 bg-[#FFF5E6]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#725C3A] mb-4">
              ¿Por qué elegirnos?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { titulo: "Experiencia", desc: "Años organizando eventos únicos", icon: Star },
              { titulo: "Todo incluido", desc: "No necesitás contratar proveedores", icon: Sparkles },
              { titulo: "Atención personalizada", desc: "Te acompañamos en todo el proceso", icon: Phone },
            ].map((item, index) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#D2AB80]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={28} className="text-[#D2AB80]" />
                </div>
                <h3 className="text-xl font-bold text-[#725C3A] mb-2">{item.titulo}</h3>
                <p className="text-[#725C3A]/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 bg-[#725C3A] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { nombre: "Ana & Carlos", texto: "Nuestro casamiento fue perfecto. Todo estuvo organizado al detalle. ¡Los recomendamos 100%!" },
              { nombre: "María González", texto: "El cumple de mis hijos fue increíble. La animación mantuvo a todos entretenidos. ¡Volveremos!" },
            ].map((testimonio, index) => (
              <motion.div
                key={testimonio.nombre}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#8B7355] p-8 rounded-3xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-[#E5D2B8] fill-[#E5D2B8]" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">"{testimonio.texto}"</p>
                <p className="font-bold text-[#E5D2B8]">{testimonio.nombre}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-br from-[#D2AB80] to-[#725C3A] text-white text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para tu evento?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Completá el formulario y te enviamos una cotización personalizada
          </p>
          <a
            href="#hero-form"
            className="inline-flex items-center gap-3 bg-white text-[#725C3A] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#FFF5E6] transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Phone />
            Contactar por WhatsApp
          </a>
        </motion.div>
      </section>

      {/* MODAL DE SERVICIOS */}
      <ServicioModal 
        servicioActual={servicioExpandido} 
        onClose={() => {
          let servicioElegido = false;
          
          const salon = localStorage.getItem("salonSeleccionado");
          if (salon) { setSalonSeleccionado(salon); servicioElegido = true; }
          
          const platos = localStorage.getItem("platosSeleccionados");
          if (platos) { setPlatosSeleccionados(JSON.parse(platos)); servicioElegido = true; }
          
          const decoradoraLocal = localStorage.getItem("decoradoraSolicitada");
          if (decoradoraLocal) { setDecoradora("Sí"); servicioElegido = true; }
          
          const color = localStorage.getItem("colorDecoracion");
          if (color) { setColorDecoracion(color); servicioElegido = true; }
          
          const fotoVideo = localStorage.getItem("paqueteFotoVideo");
          if (fotoVideo) { setPaqueteFotoVideo(fotoVideo); servicioElegido = true; }
          
          const animacion = localStorage.getItem("animacionSeleccionada");
          if (animacion) { setAnimacionSeleccionada(animacion); servicioElegido = true; }
          
          const musica = localStorage.getItem("musicaSeleccionada");
          if (musica) { setMusicaSeleccionada(musica); servicioElegido = true; }
          
          const vestimenta = localStorage.getItem("vestimentaSeleccionada");
          if (vestimenta) { setVestimentaSeleccionada(vestimenta); servicioElegido = true; }
          
          if (servicioElegido && servicioExpandido) {
            const idMap: Record<string, number> = { salon: 1, catering: 2, decoracion: 3, animacion: 4, musica: 5, vestimenta: 6 };
            const id = idMap[servicioExpandido];
            if (id && !serviciosSeleccionados.includes(id)) {
              setServiciosSeleccionados(prev => [...prev, id]);
            }
          }
          
          localStorage.removeItem("salonSeleccionado");
          localStorage.removeItem("platosSeleccionados");
          localStorage.removeItem("decoradoraSolicitada");
          localStorage.removeItem("colorDecoracion");
          localStorage.removeItem("paqueteFotoVideo");
          localStorage.removeItem("animacionSeleccionada");
          localStorage.removeItem("musicaSeleccionada");
          localStorage.removeItem("vestimentaSeleccionada");
          
          setServicioExpandido(null);
          setPaso(1);
        }}
        onSelect={(servicio) => {
          if (servicio === "decoracion") { 
            const color = localStorage.getItem("colorDecoracion"); 
            if (color) { 
              setDecoradora("Sí"); 
              setColorDecoracion(color); 
              setServiciosSeleccionados(prev => prev.includes(3) ? prev : [...prev, 3]);
            }
          }
          else if (servicio === "foto") {
            const fotoVideo = localStorage.getItem("paqueteFotoVideo");
            if (fotoVideo) {
              setPaqueteFotoVideo(fotoVideo);
              setServiciosSeleccionados(prev => prev.includes(4) ? prev : [...prev, 4]);
            }
          }
          else if (servicio === "salon") {
            const salon = localStorage.getItem("salonSeleccionado");
            if (salon) {
              setSalonSeleccionado(salon);
              setServiciosSeleccionados(prev => prev.includes(1) ? prev : [...prev, 1]);
            }
          }
          else if (servicio === "catering") {
            const platos = localStorage.getItem("platosSeleccionados");
            if (platos) {
              setPlatosSeleccionados(JSON.parse(platos));
              setServiciosSeleccionados(prev => prev.includes(2) ? prev : [...prev, 2]);
            }
          }
          else if (servicio === "animacion") {
            const animacion = localStorage.getItem("animacionSeleccionada");
            if (animacion) {
              setAnimacionSeleccionada(animacion);
              setServiciosSeleccionados(prev => prev.includes(4) ? prev : [...prev, 4]);
            }
          }
          else if (servicio === "musica") {
            const musica = localStorage.getItem("musicaSeleccionada");
            if (musica) {
              setMusicaSeleccionada(musica);
              setServiciosSeleccionados(prev => prev.includes(5) ? prev : [...prev, 5]);
            }
          }
          else if (servicio === "vestimenta") {
            const vestimenta = localStorage.getItem("vestimentaSeleccionada");
            if (vestimenta) {
              setVestimentaSeleccionada(vestimenta);
              setServiciosSeleccionados(prev => prev.includes(6) ? prev : [...prev, 6]);
            }
          }
          localStorage.removeItem("salonSeleccionado");
          localStorage.removeItem("platosSeleccionados");
          localStorage.removeItem("decoradoraSolicitada");
          localStorage.removeItem("colorDecoracion");
          localStorage.removeItem("paqueteFotoVideo");
          localStorage.removeItem("animacionSeleccionada");
          localStorage.removeItem("musicaSeleccionada");
          localStorage.removeItem("vestimentaSeleccionada");
          setServicioExpandido(null);
          setPaso(1);
        }}
      />

      {/* FOOTER */}
      <footer className="py-8 bg-[#2D2D2D] text-white/60 text-center">
        <p>© 2025 Gestión de Eventos. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
};

export default Principal;
