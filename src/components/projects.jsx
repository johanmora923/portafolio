import React, { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Projects = () => {
    const projectData = [
        {
        title: "Auction",
        description:
            "Auction es una plataforma de subastas en línea diseñada para facilitar la compra y venta de productos mediante un sistema de pujas en tiempo real. Construida con React, NodeJS y MySQL, esta aplicación prioriza la escalabilidad, rapidez y una experiencia de usuario fluida, integrando interfaces modernas y optimizadas para dispositivos móviles.",
        tools: [
            { name: "React", icon: <FaReact className="text-blue-300 text-3xl" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-3xl" /> },
            { name: "MySQL", icon: <FaDatabase className="text-blue-500 text-3xl" /> },
            { name: "NodeJS", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
        ],
        previewLink: "https://aution.vercel.app/",
        codeLink: "https://aution.vercel.app/",
        },
        {
        title: "Webfrilance",
        description:
            "Webfrilance es una plataforma para la venta de servicios web personalizados, como desarrollo de páginas modernas, funcionales y optimizadas. Este proyecto utiliza React, Tailwind CSS, NodeJS y MySQL para ofrecer una experiencia profesional y escalable.",
        tools: [
            { name: "React", icon: <FaReact className="text-blue-300 text-3xl" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-3xl" /> },
            { name: "MySQL", icon: <FaDatabase className="text-blue-500 text-3xl" /> },
            { name: "NodeJS", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
        ],
        previewLink: "https://webfrilance.vercel.app",
        codeLink: "https://github.com/johanmora923/frontend-webfrilance",
        },
        {
        title: "La Vieja Game",
        description:
            "Un juego clásico de tic-tac-toe interactivo, enfocado en la diversión y funcionalidad. Desarrollado con React y NodeJS, incluye animaciones suaves y es totalmente responsivo.",
        tools: [
            { name: "React", icon: <FaReact className="text-blue-300 text-3xl" /> },
            { name: "HTML", icon: <FaHtml5 className="text-red-500 text-3xl" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
            { name: "NodeJS", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
        ],
        previewLink: "https://la-vieja-game.vercel.app/",
        codeLink: "https://github.com/johanmora923/Rico-pollo",
        },
        {
        title: "Rico Pollo Rest",
        description:
            "Sitio web para un restaurante, diseñado para mostrar un menú interactivo y permitir a los clientes conocer más sobre los servicios que ofrece el restaurante. Con un diseño limpio y funcional.",
        tools: [
            { name: "HTML", icon: <FaHtml5 className="text-red-500 text-3xl" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
            { name: "JavaScript", icon: <FaHtml5 className="text-yellow-400 text-3xl" /> },
        ],
        previewLink: "https://ricopollorrest.netlify.app/",
        codeLink: "https://github.com/johanmora923/Rico-pollo",
        },
    ];

    const [expanded, setExpanded] = useState({});

    const handleToggle = (index) => {
        setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <div className="py-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
            Proyectos
        </h2>
        <div className="grid gap-8 px-4 grid-cols-1 md:grid-cols-2">
            {projectData.map((project, index) => (
            <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105"
                style={{ minHeight: "500px" }}
            >
                <h3 className="text-xl font-semibold text-blue-500 mb-4 text-center">
                {project.title}
                </h3>
                <iframe
                src={project.previewLink}
                className="w-full h-64 rounded-lg mb-4 border-0 pointer-events-none"
                title={`${project.title} preview`}
                ></iframe>
                <p className="text-gray-700 text-center mb-4">
                {expanded[index]
                    ? project.description
                    : `${project.description.slice(0, 100)}...`}
                {project.description.length > 100 && (
                    <button
                    onClick={() => handleToggle(index)}
                    className="text-blue-500 ml-2 hover:underline"
                    >
                    {expanded[index] ? "ver menos" : "ver más"}
                    </button>
                )}
                </p>
                <div className="flex gap-2 mb-4">
                {project.tools.map((tool, idx) => (
                    <div key={idx} className="text-center">
                    {tool.icon}
                    </div>
                ))}
                </div>
                <div className="flex gap-4">
                <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-700"
                >
                    Ver Código
                </a>
                <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-yellow-400 hover:text-white"
                >
                    Ver Proyecto
                </a>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Projects;
