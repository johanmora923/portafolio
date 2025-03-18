import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
            {/* Título o Mensaje */}
            <h2 className="text-xl font-semibold mb-4">
            Desarrollado con pasión por <span className="text-blue-500">Johan Mora</span>
            </h2>

            {/* Redes Sociales */}
            <div className="flex justify-center gap-6 mb-4">
            <a
                href="https://github.com/johanmora923"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
            >
                <FaGithub size={28} />
            </a>
            <a
                href="https://www.linkedin.com/in/johan-mora-3bb0082b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
            >
                <FaLinkedin size={28} />
            </a>
            <a
                href="https://twitter.com/johanmora923"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
            >
                <FaTwitter size={28} />
            </a>
            </div>

            {/* Links rápidos */}
            <div className="flex justify-center gap-8 text-sm">
            <a
                href="#about"
                className="hover:text-blue-500 transition-colors"
            >
                Sobre mí
            </a>
            <a
                href="#projects"
                className="hover:text-blue-500 transition-colors"
            >
                Proyectos
            </a>
            <a
                href="#contact"
                className="hover:text-blue-500 transition-colors"
            >
                Contacto
            </a>
            </div>

            {/* Derechos reservados */}
            <p className="text-sm text-gray-500 mt-4">
            © {new Date().getFullYear()} Johan Mora. Todos los derechos reservados.
            </p>
        </div>
        </footer>
    );
};

export default Footer;
