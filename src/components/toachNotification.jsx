import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5"; // React Icons

export const ToachNotification = () => {
    const [viewNotification, setViewNotification] = useState(false);
    const [closeNotification, setCloseNotification] = useState(false);

    const handleViewNotification = () => {
        if (window.scrollY  >= 300 && !closeNotification) {
        setViewNotification(true);
        } 
        else {
        setViewNotification(false);
        }
    };

    const handleCloseNotification = () => {
        setViewNotification(false);
        setCloseNotification(true);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleViewNotification);
        return () =>
        window.removeEventListener("scroll", handleViewNotification);
    });

    return (
        <div
        className={`fixed bottom-20 z-50 right-5 bg-blue-500 text-white p-4 rounded-lg shadow-lg transition-transform duration-300 ${
            viewNotification ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        >
        <div className="flex items-center justify-between">
            <span>Los proyectos en este portafolio son personales, no fueron creados para terceros</span>
            <button
            onClick={handleCloseNotification}
            className="ml-4 text-white hover:text-gray-300 transition"
            >
            <IoClose size={20} />
            </button>
        </div>
        </div>
    );
};
