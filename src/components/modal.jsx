
import { IoCloseOutline } from "react-icons/io5"; // Icono de cierre

const ContactModal = ({setOpenModal}) => {

    const toggleModal = () => {
        setOpenModal(false)
    };

    return (
            <div
            className={`fixed inset-0 bg-black/50 flex  justify-center items-center z-50`}
            onClick={(e) => {
                if (e.target.className.includes("bg-black")) setOpenModal(false) ;
            }}
            >
            <div className="bg-white rounded-lg w-[90%] max-w-md p-6 shadow-lg relative">
                <IoCloseOutline
                size={28}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={toggleModal}
                />
                <form
                className="space-y-4"
                action="https://formsubmit.co/johanmora10000@gmail.com"
                method="post"
                >
                <h2 className="text-2xl font-semibold text-blue-500 mb-4 text-center">
                    Contáctame
                </h2>
                <div>
                    <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Nombre
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                </div>
                <div>
                    <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Dirección de correo
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                </div>
                <div>
                    <label
                    htmlFor="asunto"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Asunto
                    </label>
                    <input
                    type="text"
                    name="asunto"
                    id="asunto"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                </div>
                <div>
                    <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Mensaje
                    </label>
                    <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-700 transition-colors"
                >
                    Enviar
                </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
