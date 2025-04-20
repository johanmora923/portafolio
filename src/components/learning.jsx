import React from 'react';
import { FaNodeJs, FaPython, FaGitAlt, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { LiaFreeCodeCamp } from 'react-icons/lia';
import { QuoteCard } from './comment';
import { useLanguage } from '../context/lenguajeProvider';

const Learning = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      title: 'Aprendizaje',
      coursesTitle: 'Cursos Realizados',
      skillsTitle: 'Habilidades Autodidactas',
      viewCertificate: 'Ver Certificado',
    },
    en: {
      title: 'Learning',
      coursesTitle: 'Completed Courses',
      skillsTitle: 'Self-Taught Skills',
      viewCertificate: 'View Certificate',
    },
  };

  const courses = [
    {
      title: {
        es: 'Diseño Web Responsivo',
        en: 'Responsive Web Design',
      },
      platform: 'freeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/johanmora923/responsive-web-design',
      description: {
        es: 'Certificado en diseño de sitios web adaptables a cualquier dispositivo usando HTML y CSS.',
        en: 'Certified in designing websites adaptable to any device using HTML and CSS.',
      },
    },
    {
      title: {
        es: 'Estructura de JavaScript',
        en: 'JavaScript Algorithms and Data Structures',
      },
      platform: 'freeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/johanmora923/javascript-algorithms-and-data-structures-v8',
      description: {
        es: 'Dominio de algoritmos y estructuras de datos en JavaScript para resolver problemas complejos.',
        en: 'Mastery of algorithms and data structures in JavaScript to solve complex problems.',
      },
    },
  ];

  const selfTaughtSkills = [
    {
      name: { es: 'Node.js', en: 'Node.js' },
      icon: <FaNodeJs className="text-green-600 text-4xl" />,
      description: {
        es: 'Construí APIs y aplicaciones en tiempo real con Node.js.',
        en: 'Built APIs and real-time applications with Node.js.',
      },
    },
    {
      name: { es: 'Python', en: 'Python' },
      icon: <FaPython className="text-blue-400 text-4xl" />,
      description: {
        es: 'Desarrollé scripts y automatizaciones con Python.',
        en: 'Developed scripts and automations with Python.',
      },
    },
    {
      name: { es: 'Git', en: 'Git' },
      icon: <FaGitAlt className="text-orange-500 text-4xl" />,
      description: {
        es: 'Gestioné proyectos colaborativos con control de versiones.',
        en: 'Managed collaborative projects with version control.',
      },
    },
    {
      name: { es: 'React', en: 'React' },
      icon: <FaReact className="text-cyan-400 text-4xl" />,
      description: {
        es: 'Creé interfaces dinámicas y responsivas con React.',
        en: 'Built dynamic and responsive interfaces with React.',
      },
    },
    {
      name: { es: 'Tailwind CSS', en: 'Tailwind CSS' },
      icon: <SiTailwindcss className="text-teal-500 text-4xl" />,
      description: {
        es: 'Diseñé estilos modernos y optimizados con Tailwind CSS.',
        en: 'Designed modern and optimized styles with Tailwind CSS.',
      },
    },
  ];

  return (
    <section id="aprendizaje" className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-12">
          {content[language].title}
        </h2>

        {/* Cursos Realizados */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
            {content[language].coursesTitle}
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg animate-fadeIn"
              >
                <LiaFreeCodeCamp className="text-5xl text-gray-700 mb-4" aria-hidden="true" />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title[language]}
                </h4>
                <p className="text-gray-600 mb-4">{course.description[language]}</p>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-800 transition-transform transform hover:scale-105"
                  aria-label={
                    language === 'es'
                      ? `Ver certificado de ${course.title.es} en ${course.platform}`
                      : `View certificate for ${course.title.en} on ${course.platform}`
                  }
                >
                  {content[language].viewCertificate}
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Habilidades Autodidactas */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
            {content[language].skillsTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {selfTaughtSkills.map((skill, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md p-6 w-48 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg animate-fadeIn"
              >
                {skill.icon}
                <span className="mt-3 text-lg font-semibold text-gray-800">
                  {skill.name[language]}
                </span>
                <p className="mt-2 text-sm text-gray-600">{skill.description[language]}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Cita */}
        <QuoteCard
          quote={
            language === 'es'
              ? 'La educación autodidacta es, creo firmemente, el único tipo de educación que existe.'
              : 'Self-education is, I firmly believe, the only kind of education there is.'
          }
          author="Isaac Asimov"
        />
      </div>
    </section>
  );
};

export default Learning;