import { siteConfig } from '../config/siteConfig';

export interface WhatsAppEnquiryParams {
  name?: string;
  partnerName?: string;
  weddingDate?: string;
  weddingLocation?: string;
  eventType?: string;
  services?: string[];
  packageName?: string;
  estimatedBudget?: string;
  customMessage?: string;
}

export function buildWhatsAppLink(params: WhatsAppEnquiryParams = {}): string {
  const number = siteConfig.brand.whatsappNumber.replace(/[^0-9]/g, '');
  
  let text = `Hello Rahul & team Your Dream Planner! ✨\n`;
  text += `I visited your website and would love to enquire about wedding photography & cinematography.\n\n`;

  if (params.name) {
    text += `*Name:* ${params.name}\n`;
  }
  if (params.partnerName) {
    text += `*Partner's Name:* ${params.partnerName}\n`;
  }
  if (params.weddingDate) {
    text += `*Wedding / Event Date:* ${params.weddingDate}\n`;
  }
  if (params.weddingLocation) {
    text += `*Location / City:* ${params.weddingLocation}\n`;
  }
  if (params.eventType) {
    text += `*Event Type:* ${params.eventType}\n`;
  }
  if (params.packageName) {
    text += `*Interested Package:* ${params.packageName}\n`;
  }
  if (params.services && params.services.length > 0) {
    text += `*Services Required:* ${params.services.join(', ')}\n`;
  }
  if (params.estimatedBudget) {
    text += `*Estimated Budget:* ${params.estimatedBudget}\n`;
  }
  if (params.customMessage) {
    text += `\n*Details:* ${params.customMessage}\n`;
  }

  text += `\nPlease let me know your availability and send a quotation. Thank you!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
