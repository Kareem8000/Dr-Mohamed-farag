export interface Review {
  id: string;
  patientName: string;
  rating: number;
  text: string;
  date: string;
  avatarUrl?: string;
  verified?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  whatsappMessage: string; // Added field for specific WhatsApp message
}

export interface ClinicInfo {
  name: string;
  doctor: string;
  title: string;
  address: string;
  phone: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  vezeeta: string;
  mapEmbedUrl: string;
  workingHours: string;
}