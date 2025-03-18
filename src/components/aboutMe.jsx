import React, { useState } from "react";

const AboutMe = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqData = [
        {
        question: "¿Cuál es tu experiencia en desarrollo web?",
        answer: "Tengo más de 1 año de experiencia en desarrollo web, trabajando con tecnologías como HTML, CSS, JavaScript, y frameworks como React y NodeJS.",
        },
        {
        question: "¿Ofreces servicios de diseño gráfico?",
        answer: "Sí, también ofrezco servicios de diseño gráfico, incluyendo diseño de logotipos, banners y material promocional.",
        },
        {
        question: "¿Qué tipo de proyectos has desarrollado?",
        answer: "He trabajado en proyectos como plataformas de subastas, tiendas en línea, portafolios personales, y aplicaciones interactivas.",
        },
        {
        question: "¿Cuál es tu enfoque al trabajar en proyectos?",
        answer: "Me enfoco en brindar soluciones escalables, optimizadas y con interfaces modernas, priorizando siempre una experiencia de usuario excepcional.",
        },
        {
        question: "¿Estás disponible para trabajar en proyectos remotos?",
        answer: "Sí, estoy disponible para trabajar de manera remota y colaborar en proyectos desafiantes sin importar la ubicación.",
        },
    ];

    return (
        <div className="py-12 bg-gray-100 px-6">
        {/* Sobre mí */}
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-500 text-center mb-4">
            Sobre mí
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                ¡Hola! Soy <span className="text-blue-500 font-semibold">Johan Mora,</span> un desarrollador web apasionado y comprometido, con más de un año de experiencia en la creación de aplicaciones y sitios web modernos, funcionales y optimizados. Mi conjunto de habilidades incluye tecnologías como <span className="text-blue-500 font-semibold">HTML, CSS, JavaScript, React, Next.js, Node.js, Tailwind CSS, Python</span> y bases de datos como <span className="text-blue-500 font-semibold">MySQL.</span> También tengo experiencia en el uso de herramientas como <span className="text-blue-500 font-semibold">Socket.io</span> para comunicación en tiempo real y <span className="text-blue-500 font-semibold">Multer</span> para la gestión de archivos.<br></br>

                A lo largo de mi trayectoria, he trabajado en proyectos que abarcan desde plataformas de subastas y sitios web comerciales, hasta aplicaciones interactivas y portafolios personales. Mi enfoque se centra en la creación de soluciones escalables y de alta calidad, priorizando una experiencia de usuario excepcional y un diseño moderno.<br></br>

                Antes de dedicarme al desarrollo web, trabajé en diversas áreas que me brindaron habilidades clave como la adaptabilidad, la colaboración en equipo y la resolución de problemas. Estas experiencias complementan mi perfil como profesional, permitiéndome abordar los desafíos con creatividad y eficiencia.<br></br>

                Estoy en constante aprendizaje y exploración de nuevas tecnologías, con el objetivo de mantenerme a la vanguardia en el mundo del desarrollo web. Mi pasión por la tecnología, combinada con un fuerte compromiso con la calidad, me motiva a contribuir en proyectos innovadores y desafiantes. <span className="text-blue-500 font-semibold">¡Gracias por visitar mi portafolio y considerar mi trabajo!</span>
            </p>

        </div>

        {/* Preguntas Frecuentes */}
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
            {faqData.map((faq, index) => (
                <div
                key={index}
                className={`border-2 rounded-lg transition-all duration-300 ${
                    openFaq === index
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200"
                }`}
                >
                <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-700 focus:outline-none"
                >
                    {faq.question}
                    <span className="text-blue-500">
                    {openFaq === index ? "-" : "+"}
                    </span>
                </button>
                {openFaq === index && (
                    <div className="px-4 pb-4 text-gray-600">
                    {faq.answer}
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default AboutMe;
