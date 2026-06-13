"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/galeria', label: 'Galería' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
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
  );
}
