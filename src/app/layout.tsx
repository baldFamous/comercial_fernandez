import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import Navigation from "@/components/Navigation";
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
  title: "Comercial Fernández | Especialistas en Cristales y Carrocería",
  description:
    "Taller mecánico en Coquimbo especializado en instalación de parabrisas, lunetas, desabolladura, pintura y venta de repuestos y llantas.",
  openGraph: {
    title: "Comercial Fernández",
    description: "Expertos en cristales, carrocería y repuestos en Coquimbo.",
    locale: "es_CL",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: "Comercial Fernández",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSes1c6wldJjV_33yFZ9QgzZh4XLv6CYJ4orR6tEeHNvumxPqcXOrF0gZzkjqiYl96KDljqjIr38SkhGHhZMmN5b6Ti2tfIvbIiy7QtY-xMxvWH3EsvSZQiLxyJouzqTVqDVMNZQiITAIIScqbKqzyDoDUwoKr_zK7uIl8cuc_4EI65UgbTDMrcREDoWYlPyZvYPAW3yJ3w0QhH-cCSiCjtA9f2HFzz4IJSqxUhC1pXA-Brm-J4xILRKoyvF2UPDnea3ca0k2wbMY",
  "@id": "",
  url: "https://tallerfernandez.vercel.app", 
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
        <header className="bg-surface dark:bg-on-surface border-b border-outline-variant docked full-width top-0 sticky z-50">
          <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <Link href="/" className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed hidden sm:block">Comercial Fernández</Link>
            </div>
            
            {/* Navigation Links */}
            <Navigation />
            
            {/* Actions */}
            <div className="hidden md:flex gap-4">
              <a 
                href="tel:+56912345678"
                className="font-label-bold text-label-bold px-4 py-2 border border-primary text-primary rounded-DEFAULT hover:bg-surface-container transition-colors flex items-center justify-center"
              >
                Llamar Ahora
              </a>
              <a 
                href="/contacto#cotizacion"
                className="font-label-bold text-label-bold px-4 py-2 bg-secondary text-on-secondary rounded-DEFAULT hover:bg-secondary-container transition-colors shadow-sm flex items-center justify-center"
              >
                Agendar Cita
              </a>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-primary p-2">
              <span className="material-symbols-outlined" data-icon="menu">menu</span>
            </button>
          </div>
        </header>

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
            href="tel:+56912345678"
            className="flex-1 flex justify-center items-center gap-2 border border-primary text-primary bg-surface font-label-bold text-label-bold py-3 rounded-DEFAULT"
          >
            <span className="material-symbols-outlined" data-icon="call">call</span>
            Llamar
          </a>
          <a 
            href="/contacto#cotizacion"
            className="flex-1 flex justify-center items-center gap-2 bg-secondary text-on-secondary font-label-bold text-label-bold py-3 rounded-DEFAULT shadow-sm"
          >
            <span className="material-symbols-outlined" data-icon="chat">chat</span>
            Cotizar
          </a>
        </div>
      </body>
    </html>
  );
}
