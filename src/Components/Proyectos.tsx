import imgLanding from "../assets/landing-page.png";
import imgInventory from "../assets/tu momento.png";   // <-- por ejemplo

const projects = [
  {
    title: "Landing Page Grupo de Mozos",
    description: "Landing page hecha en React + Tailwind",
    image: imgLanding,
    url: "https://mozos-y-bartenders.netlify.app/",
  },
  {
    title: "Tu momento",
    description: "aplicacion de fotografia para eventos Frontend hecha en React + Tailwind  y Back hecha Express formato API",
    image: imgInventory,
    url: "https://naron.netlify.app/",
  },

];

const Proyectos = () => {
  return (
    <section className="bg-[transparent] py-7 px-7 md:px-9  mt-12 mb-10 ">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#f8f9fa] mb-8">
          Mis Proyectos
        </h2>
        <p className="text-lg md:text-xl text-[#f8f9fa] mb-10">
          Algunos de los trabajos que he realizado:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#122c4f] p-6 rounded-xl shadow-md text-center flex flex-col justify-between"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="text-[#f8f9fa] text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-[#f8f9fa]">{project.description}</p>
              <br></br>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                className="bg-[#181b1e] text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 hover:text-black transition"
                >
                  Ver proyecto
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
