import React from "react";
import { FaNodeJs, FaPython, FaGitAlt, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { LiaFreeCodeCamp } from "react-icons/lia";

const Learning = () => {
    const courses = [
        {
        title: "Diseño Web Responsivo",
        platform: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/johanmora923/responsive-web-design",
        },
        {
        title: "Estructura de JavaScript",
        platform: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/johanmora923/javascript-algorithms-and-data-structures-v8",
        },
    ];

    const selfTaughtSkills = [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
        { name: "Python", icon: <FaPython className="text-blue-400 text-4xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
        { name: "React", icon: <FaReact className="text-blue-300 text-4xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-4xl" /> },
    ];

    return (
        <div className="py-12 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
            Aprendizaje
        </h2>
        <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
            Cursos Realizados
            </h3>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {courses.map((course, index) => (
                <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
                >
                <LiaFreeCodeCamp className="w-50 h-30" />
                <h4 className="text-xl font-semibold text-gray-700 mb-2">
                    {course.title}
                </h4>
                <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-700"
                >
                    Ver en {course.platform}
                </a>
                </div>
            ))}
            </div>
        </div>


        <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
            Habilidades Autodidactas
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
            {selfTaughtSkills.map((skill, index) => (
                <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105"
                >
                {skill.icon}
                <span className="mt-2 text-lg font-semibold text-gray-700">
                    {skill.name}
                </span>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default Learning;
