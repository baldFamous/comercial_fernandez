export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-surface-container-high">
          <img 
            alt="Hero Image" 
            className="w-full h-full object-cover opacity-60" 
            src="./img14.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
          <div className="max-w-2xl">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">Parabrisas y Cristales para Maquinaria Pesada, Vehículos y Camiones en la Región de Coquimbo</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">Servicio en terreno e instalación express para minería, transporte y agro en toda la región. Minimizamos el tiempo de detención de tus equipos con stock inmediato.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contacto#cotizacion"
                className="flex items-center justify-center gap-2 bg-secondary text-on-secondary font-headline-md text-label-bold md:text-headline-md px-6 py-4 rounded-DEFAULT hover:bg-secondary-container transition-all shadow-md active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                Cotizar Maquinaria / Camión
              </a>
              <a 
                href="/contacto#cotizacion"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary font-headline-md text-label-bold md:text-headline-md px-6 py-4 rounded-DEFAULT hover:bg-surface-container transition-all active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-[20px]">directions_car</span>
                Cotizar Vehículo Particular
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-on-primary py-8 border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[32px] text-inverse-primary">verified</span>
            <div>
              <h4 className="font-headline-md text-[18px] md:text-[20px]">Más de 15 años de experiencia</h4>
              <p className="font-caption text-caption text-primary-fixed-dim">Trayectoria comprobada en el rubro automotriz</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-on-primary/20"></div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[32px] text-inverse-primary">timer</span>
            <div>
              <h4 className="font-headline-md text-[18px] md:text-[20px]">Servicio Rápido</h4>
              <p className="font-caption text-caption text-primary-fixed-dim">Optimizamos el tiempo de tu reparación</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-on-primary/20"></div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[32px] text-inverse-primary">shield</span>
            <div>
              <h4 className="font-headline-md text-[18px] md:text-[20px]">Garantía de Calidad</h4>
              <p className="font-caption text-caption text-primary-fixed-dim">Respaldo total en repuestos y mano de obra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Nuestros Servicios Especializados</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Soluciones integrales para la estructura y cristales de su vehículo, utilizando tecnología moderna y procesos estandarizados.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Service 1 */}
          <div className="bg-surface-container-lowest rounded-lg border border-surface-variant overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="h-48 overflow-hidden bg-surface-container-high relative">
              <img 
                alt="Cristales para Maquinaria Pesada" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="./img11.webp"
              />
              <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-label-bold text-[12px] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">precision_manufacturing</span>
                Especialidad
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-[20px] text-primary mb-2">Parabrisas para Maquinaria Pesada</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Instalación de cristales para excavadoras, retroexcavadoras, grúas y maquinaria agrícola. Servicio en terreno (Ovalle, Andacollo, minería) con cristales de alta resistencia.</p>
              <a className="inline-flex items-center gap-1 font-label-bold text-label-bold text-secondary hover:text-secondary-container transition-colors" href="/servicios">
                Conocer más <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-surface-container-lowest rounded-lg border border-surface-variant overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="h-48 overflow-hidden bg-surface-container-high relative">
              <img 
                alt="Flotas de Camiones y Buses" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="./img3.webp"
              />
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-[20px] text-primary mb-2">Flotas de Camiones y Buses</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Cambio de vidrios de camiones en La Serena y toda la región. Instalación rápida para minimizar tiempos de inactividad de tu flota de transporte.</p>
              <a className="inline-flex items-center gap-1 font-label-bold text-label-bold text-secondary hover:text-secondary-container transition-colors" href="/servicios">
                Conocer más <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-surface-container-lowest rounded-lg border border-surface-variant overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="h-48 overflow-hidden bg-surface-container-high relative">
              <img 
                alt="Vehículos Particulares y Sedanes" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="./img2.webp"
              />
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-[20px] text-primary mb-2">Taller de Desabolladura</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Reparación de autos chocados en Coquimbo. Eliminación de abolladuras complejas recuperando las líneas originales de fábrica para toda la región.</p>
              <a className="inline-flex items-center gap-1 font-label-bold text-label-bold text-secondary hover:text-secondary-container transition-colors" href="/servicios">
                Conocer más <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Coverage Semantic Block */}
      <section className="bg-surface-container-high py-16 w-full border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Cobertura en Terreno en la Región de Coquimbo</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto mb-8">
            Nuestro principal diferencial es llegar donde tu flota o maquinaria nos necesite. Ofrecemos servicio a domicilio y en faena en <strong>Coquimbo, La Serena, Ovalle, Andacollo, Vicuña, Los Vilos e Illapel</strong>. Especialistas en faenas mineras y agrícolas con equipos técnicos móviles altamente capacitados.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Coquimbo', 'La Serena', 'Ovalle', 'Andacollo', 'Vicuña', 'Illapel', 'Los Vilos'].map(city => (
              <span key={city} className="px-4 py-2 bg-surface border border-outline-variant rounded-full text-label-bold font-label-bold text-on-surface">
                <span className="material-symbols-outlined text-[16px] align-middle mr-1 text-primary">location_on</span>
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="ubicacion" className="bg-surface-container-low py-16 w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">Encuéntrenos en Coquimbo</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">Visite nuestro taller equipado con tecnología de punta. Atendemos a clientes de Coquimbo, La Serena, Ovalle, Vicuña e Illapel con evaluación sin compromiso.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-primary">Dirección Principal</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Baquedano 605<br/>Coquimbo, Región de Coquimbo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-primary">Horario de Atención</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Lunes a Viernes: 09:00 - 13:00 y 15:00 - 18:00<br/>Sábados: 09:00 - 13:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">phone</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-primary">Contacto Directo</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">+56 9 8500 7356<br/>comercial.fernandez.coquimbo@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant shadow-sm relative mt-8 lg:mt-0">
              <iframe
                title="Mapa de ubicación - Baquedano 605, Coquimbo"
                src="https://maps.google.com/maps?q=Baquedano%20605,%20Coquimbo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
