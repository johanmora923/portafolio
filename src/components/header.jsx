import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPython, FaGitAlt, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";


export const Header = ({setOpenModal}) => {
    const handleCVDownload = () => {
        const link = document.createElement("a");
        link.href = "/cvJohanMora.pdf"; 
        link.download = "JohanMora_CV.pdf"; 
        link.click();
    };

    const handleContactClick = () => {
        setOpenModal(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Header */}
        <header className="bg-white  py-4 text-center">
            <h2 className="text-3xl font-bold text-blue-500 shadow-sm hover:text-blue-700 transition-colors duration-300">
            JM.dev
            </h2>
        </header>

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-center items-center bg-white border-b-2 border-gray-200 py-8">
            <div className="w-60 h-60 min-w-[84px] min-h-[54px] rounded-lg bg-cover bg-center bg-[url('/mifoto.png')] mx-4  hover:scale-105 transition-transform duration-300"></div>
            <div className="mt-4 md:mt-0 mx-4 text-center md:text-left">
            <h3 className="text-sm text-gray-600">Hola, mi nombre es</h3>
            <h1 className="text-2xl md:text-4xl font-semibold text-blue-500 mt-2">
                Johan Mora.
            </h1>
            <p className="text-lg mt-2">
                Soy{" "}
                <span className="text-blue-500 font-medium">
                Desarrollador Web Frontend jr
                </span>
            </p>
            <p className="mt-4 text-gray-700">
                Crearé tu web simple, moderna, funcional, escalable y rápida
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
                <button
                onClick={handleCVDownload}
                className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                Descargar CV
                </button>
                <button
                onClick={handleContactClick}
                className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-yellow-400 hover:text-white transition-transform transform hover:scale-105"
                >
                Contacto
                </button>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-8 text-2xl">
                <ion-icon
                name="logo-github"
                id="logo__github"
                className="hover:text-gray-700 transition-all duration-200 hover:scale-110"
                ></ion-icon>
                <ion-icon
                name="logo-linkedin"
                id="logo__linkedin"
                className="text-blue-700 hover:text-blue-900 transition-all duration-200 hover:scale-110"
                ></ion-icon>
            </div>
            </div>
        </div>
        {/* Skills Section */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 ml-8">
            Habilidades
        </h2>
        <div className="flex flex-wrap justify-center gap-8 bg-white py-4">
            {[
            { name: "HTML", icon: <FaHtml5 />, color: "text-red-500" },
            { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
            { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
            { name: "NodeJS", icon: <FaNodeJs />, color: "text-green-600" },
            { name: "Python", icon: <FaPython />, color: "text-blue-400" },
            { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
            { name: "React", icon: <FaReact />, color: "text-blue-300" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-blue-400" },
            ].map((tech, index) => (
            <div
                key={index}
                className="flex flex-col items-center group cursor-pointer hover:scale-110 transition-transform duration-300"
            >
                <div className={`text-4xl ${tech.color} group-hover:animate-bounce`}>
                {tech.icon}
                </div>
                <span className="mt-2 text-sm text-gray-700">{tech.name}</span>
            </div>
            ))}
        </div>
        </div>
    );
}

export default Header;   
