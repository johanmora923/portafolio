// src/components/Header.jsx
import React, { useState } from 'react';
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
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { useLanguage } from '../context/lenguajeProvider'; // Corregido de 'lenguajeProvider'

const Header = ({ setOpenModal }) => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false); // Cierra el menú en móvil
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
      menuAriaLabel: 'Menú de navegación',
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
      menuAriaLabel: 'Navigation menu',
    },
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300">
            JM.dev
          </h2>
          {/* Botón hamburguesa para móvil */}
          <button
            className="sm:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {/* Navegación */}
          <nav
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } sm:flex flex-col sm:flex-row items-center gap-4 sm:gap-6 absolute sm:static top-16 left-0 right-0 bg-white sm:bg-transparent shadow-md sm:shadow-none p-4 sm:p-0 z-20`}
            aria-label={content[language].menuAriaLabel}
          >
            <a
              href="#sobre-mi"
              className="text-gray-700 hover:text-blue-600 transition-colors text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              {content[language].navAbout}
            </a>
            <a
              href="#proyectos"
              className="text-gray-700 hover:text-blue-600 transition-colors text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              {content[language].navProjects}
            </a>
            <button
              onClick={handleContactClick}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-transform transform hover:scale-105 text-base"
              aria-label={language === 'es' ? 'Abrir formulario de contacto' : 'Open contact form'}
            >
              {content[language].navContact}
            </button>
            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-blue-600 transition-colors text-base"
              aria-label={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
            >
              {language === 'es' ? 'English' : 'Español'}
            </button>
          </nav>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="bg-white py-12 border-b-2 border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 px-4 sm:px-6">
          <img
            src="/mifoto.png"
            alt={
              language === 'es'
                ? 'Foto de Johan Mora, desarrollador web frontend'
                : 'Photo of Johan Mora, frontend web developer'
            }
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="text-center">
            <h3 className="text-sm text-gray-600">{content[language].intro}</h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mt-2">
              {content[language].title}
            </h1>
            <p className="text-base sm:text-lg mt-2">
              {language === 'es' ? 'Soy' : 'I am'}{' '}
              <span className="text-blue-600 font-medium">{content[language].role}</span>
            </p>
            <p className="mt-4 text-gray-700 text-sm sm:text-base max-w-md mx-auto">
              {content[language].description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <button
                onClick={handleCVDownload}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-800 transition-transform transform hover:scale-105 text-sm sm:text-base"
                aria-label={
                  language === 'es' ? 'Descargar CV de Johan Mora' : 'Download Johan Mora’s CV'
                }
              >
                {content[language].cvButton}
              </button>
              <button
                onClick={handleContactClick}
                className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-transform transform hover:scale-105 text-sm sm:text-base"
                aria-label={language === 'es' ? 'Abrir formulario de contacto' : 'Open contact form'}
              >
                {content[language].contactButton}
              </button>
            </div>
            <div className="flex justify-center gap-6 mt-6 text-2xl sm:text-3xl">
              <a
                href="https://github.com/johanmora923"
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
                href="https://www.linkedin.com/in/johan-mora-3bb0082b3"
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
                href="https://wa.me/+573014866694"
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            {content[language].skillsTitle}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
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
                className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`text-4xl sm:text-5xl ${tech.color} transition-transform duration-300 hover:scale-110`}>
                  {tech.icon}
                </div>
                <span className="mt-2 text-xs sm:text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;