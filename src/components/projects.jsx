import React, { useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import  {useLanguage}  from '../context/lenguajeProvider';

const Projects = () => {
  const {language, setLanguage} = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const [expanded, setExpanded] = useState({});

  const handleToggle = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const projectData = [
    {
      title: { es: 'BillingPro', en: 'BillingPro' },
      description: {
        es: 'El Sistema de Facturación Inteligente es una solución completa, diseñada para optimizar procesos comerciales mediante una interfaz intuitiva y una arquitectura backend robusta. Está pensado como una herramienta escalable y personalizable que se adapta a diferentes tipos de negocios.',
        en: '',
      },
      tools: [
        { name: 'React', icon: <FaReact className="text-cyan-400 text-3xl" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500 text-3xl" /> },
        { name: 'MySQL', icon: <FaDatabase className="text-blue-600 text-3xl" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" /> },
      ],
      image: '/BillingPro.png', // Añade una imagen en public/projects
      previewLink: 'https://billing-pro.vercel.app/',
      codeLink: 'https://aution.vercel.app/', // Actualiza si tienes un enlace a GitHub
    },
    {
      title: { es: 'Webfrilance', en: 'Webfrilance' },
      description: {
        es: 'Webfrilance es una plataforma para la venta de servicios web personalizados, como desarrollo de páginas modernas, funcionales y optimizadas. Este proyecto utiliza React, Tailwind CSS, Node.js y MySQL para ofrecer una experiencia profesional y escalable.',
        en: 'Webfrilance is a platform for selling customized web services, such as developing modern, functional, and optimized websites. This project uses React, Tailwind CSS, Node.js, and MySQL to deliver a professional and scalable experience.',
      },
      tools: [
        { name: 'React', icon: <FaReact className="text-cyan-400 text-3xl" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500 text-3xl" /> },
        { name: 'MySQL', icon: <FaDatabase className="text-blue-600 text-3xl" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" /> },
      ],
      image: '/projects/webfrilance.jpg',
      previewLink: 'https://webfrilance.vercel.app',
      codeLink: 'https://github.com/johanmora923/frontend-webfrilance',
    },
    {
      title: { es: 'La Vieja Game', en: 'Tic-Tac-Toe Game' },
      description: {
        es: 'Un juego clásico de tic-tac-toe interactivo, enfocado en la diversión y funcionalidad. Desarrollado con React y Node.js, incluye animaciones suaves y es totalmente responsivo.',
        en: 'A classic interactive tic-tac-toe game focused on fun and functionality. Developed with React and Node.js, it includes smooth animations and is fully responsive.',
      },
      tools: [
        { name: 'React', icon: <FaReact className="text-cyan-400 text-3xl" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-red-500 text-3xl" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" /> },
      ],
      image: '/projects/la-vieja-game.jpg',
      previewLink: 'https://la-vieja-game.vercel.app/',
      codeLink: 'https://github.com/johanmora923/Rico-pollo', // Corrige si el enlace es incorrecto
    },
    {
      title: { es: 'Rico Pollo Rest', en: 'Rico Pollo Restaurant' },
      description: {
        es: 'Sitio web para un restaurante, diseñado para mostrar un menú interactivo y permitir a los clientes conocer más sobre los servicios que ofrece el restaurante. Con un diseño limpio y funcional.',
        en: 'A website for a restaurant, designed to showcase an interactive menu and allow customers to learn more about the restaurant’s services. Features a clean and functional design.',
      },
      tools: [
        { name: 'HTML', icon: <FaHtml5 className="text-red-500 text-3xl" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
        { name: 'JavaScript', icon: <FaHtml5 className="text-yellow-500 text-3xl" /> }, // Corrige el ícono si es necesario
      ],
      image: '/projects/rico-pollo.jpg',
      previewLink: 'https://ricopollorrest.netlify.app/',
      codeLink: 'https://github.com/johanmora923/Rico-pollo',
    },
  ];

  const content = {
    es: {
      title: 'Proyectos',
      readMore: 'Ver más',
      readLess: 'Ver menos',
      viewCode: 'Ver Código',
      viewProject: 'Ver Proyecto',
      languageToggle: 'English',
    },
    en: {
      title: 'Projects',
      readMore: 'Read More',
      readLess: 'Read Less',
      viewCode: 'View Code',
      viewProject: 'View Project',
      languageToggle: 'Español',
    },
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600 text-center">
            {content[language].title}
          </h2>
          <button
            onClick={toggleLanguage}
            className="text-gray-700 hover:text-blue-600 transition-colors"
            aria-label={
              language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'
            }
          >
            {content[language].languageToggle}
          </button>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={
                  language === 'es'
                    ? `Captura del proyecto ${project.title.es}`
                    : `Screenshot of the project ${project.title.en}`
                }
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">
                  {project.title[language]}
                </h3>
                <p className="text-gray-700 text-center mb-4">
                  {expanded[index]
                    ? project.description[language]
                    : `${project.description[language].slice(0, 100)}...`}
                  {project.description[language].length > 100 && (
                    <button
                      onClick={() => handleToggle(index)}
                      className="text-blue-600 hover:underline ml-2"
                      aria-label={
                        expanded[index]
                          ? content[language].readLess
                          : content[language].readMore
                      }
                    >
                      {expanded[index]
                        ? content[language].readLess
                        : content[language].readMore}
                    </button>
                  )}
                </p>
                <div className="flex gap-4 mb-4">
                  {project.tools.map((tool, idx) => (
                    <div key={idx} className="text-center" title={tool.name}>
                      {tool.icon}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-800 transition-transform transform hover:scale-105"
                    aria-label={
                      language === 'es'
                        ? `Ver el código del proyecto ${project.title.es}`
                        : `View the code of the project ${project.title.en}`
                    }
                  >
                    {content[language].viewCode}
                  </a>
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-transform transform hover:scale-105"
                    aria-label={
                      language === 'es'
                        ? `Ver el proyecto ${project.title.es}`
                        : `View the project ${project.title.en}`
                    }
                  >
                    {content[language].viewProject}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;