import React, { useState } from 'react';
import './catalogo.css';

const vehiculos = [
    { id: 1, nombre: 'Mercedes-Benz New Actros', tipo: 'Remolcador', hp: '450 HP', imagen: 'ruta/actros.jpg' },
    { id: 2, nombre: 'Freightliner New Cascadia', tipo: 'Remolcador', hp: '505 HP', imagen: 'ruta/cascadia.jpg' },
    { id: 3, nombre: 'Mercedes-Benz Atego 1726', tipo: 'Camión', hp: '256 HP', imagen: 'ruta/atego.jpg' },
    { id: 4, nombre: 'Nuevo Modelo Camión', tipo: 'Volquete', hp: '380 HP', imagen: 'ruta/nuevo-camion.jpg'},
    // Agrega más vehículos aquí
];

export default function Catalogo() {
    return (
        <div className="catalogo-page">
            <div className="container catalogo-layout">

                {/* Barra Lateral de Filtros */}
                <aside className="catalogo-filters">
                    <h3>Filtrar por:</h3>
                    <div className="filter-group">
                        <h4>Tipo de Vehículo</h4>
                        <label><input type="checkbox" /> Remolcadores</label>
                        <label><input type="checkbox" /> Camiones</label>
                        <label><input type="checkbox" /> Volquetes</label>
                    </div>
                    <div className="filter-group">
                        <h4>Marca</h4>
                        <label><input type="checkbox" /> Mercedes-Benz</label>
                        <label><input type="checkbox" /> Freightliner</label>
                    </div>
                </aside>

                {/* Cuadrícula de Vehículos */}
                <main className="catalogo-main">
                    <div className="catalogo-header">
                        <h2>Modelos Disponibles</h2>
                        <p>{vehiculos.length} unidades encontradas</p>
                    </div>

                    <div className="catalogo-grid">
                        {vehiculos.map(v => (
                            <div key={v.id} className="vehicle-card">
                                <div className="vehicle-img">
                                    <img src={v.imagen} alt={v.nombre} />
                                </div>
                                <div className="vehicle-info">
                                    <span className="vehicle-tag">{v.tipo}</span>
                                    <h3>{v.nombre}</h3>
                                    <p className="vehicle-specs">Potencia: {v.hp}</p>
                                    <button className="vehicle-btn">Ver Detalle</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

            </div>
        </div>
    );
}