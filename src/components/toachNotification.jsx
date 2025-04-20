// src/components/ToastNotification.jsx
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useLanguage } from '../context/lenguajeProvider';

const ToastNotification = ({ message }) => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  const content = {
    es: {
      closeAriaLabel: 'Cerrar notificación',
    },
    en: {
      closeAriaLabel: 'Close notification',
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000); // Oculta tras 5 segundos
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!message || !isVisible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-xl shadow-2xl max-w-sm w-full transition-all duration-300 ease-in-out transform translate-y-0 opacity-100"
      role="alert"
      aria-live="polite"
      aria-label={language === 'es' ? 'Notificación' : 'Notification'}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium leading-tight">{message}</span>
        <button
          onClick={handleClose}
          className="flex-shrink-0 text-white hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full"
          aria-label={content[language].closeAriaLabel}
        >
          <IoClose size={20} />
        </button>
      </div>
    </div>
  );
};

export default ToastNotification;