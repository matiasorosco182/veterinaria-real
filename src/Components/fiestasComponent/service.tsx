import cateringImage from "../../assets/premium_photo-1661915652986-fe818e1973f9.avif";
import venueImage from "../../assets/mesa-decorada-para-una-fiesta-elegante.webp";
import fotoImage from "../../assets/consejos-fotograficos-fotografos-tips-portada-fotografo-profesional-pro-1024x682.jpg";
import decorImage from "../../assets/premium_photo-1677165323499-246986ddb0c6.avif";
import animacionImage from "../../assets/premium_photo-1663040486740-60e41b8fd1e3.avif";

const Services = () => {
  return (
    <section className="bg-[#f5efe8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800">
            Nuestros Servicios
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col items-center group">
            <div className="w-44 h-60 overflow-hidden rounded-[120px]">
              <img
                src={venueImage}
                alt="Alquiler de salón"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-gray-700">Alquiler de Salón</p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-44 h-60 overflow-hidden rounded-[120px]">
              <img
                src={cateringImage}
                alt="Catering"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-gray-700">Catering</p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-44 h-60 overflow-hidden rounded-[120px]">
              <img
                src={decorImage}
                alt="Decoración"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-gray-700">Decoración</p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-44 h-60 overflow-hidden rounded-[120px]">
              <img
                src={fotoImage}
                alt="Foto y Video"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-gray-700">Foto y Video</p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-44 h-60 overflow-hidden rounded-[120px]">
              <img
                src={animacionImage}
                alt="Animación"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-gray-700">Animación</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
