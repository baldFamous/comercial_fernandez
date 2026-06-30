export default function ServiciosPage() {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
      {/* Hero Section */}
      <section className="text-center mb-section-gap">
        <h1 className="font-display-lg text-display-lg text-primary mb-6">Nuestros Servicios</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Calidad, precisión y tecnología al servicio de tu vehículo. En Comercial Fernández somos expertos en restaurar y mantener la integridad mecánica y estética de tu automóvil.
        </p>
      </section>

      {/* Services Grid - Bento Style */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Windshield (Parabrisas) - Span 12 */}
        <article className="col-span-1 md:col-span-12 bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row group">
          <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-surface-container">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('./img4.webp')" }}
            ></div>
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4 text-secondary">
              <span className="material-symbols-outlined">car_repair</span>
              <span className="font-label-bold text-label-bold uppercase tracking-wider">Especialidad</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Reemplazo de Parabrisas</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Utilizamos cristales de calidad original (OEM) y poliuretanos de secado rápido, garantizando una instalación segura que recupera la rigidez estructural de tu vehículo en tiempo récord. Nuestro proceso asegura un sellado perfecto contra filtraciones y ruidos.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Instalación certificada bajo estándares de seguridad.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Materiales homologados para máxima durabilidad.</span>
              </li>
            </ul>
            <a 
              href="/contacto#cotizacion"
              className="self-start text-secondary font-label-bold text-label-bold flex items-center gap-2 hover:text-secondary-container transition-colors group/btn"
            >
              Cotizar Parabrisas <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </article>

        {/* Bodywork (Desabolladura) - Span 6 */}
        <article className="col-span-1 md:col-span-6 bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-hidden shadow-sm flex flex-col group hover:border-outline-variant transition-colors">
          <div className="h-56 relative overflow-hidden bg-surface-container">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('./img8.webp')" }}
            ></div>
          </div>
          <div className="p-8 flex-grow flex flex-col">
            <div className="flex items-center gap-2 mb-3 text-secondary">
              <span className="material-symbols-outlined">build</span>
              <h2 className="font-headline-md text-headline-md text-primary">Desabolladura</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
              Restauramos la línea original de tu vehículo tras colisiones mediante técnicas de desabollado de precisión. Empleamos herramientas de última generación y bancadas de tracción computarizadas para asegurar que la geometría del chasis vuelva a las especificaciones exactas del fabricante, garantizando tu seguridad.
            </p>
            <a 
              href="/contacto#cotizacion"
              className="w-full bg-surface-container text-primary font-label-bold text-label-bold px-4 py-3 rounded hover:bg-surface-container-high transition-colors flex items-center justify-center"
            >
              Cotizar Desabolladura
            </a>
          </div>
        </article>

        {/* Painting (Pintura) - Span 6 */}
        <article className="col-span-1 md:col-span-6 bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-hidden shadow-sm flex flex-col group hover:border-outline-variant transition-colors">
          <div className="h-56 relative overflow-hidden bg-surface-container">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('./img9.webp')" }}
            ></div>
          </div>
          <div className="p-8 flex-grow flex flex-col">
            <div className="flex items-center gap-2 mb-3 text-secondary">
              <span className="material-symbols-outlined">format_paint</span>
              <h2 className="font-headline-md text-headline-md text-primary">Pintura Automotriz</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
              Acabados perfectos gracias a nuestra cabina de pintura presurizada y sistema de igualación de color computarizado. Utilizamos pinturas base agua amigables con el medio ambiente y barnices de alta resistencia (High Solid) que proporcionan un brillo duradero y protección superior contra los rayos UV y el desgaste diario.
            </p>
            <a 
              href="/contacto#cotizacion"
              className="w-full bg-surface-container text-primary font-label-bold text-label-bold px-4 py-3 rounded hover:bg-surface-container-high transition-colors flex items-center justify-center"
            >
              Cotizar Pintura
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
