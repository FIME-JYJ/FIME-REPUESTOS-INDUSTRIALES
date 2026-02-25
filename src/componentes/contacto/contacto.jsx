import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import './contacto.css';

const contactItems = [
  { icon: FiPhone, label: 'Telefono',  value: '+57 310 000 0000' },
  { icon: FiMail,  label: 'Correo',    value: 'ventas@fimerepuestos.com' },
  { icon: FiMapPin, label: 'Direccion', value: 'Ciudad, Colombia' },
  { icon: FiClock, label: 'Horario',   value: 'Lun - Sab: 8:00am - 6:00pm' },
];

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
                  <p className="cinfo__value">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="contacto__form" onSubmit={handleSubmit}>
            <div className="cform__row">
              <input className="cform__input" type="text"  placeholder="Nombre completo"    required />
              <input className="cform__input" type="email" placeholder="Correo electronico" required />
            </div>
            <input className="cform__input" type="tel" placeholder="Telefono" />
            <select className="cform__input cform__select">
              <option value="">Tipo de consulta</option>
              <option>Consulta de repuesto</option>
              <option>Cotizacion</option>
              <option>Soporte tecnico</option>
              <option>Otro</option>
            </select>
            <textarea
              className="cform__input cform__textarea"
              placeholder="Que repuesto necesita? Incluya referencia, marca y modelo del vehiculo."
              rows="4"
            />
            <button type="submit" className="cform__btn">
              <FiSend className="cform__btn-icon" /> Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
