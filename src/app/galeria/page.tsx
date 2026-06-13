export default function GaleriaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-section-gap px-margin-desktop bg-surface-container-low text-center w-full">
        <div className="max-w-container-max mx-auto">
          <h1 className="font-display-lg text-display-lg text-primary mb-4 md:mb-6">Restaurados a la Perfección</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Explora nuestro portafolio de transformaciones. Resultados precisos, materiales de alta calidad y atención meticulosa al detalle en cada reparación.</p>
        </div>
      </section>

      {/* Before/After Bento Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Large Feature Card */}
          <div className="md:col-span-8 bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm group">
            <div className="relative h-96 w-full flex">
              <div className="w-1/2 relative bg-surface-container-high">
                <img alt="Coche dañado antes de la reparación" className="absolute inset-0 w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHXb0pBjtWHyDRfS-ifLWe4NNelh0y9Obp3B1rI6Y8Ytc5nh9UHKdedz5Hwx4EymIvrt7J2qEDZSucD4ePNLHlP7UXW_LBz2IdzVykDd8IUFUY0wzTsq8FTvl8I-a5Htna9A3htqyYBT5ATeSN-MfJZ4SeZQINxFuJaj5v-5-oZg3ZUTFVCNGlMFOtr4EZ-B27hzSvGnfJpc_6swzFd7wl8AzyO98eH8r5QLD8s4yuWwwYlDEyi19x7FEj-dYM2xhEaSNPSfG1IB8" />
                <div className="absolute top-4 left-4 bg-surface/80 backdrop-blur px-3 py-1 rounded font-label-bold text-label-bold text-on-surface">Antes</div>
              </div>
              <div className="w-1/2 relative bg-surface">
                <img alt="Coche reparado brillante" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvHX5T4rqhJvCvupEUhazUMk1juN-PB2xvX6Nc1fDVovkTokJSPVB2w9MH7RikLc8vjknVd7-nX-oCI0NYahdAYNKA2ktR57SkeeiorThRNbjQvze6wWn4Ys6xrmg2EZ3n72RVQjG3AcFkklS4oGEFHJOB24KoIanF-HR2J6B0W6K81TjalmhzotrJHatER_DSqnOphbC3SteRB3khixTIREN1RucaDy_CgijYAUEbYYZxzm8paYRS8JZ36pPDbbycSrA6oa2Ghnw" />
                <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded font-label-bold text-label-bold shadow-sm">Después</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Reconstrucción Frontal Completa</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Desabolladura estructural, reemplazo de ópticas y pintura horneada con igualación de color exacta.</p>
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="md:col-span-4 bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm group">
            <div className="relative h-48 w-full flex">
              <div className="w-1/2 relative">
                <img alt="Detalle de rasguño antes" className="absolute inset-0 w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD903D3IXqRwHFFYc9PIL14YhHocDXcDMVQe24jqMKUnUrT7QYtFZ-LAtoflkwr0fHV1yYzZgoBSTb1YkxZfvgFw4NBYSA0Qn5ShJwX5M2bf95bWJC4uocg2d1yS1aRPSlm4rcR198IB5UvCLW9Bc32JeRd16Cie0bRMccRn8XRA_xcB2d8SGGVAdd74td3IGuS_FgNgZYjOUIsRc94zT9CUh-F-87iLemfQir7wYhx21H2G4nJUJQyFOOns95obq3tpnX-3scE3oc" />
              </div>
              <div className="w-1/2 relative">
                <img alt="Detalle reparado brillante" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbSt67U0OzKK9yn7IVaECjXMxhrJ3kEVmPQ45-GJC5wZKo-bovaNnYKmh7eT4as2FFQjsmosrX-Iqez9YJGPII2TbmnfU_by6aiK-0Gg-FEb9gGVRZ8RrRiHY3MyYJkOoVvpugXGN_p0_lANlzhjweMDncoKxObJ-CJsQbzoXROmNKiI2ZtW3bv05hUDe3bx2F0OnztM8uUTVizZIf9sn-O-cZdrwOJwrcLEkGD9HeYNNWAj39GbS5jpHajpDNLYbA5Vi-ueTPPrk" />
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-headline-md text-headline-md text-primary mb-2 text-xl">Pulido y Corrección</h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Eliminación de rayones profundos sin repintar.</p>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="md:col-span-4 bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm group">
            <div className="relative h-48 w-full flex">
              <div className="w-1/2 relative">
                <img alt="Parabrisas roto" className="absolute inset-0 w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhshGSnO2iBuTGNZxtsnCqET4_I3uiw0va7ur7UJwytd6exTZ4Yeo8DSUVFN253wQS57S9JGULvrA0Sc_qQQhoQKEqKPN4HnyBc9LCgcqoc-zTAkmRys-XfKAMRXjBFywnpGxiqjjhK9MCaGKu2l3xXSsGhnjmIfWDCzZvYvSXJcK5pJfBnjDyQOoeMOz__llSmNnI8eCYErTBZKvdvg0rKwWJPat4TPm8xQaoxF6u6V6j-8cy0SD0mmNT1EUoERsj-YVwyhUP4LE" />
              </div>
              <div className="w-1/2 relative">
                <img alt="Parabrisas nuevo" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3-xUrqOtbKDGqON8wWtgtmMfON5Av60rDnLBi1bIVXb23l-dggnhVdWkMDe4iRDeyWM8JEmLdDLB92NPHQM3_N7Yyckoewwq5qtqN1WKShJNrpPr6cC6dAq2R22kODlfugTbmZ6Gwg39huMqoIr_MMWV_pVUqpeonZxVXAt_OTdI7pK-1fQDxYiw0ZYPC6LXrzE-j3MndJaups4nT_0tA_4N-p5ZC2ZgjM7bbMZ9ducFsLYAgbjY9ZEcZSrq5jNTPlkM42KaXSPc" />
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-headline-md text-headline-md text-primary mb-2 text-xl">Cambio de Cristales</h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Instalación certificada de parabrisas originales.</p>
            </div>
          </div>

          {/* Medium Feature Card */}
          <div className="md:col-span-8 bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm group">
            <div className="relative h-64 w-full flex">
              <div className="w-1/2 relative">
                <img alt="Abolladura lateral" className="absolute inset-0 w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq37pmwH2CUY0sLL34adNh-i8woZ4ahCcLOweczRr-p4XP_YdCq8edq1ZSDVEFsrw87zh2x1ELSBq0Pxpg3fYZCAEY3rltDRYHaKrTsTw6m1cH5dW_LPLzFUS96BAVd9-kzjpQPFd5yWpgAFgA7ER5aAnFFk6Ab9NyhBVW10clVSev_ULtljz2nzD26p57jMPOLaJhNH9zkSePsmv-spGSXwa7TWyLsSHpKDOUVvPvD_F_uRDi_fHb6nedjqBVe9MwO8PuCyDAg8w" />
                <div className="absolute bottom-4 left-4 bg-surface/80 backdrop-blur px-3 py-1 rounded font-label-bold text-label-bold text-on-surface text-xs">Antes</div>
              </div>
              <div className="w-1/2 relative">
                <img alt="Lateral reparado" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxwLtZQMLy8tvILhN0FgoWViFExaTjXMoVU02FcIQC9SJMQsjlmMcXjFa1ko_SdYb_vq1g9HxaQVSTLpi4LyHPLGfaKP6K-l494mfBti_4mWtw8AWuMB0SuAOncEp0DoCeHm8cfhRzzMs_r-XAUdBhz2mdPVAKIf5IvuN3qfT4zBQYFOALcl-vwixy-ui2D3rmUqkQ_EycWpF9JJqisogbLOpxcU84CU6xtoGun8DpnhmzmlzvYCmZ_Mfkj5JEKnLR_LynVyUjUfQ" />
                <div className="absolute bottom-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded font-label-bold text-label-bold text-xs shadow-sm">Después</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Desabolladura PDR</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Reparación de abolladuras sin dañar la pintura original, técnica rápida y precisa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-section-gap bg-primary text-on-primary w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">Experiencia Comprobada</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto">Lo que dicen nuestros clientes sobre la precisión de nuestro trabajo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-tertiary-container p-6 rounded-lg border border-outline-variant/20">
              <div className="flex items-center space-x-1 mb-4 text-secondary">
                <span className="material-symbols-outlined fill">star</span>
                <span className="material-symbols-outlined fill">star</span>
                <span className="material-symbols-outlined fill">star</span>
                <span className="material-symbols-outlined fill">star</span>
                <span className="material-symbols-outlined fill">star</span>
              </div>
              <p className="font-body-md text-body-md text-on-tertiary-container mb-6 italic">"El parachoques quedó literalmente como nuevo. El color es exacto y me entregaron el auto en el tiempo prometido. Taller muy profesional."</p>
              <div className="font-label-bold text-label-bold text-on-primary">Carlos M.</div>
              <div className="font-caption text-caption text-on-tertiary-container">Reparación Frontal</div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-tertiary-container p-6 rounded-lg border border-outline-variant/20">
              <div className="flex items-center space-x-1 mb-4 text-secondary">
                <span className="material-symbols-outlined fill">star</span>
                <span className="material-symbols-outlined fill">star</span>
                <span className="material-symbols-outlined fill">star</span>
                <span className="material-symbols-outlined fill">star</span>
                <span className="material-symbols-outlined fill">star</span>
              </div>
              <p className="font-body-md text-body-md text-on-tertiary-container mb-6 italic">"Rápida atención para el cambio de parabrisas. Me explicaron el proceso y me sentí seguro dejando mi camioneta en sus manos."</p>
              <div className="font-label-bold text-label-bold text-on-primary">Andrea V.</div>
              <div className="font-caption text-caption text-on-tertiary-container">Cambio de Cristal</div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-tertiary-container p-6 rounded-lg border border-outline-variant/20">
              <div className="flex items-center space-x-1 mb-4 text-secondary">
                <span className="material-symbols-outlined fill">star</span>
                <span className="material-symbols-outlined fill">star</span>
                <span className="material-symbols-outlined fill">star</span>
                <span className="material-symbols-outlined fill">star</span>
                <span className="material-symbols-outlined fill">star_half</span>
              </div>
              <p className="font-body-md text-body-md text-on-tertiary-container mb-6 italic">"Tenía miedo de que se notara la diferencia de pintura en la puerta, pero el trabajo fue impecable. Muy recomendados por su precisión."</p>
              <div className="font-label-bold text-label-bold text-on-primary">Roberto S.</div>
              <div className="font-caption text-caption text-on-tertiary-container">Pintura Lateral</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap px-margin-desktop text-center bg-surface-container-highest w-full">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">¿Tu vehículo necesita atención?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">No esperes más. Agenda una evaluación técnica hoy mismo y vuelve a la ruta con seguridad.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-secondary text-on-secondary font-headline-md text-headline-md text-lg rounded shadow-sm hover:bg-secondary-container transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined mr-2">calendar_month</span>
              Agendar Evaluación
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
