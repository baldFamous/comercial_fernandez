/**
 * Utilidad para generar URLs dinámicas de WhatsApp Business
 */

// NOTA: Reemplazar por el número real cuando el usuario lo provea.
// Formato internacional sin símbolos (ej: 56912345678 para Chile)
export const WHATSAPP_NUMBER = "56985007356";

export function generateWhatsAppLink(baseMessage: string, customPhone?: string): string {
  // Aseguramos que el texto esté correctamente codificado para URL
  const encodedMessage = encodeURIComponent(baseMessage);
  const targetNumber = customPhone || WHATSAPP_NUMBER;
  return `https://wa.me/${targetNumber}?text=${encodedMessage}`;
}

