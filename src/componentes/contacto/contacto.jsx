import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { useState } from 'react';
import './contacto.css';

const contactItems = [
  { 
    icon: FiPhone, 
    label: 'Teléfono',  
    value: ['+51 983507611', '+51 912195453']
  },
  { icon: FiMail,  label: 'Correo',    value: 'jjulian@fime-repuestos.com' },
  { icon: FiMapPin, label: 'Direccion', value: 'Avenida Argentina 477 Int. 113, Cercado de Lima, Perú' },
  { icon: FiClock, label: 'Horario',   value: 'Lun - Sab: 8:00am - 6:00pm' },
];

const contactNumbers = [
  { 
    number: '51983507611',
    display: '+51 983507611'
  },
  {  
    number: '51912195453',
    display: '+51 912195453'
  }
];

export default function Contacto() {
  const [selectedContact, setSelectedContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Obtener los datos del formulario
    const formData = new FormData(e.target);
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const telefono = formData.get('telefono');
    const ruc = formData.get('ruc');
    const razonSocial = formData.get('razonSocial');
    const numeroContacto = formData.get('numeroContacto');
    const mensaje = formData.get('mensaje');

    // Validar que se haya seleccionado un número de contacto
    if (!numeroContacto) {
      alert('Por favor selecciona un número de contacto');
      return;
    }

    // Crear el mensaje preformateado para cotización
    let whatsappMessage = `🔧 *COTIZACIÓN - FIME REPUESTOS*\n\n`;
    whatsappMessage += `Hola, soy ${nombre} y necesito una cotización:\n\n`;
    
    whatsappMessage += `📋 *DATOS DE CONTACTO:*\n`;
    whatsappMessage += `• Nombre: ${nombre}\n`;
    whatsappMessage += `• Email: ${email}\n`;
    if (telefono) whatsappMessage += `• Teléfono: ${telefono}\n`;
    
    if (ruc || razonSocial) {
      whatsappMessage += `\n🏢 *DATOS DE EMPRESA:*\n`;
      if (razonSocial) whatsappMessage += `• Razón Social: ${razonSocial}\n`;
      if (ruc) whatsappMessage += `• RUC: ${ruc}\n`;
    }
    
    whatsappMessage += `\n🛠️ *REPUESTOS SOLICITADOS:*\n`;
    if (mensaje) {
      whatsappMessage += `${mensaje}\n`;
    } else {
      whatsappMessage += `Por favor proporcione detalles de los repuestos que necesita.\n`;
    }
    
    whatsappMessage += `\n¡Gracias por su atención!`;

    // Usar el número seleccionado por el usuario
    const whatsappNumber = numeroContacto;
    
    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title section-title--white">Contactenos</h2>
          <div className="section-line section-line--white" />
        </div>

        <div className="contacto__grid">
          {/* Info */}
          <div className="contacto__info">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="cinfo">
                <div className="cinfo__icon-wrap">
                  <Icon className="cinfo__icon" />
                </div>
                <div>
                  <p className="cinfo__label">{label}</p>
                  {Array.isArray(value) ? (
                    <div className="cinfo__value">
                      {value.map((phone, index) => (
                        <p key={index} className="cinfo__phone">{phone}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="cinfo__value">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="contacto__form" onSubmit={handleSubmit}>
            <div className="cform__row">
              <input 
                className="cform__input" 
                type="text" 
                name="nombre"
                placeholder="Nombre completo" 
                required 
              />
              <input 
                className="cform__input" 
                type="email" 
                name="email"
                placeholder="Correo electronico" 
                required 
              />
            </div>
            <div className="cform__row">
              <input 
                className="cform__input" 
                type="tel" 
                name="telefono"
                placeholder="Telefono" 
              />
              <input 
                className="cform__input" 
                type="text" 
                name="ruc"
                placeholder="RUC (opcional)" 
              />
            </div>
            <input 
              className="cform__input" 
              type="text" 
              name="razonSocial"
              placeholder="Razón Social (opcional)" 
            />
            <select 
              className="cform__input cform__select" 
              name="numeroContacto"
              value={selectedContact}
              onChange={(e) => setSelectedContact(e.target.value)}
              required
            >
              <option value="">Seleccionar número de contacto</option>
              {contactNumbers.map((contact, index) => (
                <option key={index} value={contact.number}>
                  {contact.label} - {contact.display}
                </option>
              ))}
            </select>
            <textarea
              className="cform__input cform__textarea"
              name="mensaje"
              placeholder="Describa los repuestos que necesita. Incluya referencia, marca y modelo del vehículo para una cotización más precisa."
              rows="4"
            />
            <button type="submit" className="cform__btn">
              <FiSend className="cform__btn-icon" /> Solicitar Cotización por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
