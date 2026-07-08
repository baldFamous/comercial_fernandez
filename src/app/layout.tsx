import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Comercial Fernandez de la Peña | Parabrisas y Pintura en Coquimbo',
  description: 'Especialistas en cambio de parabrisas, lunetas, desabolladura y pintura automotriz en toda la Región de Coquimbo. Atención a vehículos, camiones y maquinaria pesada.',
  alternates: {
    canonical: 'https://comercial-fernandez.com',
  },
  openGraph: {
    title: 'Comercial Fernandez de la Peña | Cristales y Carrocería',
    description: 'Cotiza tu cambio de parabrisas o servicio de pintura automotriz vía WhatsApp de forma inmediata. Cobertura en Coquimbo, La Serena y toda la región.',
    url: 'https://comercial-fernandez.com',
    siteName: 'Comercial Fernandez de la Peña',
    images: [
      {
        url: 'https://comercial-fernandez.com/images/fondo-parabrisas-opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Inventario de Parabrisas Comercial Fernandez de la Peña',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: "Comercial Fernandez de la Peña",
  image: "https://comercial-fernandez.com/images/fondo-parabrisas-opengraph.jpg",
  "@id": "",
  url: "https://comercial-fernandez.com", 
  telephone: "+56912345678",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Baquedano 605",
    addressLocality: "Coquimbo",
    addressRegion: "Coquimbo",
    postalCode: "1770000",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -29.9623, 
    longitude: -71.33218,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased`}>
        {/* TopNavBar */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow flex flex-col gap-section-gap">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-primary dark:bg-tertiary-container full-width pb-[80px] md:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
            {/* Brand Column */}
            <div className="flex flex-col gap-4">
              <span className="font-headline-md text-headline-md font-bold text-on-primary">Comercial Fernández</span>
              <p className="font-body-md text-body-md text-on-primary-container dark:text-on-tertiary-container max-w-sm">Especialistas en la restauración estética y estructural de vehículos en la región de Coquimbo.</p>
            </div>
            {/* Info Column */}
            <div className="flex flex-col gap-3">
              <a className="font-body-md text-body-md text-on-primary-container dark:text-on-tertiary-container hover:text-secondary-fixed transition-colors active:opacity-90" href="#">Horarios: Lun-Vie 09:00 - 18:00</a>
              <a className="font-body-md text-body-md text-on-primary-container dark:text-on-tertiary-container hover:text-secondary-fixed transition-colors active:opacity-90" href="https://maps.google.com/?q=Baquedano+605,+Coquimbo" target="_blank" rel="noreferrer">Baquedano 605, Coquimbo</a>
            </div>
            {/* Legal Column */}
            <div className="flex flex-col gap-3 md:items-end">
              <a className="font-body-md text-body-md text-on-primary-container dark:text-on-tertiary-container hover:text-secondary-fixed transition-colors active:opacity-90" href="#">Términos y Condiciones</a>
              <a className="font-body-md text-body-md text-on-primary-container dark:text-on-tertiary-container hover:text-secondary-fixed transition-colors active:opacity-90" href="#">Política de Privacidad</a>
            </div>
            {/* Copyright */}
            <div className="col-span-1 md:col-span-3 mt-8 pt-8 border-t border-on-primary/10 text-center md:text-left">
              <p className="font-caption text-caption text-on-primary-container dark:text-on-tertiary-container">© 2024 Comercial Fernández. Expertos en Cristales, Desabolladura y Pintura.</p>
            </div>
          </div>
        </footer>

        {/* Mobile Sticky Contact Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 glass-panel p-margin-mobile flex gap-4 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <a 
            href="/contacto#cotizacion"
            className="w-full flex justify-center items-center gap-2 bg-secondary text-on-secondary font-label-bold text-label-bold py-3 rounded-DEFAULT shadow-sm"
          >
            <span className="material-symbols-outlined" data-icon="chat">chat</span>
            Solicitar Cotización
          </a>
        </div>
      </body>
    </html>
  );
}
