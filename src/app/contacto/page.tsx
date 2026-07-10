"use client";

import React, { FormEvent } from "react";
import { generateWhatsAppLink } from "@/utils/whatsapp";

export default function ContactoPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const vehicle = formData.get("vehicle") as string;
    const serviceKey = formData.get("service") as string;
    const details = formData.get("details") as string;

    const serviceLabels: Record<string, string> = {
      cristales_maquinaria: "Cristales para Maquinaria Pesada",
      cristales_camiones: "Parabrisas de Camiones/Buses",
      cristales_vehiculos: "Parabrisas de Auto/SUV",
      desabolladura: "Desabolladura",
      pintura: "Pintura Automotriz",
      otro: "Otro / Consulta General",
    };

    const service = serviceLabels[serviceKey] || "No especificado";

    const baseMessage = `Hola Comercial Fernández, me gustaría solicitar una cotización.

Detalles de la solicitud:
------------------------------------------
• Nombre:
  ${name}

• Teléfono:
  ${phone}

• Vehículo:
  ${vehicle}

• Servicio:
  ${service}

• Detalles:
  ${details || "No especificado"}
------------------------------------------`;

    const whatsappUrl = generateWhatsAppLink(baseMessage);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const quickContactUrl = generateWhatsAppLink("Hola Comercial Fernández, me gustaría realizar una consulta rápida.");

  return (
    <>
      {/* Hero Section for Contact */}
      <section className="bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop border-b border-surface-variant w-full">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="space-y-6">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary">
              Cotiza el cristal para tu maquinaria o flota en Coquimbo.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Servicio en terreno para minería, transporte y particulares en La Serena, Coquimbo, Ovalle y zonas interiores. Llena el formulario o contáctanos por WhatsApp para una atención rápida y con stock inmediato.
            </p>
            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a className="flex justify-center items-center gap-2 font-label-bold text-label-bold bg-[#25D366] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-md w-full sm:w-auto" href="#cotizacion">
                <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path></svg>
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-outline-variant shadow-sm h-[400px] relative">
            <img alt="Taller mecánico moderno" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqkpJ6RCfKHcF7YQT7e7KuN2X8543T2u9LlCibG_2ooE42-h23NaEv6_fDBpL8ZcJQ6to1bbZ2QbBLRQDiKnmL6rOM-HXbEqZetHYjZ2NgcrRHG0cVPrYd7DE50Xn9yCTpSKPyTrLvggwtiIY2K1Q4C6kGgRXMboN1vy6kXawuGlUq_Y99QtefRr8qx0_cy5SRq-Zm2XESBhFBMiMpRd1Gns38iC4xKIxwPaREfF_-ea0dola749x7ezOrDA-mSIUofpw8KrQw0eE" />
          </div>
        </div>
      </section>

      {/* Bento Grid Layout: Form, Map, Info */}
      <section id="cotizacion" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface w-full">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Quote Form (Takes up 7 columns on desktop) */}
          <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-8 shadow-sm">
            <div className="mb-6 border-b border-surface-variant pb-4">
              <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary fill">request_quote</span>
                Solicitar Cotización
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Ingresa los detalles de tu vehículo y el tipo de servicio que necesitas. Te responderemos en menos de 24 horas hábiles.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="font-label-bold text-label-bold text-primary block" htmlFor="name">Nombre Completo</label>
                  <input required className="w-full bg-surface-bright border-outline-variant text-on-surface focus:border-primary focus:ring-primary rounded-lg font-body-md text-body-md p-3 transition-colors border" id="name" name="name" placeholder="Ej: Juan Pérez" type="text" />
                </div>
                {/* Phone */}
                <div className="space-y-2">
                  <label className="font-label-bold text-label-bold text-primary block" htmlFor="phone">Teléfono / WhatsApp</label>
                  <input required className="w-full bg-surface-bright border-outline-variant text-on-surface focus:border-primary focus:ring-primary rounded-lg font-body-md text-body-md p-3 transition-colors border" id="phone" name="phone" placeholder="+56 9 " type="tel" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vehicle Make/Model */}
                <div className="space-y-2">
                  <label className="font-label-bold text-label-bold text-primary block" htmlFor="vehicle">Maquinaria, Camión o Vehículo</label>
                  <input required className="w-full bg-surface-bright border-outline-variant text-on-surface focus:border-primary focus:ring-primary rounded-lg font-body-md text-body-md p-3 transition-colors border" id="vehicle" name="vehicle" placeholder="Ej: Retroexcavadora CAT o Toyota Hilux" type="text" />
                </div>
                {/* Service Type */}
                <div className="space-y-2">
                  <label className="font-label-bold text-label-bold text-primary block" htmlFor="service">Tipo de Servicio Principal</label>
                  <select required className="w-full bg-surface-bright border-outline-variant text-on-surface focus:border-primary focus:ring-primary rounded-lg font-body-md text-body-md p-3 transition-colors border" id="service" name="service" defaultValue="">
                    <option disabled value="">Selecciona un servicio</option>
                    <option value="cristales_maquinaria">Cristales para Maquinaria Pesada</option>
                    <option value="cristales_camiones">Parabrisas de Camiones/Buses</option>
                    <option value="cristales_vehiculos">Parabrisas de Auto/SUV</option>
                    <option value="desabolladura">Taller de Desabolladura</option>
                    <option value="pintura">Pintura Automotriz</option>
                    <option value="otro">Otro / Consulta General</option>
                  </select>
                </div>
              </div>
              {/* Details */}
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold text-primary block" htmlFor="details">Detalles del problema o requerimiento</label>
                <textarea className="w-full bg-surface-bright border-outline-variant text-on-surface focus:border-primary focus:ring-primary rounded-lg font-body-md text-body-md p-3 transition-colors border" id="details" name="details" placeholder="Describe brevemente el daño o lo que necesitas cotizar..." rows={4}></textarea>
              </div>
              {/* Submit */}
              <div className="pt-4 flex justify-end">
                <button className="font-label-bold text-label-bold bg-primary text-on-primary px-8 py-3 rounded-lg hover:bg-primary-container transition-colors w-full md:w-auto shadow-sm flex items-center justify-center gap-2" type="submit">
                  Enviar Solicitud
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>

          {/* Info Stack (Takes up 5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-gutter">
            {/* Operating Hours Card */}
            <div className="bg-primary text-on-primary rounded-xl p-6 shadow-sm border border-primary-container">
              <h3 className="font-headline-md text-headline-md mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">schedule</span>
                Horario de Atención
              </h3>
              <ul className="space-y-3 font-body-md text-body-md">
                <li className="flex justify-between items-center border-b border-primary-container pb-2">
                  <span className="font-label-bold">Lunes a Viernes</span>
                  <span>09:00 - 13:00 y 15:00 - 18:00 hrs</span>
                </li>
                <li className="flex justify-between items-center border-b border-primary-container pb-2">
                  <span className="font-label-bold">Sábado</span>
                  <span>09:00 - 13:00 hrs</span>
                </li>
                <li className="flex justify-between items-center text-on-tertiary-container pt-1">
                  <span className="font-label-bold">Domingo y Festivos</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>

            {/* Location & Map Card */}
            <div className="bg-surface-container-low rounded-xl border border-outline-variant overflow-hidden shadow-sm flex-grow flex flex-col">
              <div className="p-6 border-b border-outline-variant bg-surface-container-lowest">
                <h3 className="font-headline-md text-headline-md text-primary mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                  Ubicación del Taller
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex items-start gap-2 mt-3">
                  Baquedano 605,<br/> Coquimbo, Región de Coquimbo.
                </p>
              </div>
              <div className="flex-grow min-h-[250px] relative bg-surface-variant">
                <iframe
                  title="Mapa de ubicación - Baquedano 605, Coquimbo"
                  src="https://maps.google.com/maps?q=Baquedano%20605,%20Coquimbo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <a className="block w-full text-center bg-surface-container-highest py-3 font-label-bold text-label-bold text-primary hover:bg-surface-dim transition-colors" href="https://maps.google.com/?q=Baquedano+605,+Coquimbo" target="_blank" rel="noreferrer">
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
