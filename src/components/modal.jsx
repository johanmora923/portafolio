// src/components/ContactModal.jsx
import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useLanguage } from '../context/lenguajeProvider';
import ToastNotification from './toachNotification';

const ContactModal = ({ setOpenModal }) => {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const content = {
    es: {
      title: 'Contáctame',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'tu@correo.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Motivo de contacto',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Escribe tu mensaje aquí...',
      submitButton: 'Enviar',
      submittingButton: 'Enviando...',
      closeAriaLabel: 'Cerrar formulario de contacto',
      successMessage: '¡Mensaje enviado correctamente!',
      errorMessage: 'Error al enviar el mensaje. Intenta de nuevo.',
    },
    en: {
      title: 'Contact Me',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Reason for contact',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message here...',
      submitButton: 'Send',
      submittingButton: 'Sending...',
      closeAriaLabel: 'Close contact form',
      successMessage: 'Message sent successfully!',
      errorMessage: 'Error sending message. Please try again.',
    },
  };

  const toggleModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // FormSubmit maneja el envío
      await e.target.submit();
      setToastMessage(content[language].successMessage);
      setShowToast(true);
      setOpenModal(false);
    } catch (error) {
      setToastMessage(content[language].errorMessage);
      setShowToast(true);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 transition-opacity duration-300"
        onClick={toggleModal}
        role="dialog"
        aria-modal="true"
        aria-label={language === 'es' ? 'Formulario de contacto' : 'Contact form'}
      >
        <div
          className="bg-white rounded-lg w-[90%] max-w-md p-8 shadow-xl relative transform transition-transform duration-300 scale-100 animate-fadeIn"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={toggleModal}
            aria-label={content[language].closeAriaLabel}
          >
            <IoCloseOutline size={28} />
          </button>
          <form
            className="space-y-5"
            action="https://formsubmit.co/johanmora10000@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            role="form"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 text-center mb-6">
              {content[language].title}
            </h2>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {content[language].nameLabel}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                placeholder={content[language].namePlaceholder}
                required
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {content[language].emailLabel}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                placeholder={content[language].emailPlaceholder}
                required
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="asunto"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {content[language].subjectLabel}
              </label>
              <input
                type="text"
                name="asunto"
                id="asunto"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                placeholder={content[language].subjectPlaceholder}
                required
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {content[language].messageLabel}
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                placeholder={content[language].messagePlaceholder}
                required
                aria-required="true"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-800 transition-transform transform hover:scale-105 disabled:bg-blue-400 disabled:cursor-not-allowed"
              disabled={isSubmitting}
              aria-label={content[language].submitButton}
            >
              {isSubmitting ? content[language].submittingButton : content[language].submitButton}
            </button>
          </form>
        </div>
      </div>
      {showToast && <ToastNotification message={toastMessage} />}
    </>
  );
};

export default ContactModal;