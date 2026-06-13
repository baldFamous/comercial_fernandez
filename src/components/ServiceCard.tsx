import { generateWhatsAppLink } from "@/utils/whatsapp";

interface ServiceCardProps {
  title: string;
  description: string;
  whatsappMessage: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  whatsappMessage,
  icon,
}: ServiceCardProps) {
  const whatsappUrl = generateWhatsAppLink(whatsappMessage);

  return (
    <div className="flex flex-col p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg group">
      {icon && (
        <div className="mb-4 text-brand-red p-3 bg-red-50 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-brand-red rounded-md hover:bg-brand-red-hover transition-colors duration-200"
      >
        Cotizar por WhatsApp
      </a>
    </div>
  );
}
