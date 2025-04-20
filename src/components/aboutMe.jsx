import React, { useState } from 'react';
import { useLanguage } from '../context/lenguajeProvider';

const AboutMe = () => {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const content = {
    es: {
      title: 'Sobre Mí',
      faqTitle: 'Preguntas Frecuentes',
      aboutMe: {
        intro:
          '¡Hola! Soy <span className="text-blue-600 font-semibold">Johan Mora</span>, un desarrollador web apasionado con más de un año de experiencia creando sitios y aplicaciones modernas, rápidas y optimizadas.',
        skills:
          'Domino tecnologías como <span className="text-blue-600 font-semibold">HTML, CSS, JavaScript, React, Next.js, Node.js, Tailwind CSS, Python</span>, y bases de datos como <span className="text-blue-600 font-semibold">MySQL</span>. También tengo experiencia con <span className="text-blue-600 font-semibold">Socket.io</span> para comunicación en tiempo real y <span className="text-blue-600 font-semibold">Multer</span> para gestión de archivos.',
        experience:
          'He trabajado en proyectos diversos, desde plataformas de subastas y tiendas en línea hasta aplicaciones interactivas y portafolios personales. Mi enfoque es crear soluciones escalables con una experiencia de usuario excepcional.',
        background:
          'Antes del desarrollo web, adquirí habilidades en adaptabilidad, colaboración y resolución de problemas, que complementan mi trabajo como desarrollador.',
        goal:
          'Estoy en constante aprendizaje, explorando <span className="text-blue-600 font-semibold">TypeScript, GraphQL y Next.js</span>, con la meta de convertirme en Full-Stack. Mi pasión por la tecnología me impulsa a contribuir en proyectos innovadores. <span className="text-blue-600 font-semibold">¡Gracias por visitar mi portafolio!</span>',
      },
      faq: [
        {
          question: '¿Cuál es tu experiencia en desarrollo web?',
          answer:
            'Más de un año desarrollando con HTML, CSS, JavaScript, React, Node.js y MySQL, creando sitios y aplicaciones modernas y responsivas.',
        },
        {
          question: '¿Ofreces servicios de diseño gráfico?',
          answer:
            'Sí, diseño logotipos, banners y material promocional, complementando mis servicios de desarrollo web.',
        },
        {
          question: '¿Qué tipo de proyectos has desarrollado?',
          answer:
            'Plataformas de subastas, tiendas en línea, portafolios personales y aplicaciones interactivas, todos optimizados y escalables.',
        },
        {
          question: '¿Cuál es tu enfoque al trabajar en proyectos?',
          answer:
            'Priorizo soluciones escalables, interfaces modernas y una experiencia de usuario excepcional, adaptándome a las necesidades del cliente.',
        },
        {
          question: '¿Estás disponible para proyectos remotos?',
          answer:
            'Sí, trabajo remotamente en proyectos desafiantes, colaborando desde cualquier ubicación.',
        },
        {
          question: '¿Qué tecnologías estás aprendiendo actualmente?',
          answer:
            'Estoy aprendiendo TypeScript, GraphQL y Next.js, con la meta de ser Full-Stack.',
        },
        {
          question: '¿Cuál es tu enfoque al trabajar en equipo?',
          answer:
            'Colaboro con comunicación efectiva y respeto mutuo, asegurando resultados de alta calidad.',
        },
        {
          question: '¿También trabajas backend?',
          answer:
            'Sí, manejo backend con Node.js, APIs y bases de datos (MySQL, PostgreSQL), aunque mi fuerte es el frontend.',
        },
      ],
    },
    en: {
      title: 'About Me',
      faqTitle: 'Frequently Asked Questions',
      aboutMe: {
        intro:
          'Hello! I’m <span className="text-blue-600 font-semibold">Johan Mora</span>, a passionate web developer with over a year of experience building modern, fast, and optimized websites and applications.',
        skills:
          'I’m proficient in technologies like <span className="text-blue-600 font-semibold">HTML, CSS, JavaScript, React, Next.js, Node.js, Tailwind CSS, Python</span>, and databases such as <span className="text-blue-600 font-semibold">MySQL</span>. I also have experience with <span className="text-blue-600 font-semibold">Socket.io</span> for real-time communication and <span className="text-blue-600 font-semibold">Multer</span> for file management.',
        experience:
          'I’ve worked on diverse projects, from auction platforms and e-commerce sites to interactive applications and personal portfolios. My focus is on creating scalable solutions with an exceptional user experience.',
        background:
          'Before web development, I gained skills in adaptability, collaboration, and problem-solving, which enhance my work as a developer.',
        goal:
          'I’m constantly learning, exploring <span className="text-blue-600 font-semibold">TypeScript, GraphQL, and Next.js</span>, aiming to become a Full-Stack developer. My passion for technology drives me to contribute to innovative projects. <span className="text-blue-600 font-semibold">Thanks for visiting my portfolio!</span>',
      },
      faq: [
        {
          question: 'What is your experience in web development?',
          answer:
            'Over a year developing with HTML, CSS, JavaScript, React, Node.js, and MySQL, building modern and responsive websites and apps.',
        },
        {
          question: 'Do you offer graphic design services?',
          answer:
            'Yes, I design logos, banners, and promotional materials, complementing my web development services.',
        },
        {
          question: 'What types of projects have you developed?',
          answer:
            'Auction platforms, e-commerce sites, personal portfolios, and interactive applications, all optimized and scalable.',
        },
        {
          question: 'What is your approach to working on projects?',
          answer:
            'I prioritize scalable solutions, modern interfaces, and exceptional user experiences, tailored to client needs.',
        },
        {
          question: 'Are you available for remote projects?',
          answer:
            'Yes, I work remotely on challenging projects, collaborating from any location.',
        },
        {
          question: 'What technologies are you currently learning?',
          answer:
            'I’m learning TypeScript, GraphQL, and Next.js, aiming to become a Full-Stack developer.',
        },
        {
          question: 'What is your approach to teamwork?',
          answer:
            'I collaborate with effective communication and mutual respect, ensuring high-quality results.',
        },
        {
          question: 'Do you also work on backend?',
          answer:
            'Yes, I handle backend with Node.js, APIs, and databases (MySQL, PostgreSQL), though my strength is frontend.',
        },
      ],
    },
  };

  return (
    <section id="sobre-mi" className="bg-gray-100 py-16 px-6">
      {/* Sobre mí */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6">
          {content[language].title}
        </h2>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p dangerouslySetInnerHTML={{ __html: content[language].aboutMe.intro }} />
          <p dangerouslySetInnerHTML={{ __html: content[language].aboutMe.skills }} />
          <p dangerouslySetInnerHTML={{ __html: content[language].aboutMe.experience }} />
          <p dangerouslySetInnerHTML={{ __html: content[language].aboutMe.background }} />
          <p dangerouslySetInnerHTML={{ __html: content[language].aboutMe.goal }} />
        </div>
      </div>

      {/* Preguntas Frecuentes */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-8">
          {content[language].faqTitle}
        </h2>
        <div className="space-y-4">
          {content[language].faq.map((faq, index) => (
            <article
              key={index}
              className={`border-2 rounded-lg transition-all duration-300 ${
                openFaq === index ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 hover:text-blue-600 focus:outline-none"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <span className="text-blue-600 text-2xl">
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>
              {openFaq === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-4 pb-4 text-gray-700 animate-fadeIn"
                >
                  {faq.answer}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;