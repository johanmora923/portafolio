import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useLanguage } from '../context/lenguajeProvider'; // Corregido de 'lenguajeProvider'

const Footer = ({ setOpenModal }) => {
  const { language } = useLanguage();

  const content = {
    es: {
      message: 'Desarrollado con pasión por <span className="text-blue-500 font-semibold">Johan Mora</span>',
      links: [
        { name: 'Sobre Mí', href: '#sobre-mi' },
        { name: 'Proyectos', href: '#proyectos' },
        {
          name: 'Contacto',
          href: '#contacto',
          onClick: (e) => {
            e.preventDefault();
            setOpenModal(true);
          },
        },
      ],
      copyright: `© ${new Date().getFullYear()} Johan Mora. Todos los derechos reservados.`,
    },
    en: {
      message: 'Built with passion by <span className="text-blue-500 font-semibold">Johan Mora</span>',
      links: [
        { name: 'About Me', href: '#sobre-mi' },
        { name: 'Projects', href: '#proyectos' },
        {
          name: 'Contact',
          href: '#contacto',
          onClick: (e) => {
            e.preventDefault();
            setOpenModal(true);
          },
        },
      ],
      copyright: `© ${new Date().getFullYear()} Johan Mora. All rights reserved.`,
    },
  };

  const socialLinks = [
    {
      name: language === 'es' ? 'GitHub de Johan Mora' : 'Johan Mora’s GitHub',
      href: 'https://github.com/johanmora923',
      icon: <FaGithub size={32} />,
    },
    {
      name: language === 'es' ? 'LinkedIn de Johan Mora' : 'Johan Mora’s LinkedIn',
      href: 'https://www.linkedin.com/in/johan-mora-3bb0082b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: <FaLinkedin size={32} />,
    },
    {
      name: language === 'es' ? 'Twitter de Johan Mora' : 'Johan Mora’s Twitter',
      href: 'https://twitter.com/johanmora923',
      icon: <FaTwitter size={32} />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Título o Mensaje */}
        <h2
          className="text-xl md:text-2xl font-semibold text-gray-100 mb-6 animate-fadeIn"
          dangerouslySetInnerHTML={{ __html: content[language].message }}
        />

        {/* Redes Sociales */}
        <div className="flex justify-center gap-8 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Links rápidos */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mb-6">
          {content[language].links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={link.onClick} // Añade onClick para Contacto
              className="text-gray-300 hover:text-blue-500 transition-colors text-sm md:text-base"
              aria-label={link.name}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Derechos reservados */}
        <p className="text-sm text-gray-500">{content[language].copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;