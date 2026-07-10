export default function ServiciosPage() {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
      {/* Hero Section */}
      <section className="text-center mb-section-gap">
        <h1 className="font-display-lg text-display-lg text-primary mb-6">Nuestros Servicios</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Calidad, precisión y tecnología al servicio de tu flota. En Comercial Fernandez de la Peña somos especialistas en cristales para maquinaria pesada, camiones y vehículos particulares en toda la Región de Coquimbo.
        </p>
      </section>

      {/* Services Grid - Bento Style */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Machinery (Parabrisas Maquinaria) - Span 12 */}
        <article className="col-span-1 md:col-span-12 bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row group">
          <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-surface-container">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('./img15.webp')" }}
            ></div>
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4 text-secondary">
              <span className="material-symbols-outlined">precision_manufacturing</span>
              <span className="font-label-bold text-label-bold uppercase tracking-wider">Especialidad Industrial</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Parabrisas para Maquinaria Pesada Coquimbo</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Venta e instalación de cristales de alta resistencia para excavadoras, retroexcavadoras, grúas y maquinaria agrícola. Brindamos servicio en terreno directamente en faenas mineras y zonas alejadas como Andacollo, Ovalle e Illapel para minimizar el tiempo de detención de tus equipos.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Instalación certificada en terreno para minería y agro.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Cristales laminados de alta durabilidad y resistencia extrema.</span>
              </li>
            </ul>
            <a 
              href="/contacto#cotizacion"
              className="self-start text-secondary font-label-bold text-label-bold flex items-center gap-2 hover:text-secondary-container transition-colors group/btn"
            >
              Cotizar Cristal Industrial <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </article>

        {/* Trucks (Camiones) - Span 6 */}
        <article className="col-span-1 md:col-span-6 bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-hidden shadow-sm flex flex-col group hover:border-outline-variant transition-colors">
          <div className="h-56 relative overflow-hidden bg-surface-container">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('./img3.webp')" }}
            ></div>
          </div>
          <div className="p-8 flex-grow flex flex-col">
            <div className="flex items-center gap-2 mb-3 text-secondary">
              <span className="material-symbols-outlined">local_shipping</span>
              <h2 className="font-headline-md text-headline-md text-primary">Flotas de Camiones y Buses</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
              Expertos en cambio de vidrios de camiones en La Serena y la Región de Coquimbo. Atendemos emergencias de flotas de transporte con stock inmediato para mantener tu logística operativa en todo momento.
            </p>
            <a 
              href="/contacto#cotizacion"
              className="w-full bg-surface-container text-primary font-label-bold text-label-bold px-4 py-3 rounded hover:bg-surface-container-high transition-colors flex items-center justify-center"
            >
              Cotizar para Camiones
            </a>
          </div>
        </article>

        {/* Particular (Vehículos) - Span 6 */}
        <article className="col-span-1 md:col-span-6 bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-hidden shadow-sm flex flex-col group hover:border-outline-variant transition-colors">
          <div className="h-56 relative overflow-hidden bg-surface-container">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('./img4.webp')" }}
            ></div>
          </div>
          <div className="p-8 flex-grow flex flex-col">
            <div className="flex items-center gap-2 mb-3 text-secondary">
              <span className="material-symbols-outlined">directions_car</span>
              <h2 className="font-headline-md text-headline-md text-primary">Vehículos Particulares</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
              Instalación y recambio de parabrisas, lunetas y vidrios laterales en Coquimbo para automóviles, SUVs y camionetas. Además, contamos con servicios de desabolladura y pintura automotriz de alta calidad.
            </p>
            <a 
              href="/contacto#cotizacion"
              className="w-full bg-surface-container text-primary font-label-bold text-label-bold px-4 py-3 rounded hover:bg-surface-container-high transition-colors flex items-center justify-center"
            >
              Cotizar para Automóvil
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
