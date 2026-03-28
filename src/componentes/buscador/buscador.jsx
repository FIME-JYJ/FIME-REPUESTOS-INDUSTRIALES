import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './buscador.css';

const brands = [
  'Freightliner', 'International', 'Kenworth', 'Mercedes Benz',
  'Mack', 'Volvo', 'WesternStar', 'Detroit'
];

const modelsByBrand = {
  'Freightliner': ['C12', 'C13', 'C14', 'Cascadia', 'M2', 'Coronado'],
  'International': ['C15', 'C16', 'C17', 'ProStar', 'DuraStar', 'WorkStar'],
  'Kenworth': ['T680', 'T880', 'W990'],
  'Mercedes Benz': ['Actros', 'Axor'],
  'Mack': ['Anthem', 'Pinnacle', 'Granite'],
  'Volvo': ['VNL', 'VNR', 'VN'],
  'WesternStar': ['49X', '47X'],
  'Detroit': ['DD15', 'S60']
};

const types = [
  'Motor', 'Cabina', 'Chasis', 'Suspensión', 'Transmisión'
];

const partTypes = ['Original', 'Alternativo'];

export default function Buscador({ onSearch }) {
  const [term, setTerm] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [model, setModel] = useState('');
  const [partType, setPartType] = useState('');
  const [availableModels, setAvailableModels] = useState([]);

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setBrand(selectedBrand);
    setModel(''); // Reset model when brand changes
    setAvailableModels(modelsByBrand[selectedBrand] || []);
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch({ brand, category, term, model, partType });
    }
  };

  return (
    <section className="buscador">
      <div className="container">
        <div className="buscador__box">
          <h2 className="buscador__title">
            <FiSearch className="buscador__title-icon" /> Buscar Piezas
          </h2>
          <div className="buscador__row">
            <select
              className="buscador__select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Seleccionar Categoría</option>
              {types.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>

            <select
              className="buscador__select"
              value={brand}
              onChange={handleBrandChange}
            >
              <option value="">Seleccionar Marca</option>
              {brands.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>

            <select
              className="buscador__select"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              disabled={!brand}
            >
              <option value="">Seleccionar Modelo</option>
              {availableModels.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>

            <select
              className="buscador__select"
              value={partType}
              onChange={(e) => setPartType(e.target.value)}
            >
              <option value="">Seleccionar Tipo</option>
              {partTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="buscador__search-row">
            <input
              className="buscador__input"
              type="text"
              placeholder="Referencia o nombre del repuesto..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}
            />

            <button className="buscador__btn" onClick={handleSearchClick}>
              <FiSearch className="buscador__btn-icon" /> Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}