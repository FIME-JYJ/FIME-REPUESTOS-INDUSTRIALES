// Centraliza los datos de las piezas para usarlos en Catalogo, Destacados y DetallePieza
import camisasImg from './img/Catalogo/camisas.webp';
import canillerasImg from './img/Catalogo/canilleras.webp';
import escapeImg from './img/Catalogo/escape.webp';
import culataImg from './img/Catalogo/culata.webp';
import anillosImg from './img/Catalogo/anillos.webp';
import ciguelaImg from './img/Catalogo/ciguenal.webp';
import volanteImg from './img/Catalogo/volante.webp';
import bielaImg from './img/Catalogo/biela.webp';
import arbolImg from './img/Catalogo/arbol.webp';
import bombaImg from './img/Catalogo/bomba.webp';
import campanaImg from './img/Catalogo/campana.webp';
import carterImg from './img/Catalogo/carter.webp';
import setEmpaquesImg from './img/Catalogo/setEmpaques.webp';
import kitEmpaquesImg from './img/Catalogo/kitEmpaques.webp';
import volanteDetroitImg from './img/Catalogo/volanteDetroit.webp';
import inyectorImg from './img/Catalogo/inyector.webp';
import sensorImg from './img/Catalogo/sensor.webp';
import turboImg from './img/Catalogo/turbo.webp';
import bombaDetroitImg from './img/Catalogo/bombaDetroit.webp';
import radiadorImg from './img/Catalogo/radiador.webp';
import overhaulImg from './img/Catalogo/overhaul.webp';
import bombaMerImg from './img/Catalogo/bombaMer.webp';
import turbocomImg from './img/Catalogo/turbocom.webp';
import compresorImg from './img/Catalogo/compresor.webp';
import turboCumminsImg from './img/Catalogo/turboCummins.webp';
import turboHolsetImg from './img/Catalogo/turboHolset.webp';
import embragueFullerImg from './img/Catalogo/embragueFuller.webp';
import bolsadaireImg from './img/Catalogo/bolsadaire.webp';
import farosImg from './img/Catalogo/faros.webp';
import valvulasecImg from './img/Catalogo/valvulasec.webp';
import tableroImg from './img/Catalogo/tablero.webp';
import palancaImg from './img/Catalogo/palanca.webp';
import lamparaImg from './img/Catalogo/lampara.webp';
import panelImg from './img/Catalogo/panel.webp';
import carcasaImg from './img/Catalogo/carcasa.webp';
import velocimetroImg from './img/Catalogo/velocimetro.webp';
import bolsadAireCabinaImg from './img/Catalogo/bolsadAireCabina.webp';
import amortiguadorImg from './img/Catalogo/amortiguador.webp';
import soporteImg from './img/Catalogo/soporte.webp';
import placaCapotImg from './img/Catalogo/placaCapot.webp';
import cornetaImg from './img/Catalogo/corneta.webp';

const vehiculos = [
    { id: 1, nombre: 'CAMISAS DE MOTOR Y ANILLOS ORIGINAL x6 unidad', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'Actros', tipo: 'Original', imagen: camisasImg, precio: 320000, descripcion: 'Este kit original de 6 camisas y anillos está diseñado para motores de 6 cilindros, asegurando un sellado de combustión óptimo, reduciendo la fricción y disipando el calor.', tag: 'Nuevo' },
    { id: 2, nombre: 'JGO METAL BCDA.STD OM457', categoria: 'Motor', marca: 'MAHLE', modelo: 'Actros', tipo: 'Original', imagen: canillerasImg, precio: 240000, descripcion: 'Juego de metales de bancada y biela para OM457.', tag: 'Popular' },
    { id: 3, nombre: 'EMPAQUE DE ESCAPE', categoria: 'Motor', marca: 'ELRI', modelo: 'Axor', tipo: 'Original', imagen: escapeImg, precio: 45000, descripcion: 'Empaque de escape de alta resistencia térmica.', tag: 'Oferta' },
    { id: 4, nombre: 'EMPAQUE DE CULATA', categoria: 'Motor', marca: 'ELRI', modelo: 'Axor', tipo: 'Original', imagen: culataImg, precio: 180000, descripcion: 'Empaque de culata reforzado para motores diesel.', tag: 'Nuevo'},
    { id: 5, nombre: 'ANILLOS DE MOTOR', categoria: 'Motor', marca: 'KSP', modelo: 'Cascadia', tipo: 'Original', imagen: anillosImg, precio: 320000, descripcion: 'Anillos de pistón de alta durabilidad.', tag: 'Popular' },
    { id: 6, nombre: 'CIGUENAL ORIGINAL', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'Actros', tipo: 'Original', imagen: ciguelaImg, precio: 900000, descripcion: 'Cigüeñal equilibrado y rectificado.', tag: null },
    { id: 7, nombre: 'VOLANTE DE INERCIA  CON CORONA DE ARRANQUE', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'M2', tipo: 'Original', imagen: volanteImg, precio: 420000, descripcion: 'Volante de inercia con corona original.' },
    { id: 8, nombre: 'BIELA', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'M2', tipo: 'Original', imagen: bielaImg, precio: 150000, descripcion: 'Biela forjada de alto rendimiento.' },
    { id: 9, nombre: 'ARBOL DE EJE DE LEVAS', categoria: 'Motor', marca: 'Volvo', modelo: 'VN', tipo: 'Original', imagen: arbolImg, precio: 380000, descripcion: 'Árbol de levas con tratamiento superficial.' },
    { id: 10, nombre: 'BOMBA DE COMBUSTIBLE', categoria: 'Motor', marca: 'Mack', modelo: 'Anthem', tipo: 'Original', imagen: bombaImg, precio: 260000, descripcion: 'Bomba de combustible de alta presión.' },
    { id: 11, nombre: 'CAMPANA DE DISTRIBUCION ORIGINAL', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'Axor', tipo: 'Original', imagen: campanaImg, precio: 110000, descripcion: 'Campana de distribución original Mercedes.' },
    { id: 12, nombre: 'CARTER COMPLETO DE MOTOR ORIGINAL', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'Actros', tipo: 'Alternativo', imagen: carterImg, precio: 210000, descripcion: 'Cárter completo con montaje original.' },
    { id: 13, nombre: 'SET DE EMPAQUES DE MOTOR ', categoria: 'Motor', marca: 'Detroit', modelo: 'DD15', tipo: 'Alternativo', imagen: setEmpaquesImg, precio: 125000, descripcion: 'Set completo de empaques para motores DD15.' },
    { id: 14, nombre: 'KIT EMPAQUE CULATA S-60', categoria: 'Motor', marca: 'Detroit', modelo: 'S60', tipo: 'Alternativo', imagen: kitEmpaquesImg, precio: 98000, descripcion: 'Kit de empaques para culata S-60.' },
    { id: 15, nombre: 'VOLANTE MOTOR S50-60', categoria: 'Motor', marca: 'Detroit', modelo: 'S60', tipo: 'Alternativo', imagen: volanteDetroitImg, precio: 85000, descripcion: 'Volante de inercia Detroit S50-60.' },
    { id: 16, nombre: 'INYECTOR COMPLETO S60 12L', categoria: 'Motor', marca: 'Detroit', modelo: 'S60', tipo: 'Alternativo', imagen: inyectorImg, precio: 220000, descripcion: 'Inyector completo para S60 12L.' },
    { id: 17, nombre: 'SENSOR PRESION DE ACEITE', categoria: 'Motor', marca: 'Detroit', modelo: 'DD15', tipo: 'Alternativo', imagen: sensorImg, precio: 18500, descripcion: 'Sensor de presión de aceite compatible DD15.' },
    { id: 18, nombre: 'TURBO S60 D4', categoria: 'Motor', marca: 'Detroit', modelo: 'S60', tipo: 'Alternativo', imagen: turboImg, precio: 420000, descripcion: 'Turbo de alto flujo para S60 D4.' },
    { id: 19, nombre: 'BOMBA DE ACEITE  ORIGINAL', categoria: 'Motor', marca: 'Detroit', modelo: 'DD15', tipo: 'Alternativo', imagen: bombaDetroitImg, precio: 76000, descripcion: 'Bomba de aceite original Detroit.' },
    { id: 20, nombre: 'BHT B4761 RADIADOR DE AGUA', categoria: 'Motor', marca: 'Detroit', modelo: 'M2', tipo: 'Alternativo', imagen: radiadorImg, precio: 195000, descripcion: 'Radiador de agua BHT B4761.' },
    

    // Productos añadidos desde la sección 'Destacados' — ahora forman parte del catálogo global
    { id: 21, nombre: 'Turbo Cummins ISX Holset', categoria: 'Motor', marca: 'Cummins', modelo: 'ISX', tipo: 'Original', imagen: camisasImg, precio: 320000, descripcion: 'Turbo Holset para motores Cummins ISX — mejora la respuesta y eficiencia del motor, diseñado para altas prestaciones.' , tag: 'Nuevo' },
    { id: 22, nombre: 'Kit de Embrague Eaton Fuller (15.5")', categoria: 'Transmisión', marca: 'Eaton', modelo: 'Fuller', tipo: 'Original', imagen: volanteImg, precio: 185000, descripcion: 'Kit de embrague Eaton Fuller compatible con cajas de 15.5"; incluye disco, prensa y rulemán.' , tag: 'Popular' },
    { id: 23, nombre: 'Bolsa de Aire de Cabina / Chasis', categoria: 'Suspensión', marca: 'AirTech', modelo: 'Universal', tipo: 'Alternativo', imagen: bombaImg, precio: 95000, descripcion: 'Bolsa de aire de alta resistencia para suspensión de cabina y chasis, ayuda a mejorar el confort y la estabilidad.' , tag: 'Oferta' },
    { id: 24, nombre: 'Faros LED de Alta Definición', categoria: 'Eléctrico', marca: 'Lumina', modelo: 'LED-HD', tipo: 'Alternativo', imagen: turboImg, precio: 650000, descripcion: 'Faros LED de alta definición con mayor alcance y eficiencia energética, ideales para conducción nocturna.' , tag: 'Nuevo' },
    { id: 25, nombre: 'Válvula Secadora de Aire (Bendix AD-IS)', categoria: 'Frenos', marca: 'Bendix', modelo: 'AD-IS', tipo: 'Original', imagen: radiadorImg, precio: 450000, descripcion: 'Válvula secadora de aire Bendix AD-IS para sistemas de freno por aire, garantiza la eliminación de humedad.' , tag: 'Popular' },
    { id: 26, nombre: 'Asiento con Suspensión Neumática (Premium)', categoria: 'Cabina', marca: 'ComfortSeat', modelo: 'P-Active', tipo: 'Original', imagen: anillosImg, precio: 278000, descripcion: 'Asiento premium con suspensión neumática y ajustes ergonómicos para largas jornadas de conducción.' },




    //PRODUCTOS AHORA
    { id: 27, nombre: 'OVERHAULL DE CUMINS ISX', categoria:  'Motor', marca: 'Cumins', tipo: 'Alternativo', imagen: overhaulImg, descripcion: 'Reparación mayor del motor Cummins ISX para camiones International. Incluye desarme completo, inspección, cambio de componentes internos como pistones, anillos, cojinetes y empaques, restaurando el rendimiento original del motor.'},
    { id: 28, nombre: 'BOMBA DE AGUA', categoria:  'Motor', marca: 'OEGE', tipo: 'Alternativo', modelo: 'M2 112', imagen: bombaMerImg, descripcion: 'Bomba de agua para sistema de refrigeración del motor en camiones Mercedes-Benz M2 112. Marca OE Germany, repuesto alternativo de calidad equivalente al original.'},
    { id: 29, nombre: 'TURBO COMPRESOR', categoria:  'Motor', marca: 'BorgWarner', tipo: 'Alternativo', modelo: 'M2 112', imagen: turbocomImg, detalle: 'Turbocompresor para motor Mercedes-Benz M2 112. Componente del sistema de admisión que aumenta la potencia del motor mediante la compresión del aire de entrada.'},
    { id: 30, nombre: 'ESPEJO COMPLETO RETROVISOR', categoria:  'Cabina', marca: 'New Star', tipo: 'Alternativo', modelo: 'M2 112', imagen: turbocomImg, descripcion: 'Espejo retrovisor completo para camiones M2 112. Permite visibilidad lateral y posterior del vehículo, mejorando la seguridad en maniobras y conducción.'},
    { id: 31, nombre: 'COMPRESOR DE AIRE ACONDICIONADO', categoria:  'Cabina', marca: 'Sanden', tipo: 'Alternativo', modelo: 'M2 112', imagen: compresorImg, descripcion: 'Compresor del sistema de aire acondicionado para cabina de camiones M2 112. Responsable de comprimir el refrigerante para el enfriamiento del habitáculo.'},
    { id: 32, nombre: 'TURBO COMPRESOR', categoria:  'Motor', marca: 'CUMMISN ', tipo: 'Original', modelo: 'ISX', imagen: turboCumminsImg, descripcion: 'Turbocompresor original Cummins para motores ISX. Optimiza la entrada de aire al motor para mejorar potencia, eficiencia de combustión y rendimiento general.'},
    { id: 33, nombre: 'TURBO COMPRESOR', categoria:  'Motor', marca: 'HOLSET ', tipo: 'Alternativo', modelo: 'International 7600/9200/LT (2011+)', imagen: turboHolsetImg, descripcion: 'Turbocompresor Holset compatible con camiones International 7600, 9200 y serie LT desde 2011 en adelante. Diseñado para mejorar el rendimiento del motor diésel bajo carga pesada.'},
    { id: 34, nombre: 'EMBRAGUE 15.5 1/2 X 2 1700 LB 7 RESORTES EATON', categoria:  'Motor', marca: 'FULLER', tipo: 'Original', modelo: '15.5" 1700 LB', imagen: embragueFullerImg, descripcion: 'Kit de embrague Eaton Fuller de 15.5 pulgadas, capacidad de 1700 lb con 7 resortes. Transmite la potencia del motor a la transmisión de manera eficiente en camiones de carga pesada.'},
    { id: 35, nombre: 'BOLSA DE AIRE DE TRACTO POSTERIOR', categoria:  'Chasis', marca: 'FIRESTONE / GOOD YEARD / SAMPA', tipo: '', modelo: 'CL 112, CL 120, M2 106, M2 112', imagen: bolsadaireImg, descripcion: 'Bolsa de aire para suspensión trasera del sistema neumático del camión. Absorbe impactos, mejora la estabilidad y soporta la carga del eje posterior.'},
    { id: 36, nombre: 'FARO DELANTERO RH', categoria:  'Cabina', marca: 'NEW STAR', tipo: 'Original ', modelo: 'Freightliner M2 112', imagen: farosImg, descripcion: 'Faro delantero derecho (RH) para camiones Freightliner M2 112. Proporciona iluminación frontal para conducción segura en condiciones de baja visibilidad.'},
    { id: 37, nombre: 'VÁLVULA SECADORA DE AIRE AD9', categoria: 'Chasis', marca: 'Bendix', tipo: 'Original', modelo: 'BW 800202', imagen: valvulasecImg, descripcion: 'Válvula secadora de aire AD9 original marca Bendix, utilizada en el sistema de frenos de aire. Compatible con Freightliner M2 112, M2 106, Columbia CL120, Kenworth T800 e International 7600 / 9200.'},
    { id: 38, nombre: 'TABLERO DE INSTRUMENTOS', categoria: 'Cabina', marca: 'Freightliner', tipo: 'Original', modelo: 'N/A', imagen: tableroImg, descripcion: 'Tablero de instrumentos original Freightliner, utilizado para visualización de indicadores del vehículo como velocidad, RPM, presión de aire y nivel de combustible. Aplicable en camiones Freightliner según modelo y configuración.'},
    { id: 39, nombre: 'PALANCA DIRECCIONAL', categoria: 'Cabina', marca: 'Freightliner', tipo: 'Original', modelo: 'A06-36956-003', imagen: palancaImg, descripcion: 'Palanca direccional (switch de luces y direccionales) para camiones Freightliner. Controla funciones de luces altas, bajas, direccionales y en algunos modelos funciones auxiliares del sistema eléctrico de la cabina.' },
    { id: 40, nombre: 'LÁMPARA DE VIRAJE DE CABINA', categoria: 'Cabina', marca: 'Freightliner', tipo: 'Original', modelo: 'A06-40131-000', imagen: lamparaImg, descripcion: 'Lámpara de viraje lateral de cabina para camiones Freightliner. Indica los cambios de dirección del vehículo (izquierda/derecha), mejorando la visibilidad y seguridad en maniobras y giros.' },
    { id: 41, nombre: 'PANEL DE TABLERO DE CABINA', categoria: 'Cabina', marca: 'Freightliner', tipo: 'Original', modelo: 'N/A', imagen: panelImg, descripcion: 'Panel de tablero de cabina para camiones Freightliner. Soporte estructural donde se alojan los instrumentos, indicadores y controles del vehículo, facilitando la visualización y manejo de funciones del camión.' },
    { id: 42, nombre: 'CARCASA DEL TABLERO DE CABINA', categoria: 'Cabina', marca: 'Freightliner', tipo: 'Alternativo', modelo: 'N/A', imagen: carcasaImg, descripcion: 'Carcasa plástica del tablero de instrumentos de cabina. Sirve como estructura de soporte y protección para los indicadores, velocímetro y controles del panel del conductor.' },
    { id: 43, nombre: 'VELOCÍMETRO DE TABLERO', categoria: 'Cabina', marca: 'Freightliner', tipo: 'Original', modelo: 'N/A', imagen: velocimetroImg, descripcion: 'Instrumento del tablero de cabina que indica la velocidad del vehículo en tiempo real. Es parte del conjunto de instrumentos del panel principal.' },
    { id: 44, nombre: 'BOLSA DE AIRE DE CABINA', categoria: 'Cabina', marca: 'Firestone / Goodyear / Sampa', tipo: 'Alternativo', modelo: 'Freightliner M2 / CL Series', imagen: bolsadAireCabinaImg, descripcion: 'Elemento del sistema de suspensión de cabina que absorbe vibraciones y golpes, mejorando la comodidad del conductor y reduciendo el impacto de la carretera.'},{ id: 45, nombre: 'AMORTIGUADOR DE CABINA', categoria: 'Cabina', marca: 'Gabriel / Monroe / Sampa', tipo: 'Alternativo', modelo: 'Freightliner M2 / CL Series', imagen: amortiguadorImg, descripcion: 'Amortiguador que forma parte de la suspensión de cabina, encargado de controlar el movimiento y reducir vibraciones para mayor estabilidad y confort.' },
    { id: 46, nombre: 'SOPORTE DE CABINA', categoria: 'Cabina', marca: 'Freightliner', tipo: 'Original', modelo: 'N/A', imagen: soporteImg, descripcion: 'Estructura metálica que sostiene y fija la cabina al chasis del camión, asegurando estabilidad y correcta alineación del conjunto del vehículo.' },
    { id: 47, nombre: 'PLACA DE CAPOT DE CABINA', categoria: 'Cabina', marca: 'Freightliner', tipo: 'Original', modelo: 'N/A', imagen: placaCapotImg, descripcion: 'Placa o emblema frontal del capó de la cabina. Cumple función estética e identificativa de la marca del vehículo.' },
    { id: 48, nombre: 'CORNETA DE TECHO DE CABINA', categoria: 'Cabina', marca: 'FIAMM / HADLEY / Sampa', tipo: 'Alternativo', modelo: 'Universal camión pesado', imagen: cornetaImg, descripcion: 'Corneta neumática instalada en el techo de la cabina. Emite señal sonora de alta potencia para advertencia en carretera y seguridad vial.' }


];

export default vehiculos;
