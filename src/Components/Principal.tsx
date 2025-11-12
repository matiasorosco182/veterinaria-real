// Importamos React y el hook useState para manejar estados locales (como el del botón de copiado)
import { useState } from "react";

// Importamos los íconos que usaremos desde lucide-react
// Mail: ícono de correo
// Copy / Check: íconos para copiar y confirmar copia
// Phone, Instagram, Linkedin: íconos de contacto/redes sociales
import {  Github, Linkedin, Mail, Copy, Check } from "lucide-react";

// Importamos la imagen y el archivo PDF (CV)
import img1 from "../assets/WhatsApp Image 2025-06-30 at 02.27.21 (1).jpeg";
import pdf from "../assets/Cv Ignacio Matias Orosco Guevara.pdf";

// Definimos el componente principal de la sección
const Principal = () => {
  // Estado que indica si el correo fue copiado o no
  const [copied, setCopied] = useState(false);

  // Correo que queremos mostrar y copiar
  const email = "matiasorosco182@gmail.com";

  // Función que copia el correo al portapapeles
  const handleCopy = () => {
    navigator.clipboard.writeText(email); // Copia el texto al portapapeles
    setCopied(true); // Cambia el estado a "copiado"
    setTimeout(() => setCopied(false), 2000); // Después de 2 segundos, vuelve al estado normal
  };

  // Retornamos la estructura JSX del componente
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:min-h-screen bg-cover bg-center">
      {/* ------------------------------ */}
      {/* SECCIÓN IZQUIERDA: FOTO DE PERFIL */}
      {/* ------------------------------ */}
      <div className="w-full md:w-1/2 h-80 md:h-screen flex items-center justify-center">
        <div className="w-64 h-64 bg-[#181b1e] rounded-full flex items-center justify-center overflow-hidden shadow-lg">
          {/* Imagen circular con sombra */}
          <img
            src={img1}
            alt="Ignacio Orosco"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ------------------------------ */}
      {/* SECCIÓN DERECHA: TEXTO, BOTONES Y REDES */}
      {/* ------------------------------ */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6 p-6 text-center">
        
        {/* Título principal con saludo */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#f8f9fa]">
          <span className="text-green-600">Hi! I'm </span> Matías Orosco
        </h1>

        {/* Subtítulo indicando profesión */}
        <h3 className="text-2xl md:text-3xl font-bold text-[#f8f9fa]">
          Soy desarrollador <span className="text-green-600">FullStack</span>
        </h3>

        {/* ------------------------------ */}
        {/* BOTONES PRINCIPALES */}
        {/* ------------------------------ */}
        <div className="flex gap-4 mt-4">
          {/* Botón de contacto vía WhatsApp */}
          <a
            href="https://wa.me/2645769084"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#181b1e] text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 hover:text-black transition"
          >
            Contactame
          </a>

          {/* Botón para descargar el CV */}
          <a
            href={pdf}
            download="Ignacio_Orosco_CV.pdf"
            className="bg-[#181b1e] text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 hover:text-black transition"
          >
            Descargar CV
          </a>
        </div>

        {/* ------------------------------ */}
        {/* ICONOS DE REDES SOCIALES */}
        {/* ------------------------------ */}
        <div className="flex gap-6 justify-center text-white text-2xl">
          {/* Enlace a WhatsApp */}
         

          {/* Enlace a Github */}
          <a
            href="https://github.com/matiasorosco182"
            aria-label="Github"
            className="hover:text-green-600"
          >
            <Github />
          </a>

          {/* Enlace a LinkedIn */}
          <a
            href="https://www.linkedin.com/in/matias-orosco-4400b1321/"
            aria-label="LinkedIn"
            className="hover:text-green-600"
          >
            <Linkedin />
          </a>
        </div>

        {/* ------------------------------ */}
        {/* BLOQUE DE CORREO CON BOTÓN DE COPIAR */}
        {/* ------------------------------ */}
        <div className="flex items-center gap-3 bg-[#181b1e] text-white px-5 py-3 rounded-full shadow-lg">
          {/* Ícono de correo */}
          <Mail className="w-6 h-6 text-green-600" />

          {/* Texto del correo (seleccionable) */}
          <p className="font-medium select-text">{email}</p>

          {/* Botón que copia el correo */}
          <button
            onClick={handleCopy} // Ejecuta la función de copiado
            className="ml-2 bg-transparent hover:bg-green-600 hover:text-black rounded-full p-2 transition"
            aria-label="Copiar correo"
          >
            {/* Si está copiado, muestra el check, si no, el ícono de copiar */}
            {copied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente para poder usarlo en otras partes del proyecto
export default Principal;
