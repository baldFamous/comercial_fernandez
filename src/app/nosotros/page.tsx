export default function NosotrosPage() {
  return (
    <>
      <section className="bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop border-b border-surface-variant w-full">
        <div className="max-w-container-max mx-auto text-center">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">
            Nuestra Historia
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            En Comercial Fernández llevamos más de 15 años dedicados a la excelencia en la reparación y mantenimiento automotriz. Nuestro compromiso es devolver la seguridad y estética a tu vehículo con los más altos estándares de calidad.
          </p>
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface w-full">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="rounded-xl overflow-hidden border border-outline-variant shadow-sm h-[400px] relative">
            <img 
              alt="Nuestro equipo de mecánicos" 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqkpJ6RCfKHcF7YQT7e7KuN2X8543T2u9LlCibG_2ooE42-h23NaEv6_fDBpL8ZcJQ6to1bbZ2QbBLRQDiKnmL6rOM-HXbEqZetHYjZ2NgcrRHG0cVPrYd7DE50Xn9yCTpSKPyTrLvggwtiIY2K1Q4C6kGgRXMboN1vy6kXawuGlUq_Y99QtefRr8qx0_cy5SRq-Zm2XESBhFBMiMpRd1Gns38iC4xKIxwPaREfF_-ea0dola749x7ezOrDA-mSIUofpw8KrQw0eE" 
            />
          </div>
          <div className="space-y-6 md:pl-8">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary fill">verified</span>
                Misión y Visión
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Buscamos ser el taller líder en Coquimbo, destacando por nuestra precisión técnica, rapidez y atención transparente. Invertimos constantemente en tecnología y capacitación para nuestro equipo de mecánicos especialistas.
              </p>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary fill">handshake</span>
                Nuestro Compromiso
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Cada vehículo que ingresa a nuestras instalaciones es tratado con el máximo cuidado. Garantizamos nuestro trabajo al 100% y utilizamos repuestos e insumos certificados (OEM y equivalentes de alta calidad).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
