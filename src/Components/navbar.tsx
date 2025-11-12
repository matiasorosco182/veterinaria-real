const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "transparent",
        color: "#5277d",
      }}
      className="
        w-full px-6 py-2
        fixed top-0 z-[9999]
        lg:px-8 lg:py-3
      "
    >
      <div className="flex flex-wrap items-center justify-between w-full">
        <a
          href="#principal"
          className="text-base px-20.55 font-semibold py-2.5"
          style={{ color: "#000000" }}
        >
     
        </a>

        <div className="hidden lg:flex gap-9">
          <a href="#Contacto" className="text-sm" style={{ color: "#f7feef" }}>
            Contacto
          </a>
          <a href="#experiencia" className="text-sm" style={{ color: "#f7feef" }}>
            Experiencia
          </a>
          <a href="#habilidades" className="text-sm" style={{ color: "#f7feef" }}>
            Habilidades
          </a>
          <a href="#proyectos" className="text-sm" style={{ color: "#f7feef" }}>
            proyectos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
