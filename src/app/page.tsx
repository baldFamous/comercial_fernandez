export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-surface-container-high">
          <img 
            alt="Hero Image" 
            className="w-full h-full object-cover opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8lvTOAmsCJcSV81VrlrA_bZ4j9GGYFEbsxVEssQKabh2G-dX_Q_NOxPrL-Ss5UhbLpM0UeULMDvwdneWHC9KW_lHSnRYjU5u-k-UAWpCI1Tkq-z4wYtuaMNzNOPM4QsgAn_n2ldruyqm-ynWcPNcTIKpRzSXHMxjdlr9UfHODu0ohwCFO2KJSS6uFKBDxT_cc4AlKZ-eaOKbJ044sgcKVjpkK4bPaPRYrhHYvUqVmCKXBgH4SyxfOATOxOnPdUc3oTylm4sOwulY"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-surface-container border border-outline-variant font-label-bold text-label-bold text-primary">Servicio Técnico Profesional</span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">Especialistas en Cristales y Carrocería en Coquimbo</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">Devolvemos la seguridad y estética a tu vehículo con precisión mecánica. Atención rápida, materiales certificados y acabados impecables.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-secondary text-on-secondary font-headline-md text-label-bold md:text-headline-md px-6 py-4 rounded-DEFAULT hover:bg-secondary-container transition-all shadow-md active:scale-[0.98]">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Cotizar por WhatsApp
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-primary text-primary font-headline-md text-label-bold md:text-headline-md px-6 py-4 rounded-DEFAULT hover:bg-surface-container transition-all active:scale-[0.98]">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
                Ver Ubicación
              </button>
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
                alt="Reemplazo de Cristales" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtQ_QMU86h7fqA25hLBpvJExGmfBy0f9r-_uzo_30Ex40BzALnQMRiWLLhmykQJ-zfnP38mioj69aFrkJ3qFmwrPnihvggGsDGhzd8IbiBa7Ws7drH_lIQ5flVUWHTnbMn9dsK125CqpLtJqqso9f9DeX_81-dIFox9EOl_PzCkP6p8taWaPWGXGLfzQNQ5_1ekcXpt6pX0RU8cFFAxSYzDgH10FAqL20pNZlm2ompbBXpbjdqwGrGAUCtk1afq-iI9A60Qj7xypI"
              />
              <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-label-bold text-[12px] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">car_repair</span>
                Especialidad
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-[20px] text-primary mb-2">Reemplazo de Cristales</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Instalación y recambio de parabrisas, lunetas y vidrios laterales con sellos originales y garantía de filtración cero.</p>
              <a className="inline-flex items-center gap-1 font-label-bold text-label-bold text-secondary hover:text-secondary-container transition-colors" href="#">
                Conocer más <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-surface-container-lowest rounded-lg border border-surface-variant overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="h-48 overflow-hidden bg-surface-container-high relative">
              <img 
                alt="Desabolladura" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADfriButqrsbJ2QbHPiVQq8Gr9bdMO1qjMpIiUZimJo1I3g8yy3iz3mEfBqp5S_P4UKdj6BzZeYS0iWtJfWktXhnXt1icEjzajpbyhYuwq5_lavS09_yw3bg-CCEJRd7dml9xwEnA0C1PzGuOVjOupGRRKtnghquELHB3ASk_AeiiiQkhweiCSsVyTqueJejHv16XykwLGi7R7bnj3LY8o_GFiB_ceoY6sHK2t4LG1ol9rkzdz9YLa0cl3nMAc_XdRRIbUWhW15-o"
              />
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-[20px] text-primary mb-2">Desabolladura de Precisión</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Reparación estructural y estética de carrocerías. Eliminación de abolladuras complejas recuperando las líneas originales de fábrica.</p>
              <a className="inline-flex items-center gap-1 font-label-bold text-label-bold text-secondary hover:text-secondary-container transition-colors" href="#">
                Conocer más <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-surface-container-lowest rounded-lg border border-surface-variant overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="h-48 overflow-hidden bg-surface-container-high relative">
              <img 
                alt="Pintura Profesional" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ2-oVIzih65oFKBDM8EV5rdu68aDIIklW4Iv-PVR-AiD2v-RrS9kLGmmy15YOI0cSoLxcutI86QMVYzp1kUVQjfT0rqO1m_1imiDbE1yXjOaAJzfQgXTvmM760ww_G_uXGNDVjr7FzygWbgY8brIQYCIJ-4RpPLYpagmdTHTckgJCWYvYmFPxXHpIOQ94EzS1Bd4Rzk3IUMVCm5rB5m8bFgSasQvX12wJTtx2MObn8NTiMl-WUZByEh6AnglfXq1zxX2j9EhbaWA"
              />
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-[20px] text-primary mb-2">Pintura Profesional</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Pintura al horno con igualación de color computarizada. Acabados premium resistentes a los rayos UV y condiciones climáticas extremas.</p>
              <a className="inline-flex items-center gap-1 font-label-bold text-label-bold text-secondary hover:text-secondary-container transition-colors" href="#">
                Conocer más <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-surface-container-low py-16 w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">Encuéntrenos en Coquimbo</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">Visite nuestro taller equipado con tecnología de punta para una evaluación sin compromiso de su vehículo.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-primary">Dirección Principal</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Av. Taller Mecánico 567, Barrio Industrial<br/>Coquimbo, Región de Coquimbo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-primary">Horario de Atención</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Lunes a Viernes: 09:00 - 18:30<br/>Sábados: 09:00 - 14:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">phone</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-primary">Contacto Directo</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">+56 9 1234 5678<br/>contacto@comercialfernandez.cl</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant shadow-sm relative mt-8 lg:mt-0">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-container text-on-surface-variant p-6 text-center">
                <span className="material-symbols-outlined text-[48px] text-primary mb-4 opacity-50">map</span>
                <p className="font-headline-md text-[18px]">Vista de Mapa Integrada</p>
                <p className="font-caption text-caption mt-2">(API de Google Maps iría aquí configurada para Coquimbo)</p>
                <img 
                  alt="Mapa Ubicacion" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC25btSTvUDOLICCH9HHQ66MMjBVFzYUJ7OIQpa0Kfwuun-2DvDcHKC2u1P8Rd-udtwBz1K8if_4-_w6qSespVlCkt0omEsbJubxbYsdf1ABESFoM8TcLysSveoJ1S_UkalII9Lum1uxHu1TvTR7OgVg7QC0J2FVRl-3UeqEX3bzlrXBGmNa2Er6lf2GL_6zpQFvP0zRUj3cfubRd3edVyIUqvlxY0iTDytlc70IDwhl5KgI48nrMfmfvUR9Xmxs0NX4AIrNnDFx1k"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
