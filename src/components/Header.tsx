"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/galeria', label: 'Galería' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className="bg-surface dark:bg-on-surface border-b border-outline-variant docked full-width top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link 
            href="/" 
            className="font-headline-md text-[18px] md:text-headline-md font-bold text-primary dark:text-primary-fixed"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Comercial Fernández
          </Link>
        </div>
        
        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`font-label-bold text-label-bold transition-all duration-200 ${
                  isActive 
                    ? 'text-secondary font-bold border-b-2 border-secondary pb-1' 
                    : 'text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed active:opacity-80'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        
        {/* Actions - Desktop */}
        <div className="hidden md:flex gap-4">
          <a 
            href="/contacto#cotizacion"
            className="font-label-bold text-label-bold px-4 py-2 bg-secondary text-on-secondary rounded-DEFAULT hover:bg-secondary-container transition-colors shadow-sm flex items-center justify-center"
          >
            Agendar Cita
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          type="button"
          className="md:hidden text-white bg-primary dark:bg-white/10 p-3 rounded-md cursor-pointer relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span className="material-symbols-outlined block pointer-events-none">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface dark:bg-on-surface border-b border-outline-variant shadow-lg flex flex-col px-margin-mobile py-4 gap-4 z-40">
          <nav className="flex flex-col gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-label-bold text-label-bold transition-all duration-200 text-lg ${
                    isActive 
                      ? 'text-secondary font-bold' 
                      : 'text-on-surface-variant dark:text-surface-variant'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
