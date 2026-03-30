import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Salon from "./Salon";
import Catering from "./Catering";
import Decoracion from "./Decoracion";
import FotoVideo from "./FotoVideo";
import Animacion from "./Animacion";
import Musica from "./Musica";
import Vestimenta from "./Vestimenta";

interface Props {
  servicioActual: string | null;
  onClose: () => void;
  onSelect: (servicio: string) => void;
}

const ServicioModal = ({ servicioActual, onClose, onSelect }: Props) => {
  const renderServicio = () => {
    switch (servicioActual) {
      case "salon":
        return <Salon onSelect={() => onSelect("salon")} />;
      case "catering":
        return <Catering onSelect={() => onSelect("catering")} />;
      case "decoracion":
        return <Decoracion onSelect={() => onSelect("decoracion")} />;
      case "foto":
        return <FotoVideo onSelect={() => onSelect("foto")} />;
      case "animacion":
        return <Animacion onSelect={() => onSelect("animacion")} />;
      case "musica":
        return <Musica onSelect={() => onSelect("musica")} />;
      case "vestimenta":
        return <Vestimenta onSelect={() => onSelect("vestimenta")} />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {servicioActual && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur rounded-full p-3 shadow-lg hover:bg-white transition-colors"
          >
            <X size={24} className="text-[#725C3A]" />
          </button>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative min-h-screen bg-white"
          >
            {renderServicio()}
          </motion.div>

          {/* Botón flotante volver arriba */}
          <button
            onClick={onClose}
            className="fixed bottom-8 left-8 z-50 bg-[#725C3A] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#8B7355] transition-all flex items-center gap-2"
          >
            <ArrowRight className="rotate-180" size={18} />
            Volver al formulario
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicioModal;
