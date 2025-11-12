import { useState } from "react";
import { motion } from "framer-motion";
import { PawPrint, Phone, MapPin, Mail, Heart, Stethoscope, Syringe, Calendar } from "lucide-react";


import imagen from "../assets/premium_photo-1661915652986-fe818e1973f9.avif"
import imagen2 from "../assets/premium_photo-1663039950073-187c977da2e9.avif"
import imagen3 from "../assets/premium_photo-1677165323499-246986ddb0c6.avif"
import imagen4 from "../assets/premium_photo-1677165479422-bc6eb405bd21.avif"
import imagen5 from "../assets/premium_photo-1663040486740-60e41b8fd1e3.avif"
import imagen6 from "../assets/premium_photo-1661954422066-36639b6f13b5.avif"




export default function VetLanding() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-emerald-50 text-slate-800 scroll-smooth">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg">
            <PawPrint size={20} />
          </div>
          <div>
            <h1 className="font-bold text-lg">Clinivet</h1>
            <p className="text-sm text-slate-600">Cuidado completo para tu mascota</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#quienes" className="hover:underline">Quiénes Somos</a>
          <a href="#info" className="hover:underline">Información</a>
          <a href="#galeria" className="hover:underline">Galería</a>
          <a href="#contacto" className="px-4 py-2 bg-emerald-600 text-white rounded-lg shadow hover:brightness-95">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Cariño, salud y profesionalismo para tu mascota
          </h2>
          <p className="text-lg text-slate-700">
            Atención veterinaria integral: consultas, urgencias, cirugía y planes de bienestar. Tu mascota merece lo mejor.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/2645769084"
            target="_blank"
            rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow hover:brightness-95">
              Pedir cita
            </a>
            <a href="#info" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-600 text-emerald-600 font-medium">
              Ver más
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=1200&auto=format&fit=crop"
              alt="Mascota feliz"
              className="w-full h-80 object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Información (Rediseñada) */}
      <section id="info" className="max-w-7xl mx-auto px-6 py-16">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Información
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Stethoscope size={36} />,
              title: "Atención Profesional",
              text: "Veterinarios altamente capacitados que combinan conocimiento y pasión por los animales.",
              color: "bg-emerald-100 text-emerald-700",
            },
            {
              icon: <Syringe size={36} />,
              title: "Vacunación y Control",
              text: "Seguimiento personalizado de vacunas, desparasitación y revisiones periódicas.",
              color: "bg-emerald-50 text-emerald-700",
            },
            {
              icon: <Calendar size={36} />,
              title: "Citas Rápidas",
              text: "Agenda tu consulta en minutos y recibe atención oportuna sin largas esperas.",
              color: "bg-emerald-100 text-emerald-700",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl shadow-md p-8 text-center ${item.color} hover:shadow-xl transition`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-slate-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

       {/* Servicios */}
      <section id="servicios" className="max-w-7xl mx-auto px-6 py-16">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Nuestros Servicios
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="text-white" size={32} />,
              title: "Baños y Limpieza",
              text: "Baños completos, cepillado y limpieza profunda con productos especiales para cada tipo de pelaje.",
            },
            {
              icon: <PawPrint className="text-white" size={32} />,
              title: "Desparasitación",
              text: "Eliminamos parásitos internos y externos para proteger la salud y bienestar de tu mascota.",
            },
            {
              icon: <Phone className="text-white" size={32} />,
              title: "Internación y Cuidados",
              text: "Si tu mascota necesita observación o tratamiento prolongado, contamos con área de internación segura y cómoda.",
            },
            {
              icon: <Mail className="text-white" size={32} />,
              title: "Vacunación",
              text: "Aplicamos el calendario completo de vacunas para prevenir enfermedades comunes en perros y gatos.",
            },
            {
              icon: <MapPin className="text-white" size={32} />,
              title: "Consultas y Urgencias",
              text: "Atendemos consultas médicas generales y urgencias veterinarias con rapidez y profesionalismo.",
            },
            {
              icon: <Heart className="text-white" size={32} />,
              title: "Cuidado Integral",
              text: "Planes personalizados de bienestar, alimentación y control sanitario para cada etapa de vida.",
            },
          ].map((servicio, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center mb-5">
                {servicio.icon}
              </div>
              <h4 className="text-lg font-semibold mb-3">{servicio.title}</h4>
              <p className="text-slate-600 text-sm">{servicio.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes" className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-4"
        >
          <h3 className="text-3xl font-bold">Quiénes Somos</h3>
          <p className="text-slate-700 text-lg">
            En <strong>Clinivet</strong> somos un equipo de veterinarios apasionados por el bienestar animal.
            Desde hace más de 10 años brindamos atención médica, quirúrgica y preventiva a mascotas en toda la región.
          </p>
          <p className="text-slate-600">
            Nuestro objetivo es garantizar una vida saludable y feliz para cada compañero peludo,
            combinando tecnología moderna, amor y vocación.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1200&auto=format&fit=crop"
            alt="Equipo veterinario Clinivet"
            className="rounded-2xl shadow-xl w-full h-80 object-cover"
          />
        </motion.div>
      </section>

      {/* Galería */}
      <section id="galeria" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Galería</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            imagen,
           imagen2,
            imagen3,
            imagen4,
            imagen6,
            imagen5,
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={src}
                alt={`Galería ${i + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold">Reserva una consulta</h3>
            <p className="text-slate-700 mt-2">
              Completa el formulario y nos pondremos en contacto para confirmar la cita.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow">
            <label className="block text-sm font-medium">Nombre</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full mt-2 p-2 border rounded-md" />
            <label className="block text-sm font-medium mt-4">Email</label>
            <input name="email" value={form.email} onChange={handleChange} type="email" required className="w-full mt-2 p-2 border rounded-md" />
            <label className="block text-sm font-medium mt-4">Mensaje</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full mt-2 p-2 border rounded-md" />
            <div className="mt-4">
              <button type="submit" className="w-full px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium">
                {sent ? "Enviado ✔" : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t pt-8 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <PawPrint size={16} />
            </div>
            <div>
              <div className="font-semibold">Clinivet</div>
              <div className="text-xs text-slate-500">
                © 2024 Todos los derechos reservados
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
