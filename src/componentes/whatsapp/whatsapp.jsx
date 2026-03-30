import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import './whatsapp.css';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumbers = [
    { number: '983507611', label: 'Ventas' },
    { number: '912195453', label: 'Cotizaciones' },
  ];
  const message = 'Hola, me interesa cotizar repuestos para camiones';

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsAppClick = (phoneNumber) => {
    const url = `https://wa.me/51${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`wa-widget ${isVisible ? 'wa-widget--visible' : ''}`}>
      {/* Card */}
      <div className={`wa-card ${isOpen ? 'wa-card--open' : ''}`}>
        {/* Header */}
        <div className="wa-card__header">
          <div className="wa-card__header-brand">
            <FaWhatsapp size={16} />
            <span>Escríbenos por <strong>WhatsApp</strong></span>
          </div>
          <button className="wa-card__close" onClick={() => setIsOpen(false)}>
            <IoClose />
          </button>
        </div>

        {/* Body */}
        <div className="wa-card__body">
          <div className="wa-bubble">
            Hola, ¿En qué podemos ayudarte?
          </div>
          <div className="wa-options">
            {phoneNumbers.map((phone) => (
              <button
                key={phone.number}
                className="wa-option"
                onClick={() => handleWhatsAppClick(phone.number)}
              >
                <div>
                  <div className="wa-option__label">{phone.label}</div>
                  <div className="wa-option__number">+51 {phone.number}</div>
                </div>
                <FaWhatsapp className="wa-option__icon" />
              </button>
            ))}
          </div>
        </div>

        <div className="wa-card__footer">
          Powered by WhatsApp
        </div>
      </div>

      {/* FAB */}
      <button
        className={`wa-fab ${isOpen ? 'wa-fab--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir WhatsApp"
      >
        <FaWhatsapp className="wa-fab__icon-main" />
        <IoClose className="wa-fab__icon-close" />
      </button>
    </div>
  );
}