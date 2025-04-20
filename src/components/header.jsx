import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { useLanguage } from '../context/lenguajeProvider'; // Usa el contexto corregido

export const Header = ({ setOpenModal }) => {
  const { language, toggleLanguage } = useLanguage();

  const handleCVDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = '/cvJohanMora.pdf';
      link.download = 'JohanMora_CV.pdf';
      link.click();
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert(
        language === 'es'
          ? 'No se pudo descargar el CV. Por favor, contáctame directamente.'
          : 'Could not download the CV. Please contact me directly.'
      );
    }
  };

  const handleContactClick = () => {
    setOpenModal(true);
  };

  const content = {
    es: {
      navAbout: 'Sobre Mí',
      navProjects: 'Proyectos',
      navContact: 'Contáctame',
      intro: 'Hola, mi nombre es',
      title: 'Johan Mora',
      role: 'Desarrollador Web Frontend Junior',
      description:
        'Construyo sitios web modernos, rápidos y responsivos con React y Tailwind CSS, ayudando a negocios a destacar online y aumentar conversiones.',
      skillsTitle: 'Mis Habilidades',
      cvButton: 'Descargar CV',
      contactButton: 'Contáctame',
    },
    en: {
      navAbout: 'About Me',
      navProjects: 'Projects',
      navContact: 'Contact Me',
      intro: 'Hello, my name is',
      title: 'Johan Mora',
      role: 'Junior Frontend Web Developer',
      description:
        'I build modern, fast, and responsive websites with React and Tailwind CSS, helping businesses stand out online and boost conversions.',
      skillsTitle: 'My Skills',
      cvButton: 'Download CV',
      contactButton: 'Contact Me',
    },
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <h2 className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300">
            JM.dev
          </h2>
          <nav className="flex items-center gap-6">
            <a href="#sobre-mi" className="text-gray-700 hover:text-blue-600 transition-colors">
              {content[language].navAbout}
            </a>
            <a href="#proyectos" className="text-gray-700 hover:text-blue-600 transition-colors">
              {content[language].navProjects}
            </a>
            <button
              onClick={handleContactClick}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-transform transform hover:scale-105"
              aria-label={language === 'es' ? 'Abrir formulario de contacto' : 'Open contact form'}
            >
              {content[language].navContact}
            </button>
            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
            >
              {language === 'es' ? 'English' : 'Español'}
            </button>
          </nav>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="bg-white py-12 border-b-2 border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          <img
            src="/mifoto.png"
            alt={
              language === 'es'
                ? 'Foto de Johan Mora, desarrollador web frontend'
                : 'Photo of Johan Mora, frontend web developer'
            }
            className="w-48 h-48 md:w-64 md:h-64 rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeIn"
            loading="lazy"
          />
          <div className="text-center md:text-left">
            <h3 className="text-sm text-gray-600">{content[language].intro}</h3>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mt-2">
              {content[language].title}
            </h1>
            <p className="text-lg mt-2">
              {language === 'es' ? 'Soy' : 'I am'}{' '}
              <span className="text-blue-600 font-medium">{content[language].role}</span>
            </p>
            <p className="mt-4 text-gray-700 max-w-md">{content[language].description}</p>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <button
                onClick={handleCVDownload}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-800 transition-transform transform hover:scale-105"
                aria-label={
                  language === 'es' ? 'Descargar CV de Johan Mora' : 'Download Johan Mora’s CV'
                }
              >
                {content[language].cvButton}
              </button>
              <button
                onClick={handleContactClick}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-transform transform hover:scale-105"
                aria-label={language === 'es' ? 'Abrir formulario de contacto' : 'Open contact form'}
              >
                {content[language].contactButton}
              </button>
            </div>
            <div className="flex justify-center md:justify-start gap-6 mt-8 text-3xl">
              <a
                href="https://github.com/johanmora923" // Actualiza con tu perfil
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
                aria-label={
                  language === 'es'
                    ? 'Perfil de GitHub de Johan Mora'
                    : 'Johan Mora’s GitHub profile'
                }
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/tu-usuario" // Actualiza con tu perfil
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-110"
                aria-label={
                  language === 'es'
                    ? 'Perfil de LinkedIn de Johan Mora'
                    : 'Johan Mora’s LinkedIn profile'
                }
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/+573014866694" // Actualiza con tu número
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 transition-transform transform hover:scale-110"
                aria-label={
                  language === 'es'
                    ? 'Contactar a Johan Mora por WhatsApp'
                    : 'Contact Johan Mora via WhatsApp'
                }
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            {content[language].skillsTitle}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: 'HTML', icon: <FaHtml5 />, color: 'text-red-500' },
              { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
              { name: 'JavaScript', icon: <FaJsSquare />, color: 'text-yellow-500' },
              { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
              { name: 'Python', icon: <FaPython />, color: 'text-blue-400' },
              { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500' },
              { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
              { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-500' },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`text-5xl ${tech.color} transition-transform duration-300 hover:scale-110`}>
                  {tech.icon}
                </div>
                <span className="mt-3 text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;