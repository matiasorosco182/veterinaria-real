import { Phone, Instagram,  Linkedin } from "lucide-react";
//import img from '../assets/jeremy-bishop-G9i_plbfDgk-unsplash.jpg'
import img1 from '../assets/WhatsApp Image 2025-06-30 at 02.27.21 (1).jpeg'
import pdf from '../assets/Cv Ignacio Matias Orosco Guevara.pdf'



const Contacto = () => {



  return (
   <div
  className="flex flex-col md:flex-row items-center justify-between md:min-h-screen bg-cover bg-center">
  <div/>
     
     
{/* Imagen izquierda */}
<div className="w-full md:w-1/2 h-80 md:h-screen flex items-center justify-center">
  <div className="w-64 h-64 bg-[#181b1e] rounded-full flex items-center justify-center overflow-hidden shadow-lg">
    <img
      src={img1}
      alt="Ignacio Orosco"
      className="w-full h-full object-cover"
    />
  </div>
  
</div>

      {/* Lado derecho: texto centrado */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6 p-6 text-center">
        <h1 className="text-6xl font-bold text-[#f8f9fa]"> <span className="text-green-600">Hi </span> Ignacio Orosco</h1>
        <h3 className="text-3xl font-bold text-[#f8f9fa]">Soy desarrollador <span className="text-green-600"> FullStack </span></h3>



        <div className="text-[#f8f9fa] text-2xl">
        </div>
       <div className="flex gap-4 mt-4">
  <a
    href="https://wa.me/2645769084"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#181b1e] text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 hover:text-black transition"
  >
    Contactame
  </a>

  <a href={pdf} download="Ignacio_Orosco_CV.pdf" className="bg-[#181b1e] text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 hover:text-black transition" >Descargar CV</a>
</div>

    <div className="flex gap-6 justify-center text-white text-2xl">
              <a href="#" aria-label="Facebook" className="hover:text-green-600">
                <Phone />
              </a>
              <a href="https://www.instagram.com/nacho.orosco2/" aria-label="Instagram" className="hover:text-green-600">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/in/ignacio-orosco-4400b1321/" aria-label="LinkedIn" className="hover:text-green-600">
                <Linkedin />
              </a>
            </div>

      </div>
    </div>
  );
};

export default Contacto;
